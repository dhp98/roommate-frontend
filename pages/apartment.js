import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import ApartmentFilters from '../components/ApartmentFilters';
import Apartment from '../components/Apartment';

import { baseUrl, fetchApi } from '../utils/fetchApi'

const Search = ({apartments}) => {
    const [apartmentFilters, setApartmentFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                onClick={() => setApartmentFilters(!apartmentFilters)}
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
            >
            <Text>Apply Filters</Text>
            <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {apartmentFilters && <ApartmentFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
              Apartments for Lease
            </Text>
            <Flex flexWrap='wrap' justifyContent={'center'}>
                {apartments.map((apartment) => <Apartment apartment={apartment} key={apartment._id} />)}
            </Flex>
            {apartments.length === 0 && (
            <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
                <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
            </Flex>
      )}
        </Box>
    )
}

export async function getServerSideProps({query}) {
    console.log("called again")

    // use query to construct url
    let url = baseUrl 
    url += 'apartment'
    let whereAdded = false;
    let oneAdded = false
    console.log(query)
    const preferences = {}
    if (query.numberOfBeds) {
        preferences["numberOfBeds"] =  query.numberOfBeds
        console.log(query.numberOfBeds)
    }
    if (query.numberOfBaths) {
        preferences["numberOfBaths"] =  query.numberOfBaths
        console.log(query.numberOfBaths)
    }
    if (query.minPrice) {
        preferences["minPrice"] =  query.minPrice
    }
    if (query.maxPrice) {
        preferences["maxPrice"] =  query.maxPrice
    }
    if (query.minArea) {
        preferences["minArea"] =  query.minArea
    }
    if (query.maxArea) {
        preferences["maxArea"] =  query.maxArea
    }
    if (query.amenities) {
        preferences['amenities'] = query.amenities
    }
    if (query.sort) {
        preferences['sort'] = query.sort
    }

    // console.log(query)
    // const preferences = {}
    // if (query.foodPreference) {
    //     preferences["foodPreference"] =  query.foodPreference
    // }
    // if (query.drinking) {
    //     preferences['drinking'] = query.drinking
    //     console.log(query.drinking)
    // }
    // if (query.smoking) {
    //     preferences['smoking'] = query.smoking
    //     console.log(query.drinking)
    // }
    // if (query.cookingSkills) {
    //     preferences['cookingSkills'] = query.cookingSkills
    //     console.log(query.drinking)
    // }
    // if (query.studyProgram) {
    //     preferences['studyProgram'] = query.studyProgram
    //     console.log(query.drinking)
    // }
    
    for (const [key, value] of Object.entries(preferences)) {
        if (key === "sort") {
            continue;
        }
        if (!whereAdded) {
            url +=  "?where={";
            whereAdded = true;
        }
        if (oneAdded) {
            url += ","
        }
        if (key === 'minPrice') {
            url += '"price":{"$gte": + ' + value + '}'
        } else if (key == 'minArea'){
            url += '"squareFeet":{"$gte": + ' + value + '}'
        } else if (key === 'maxPrice') {
            url += '"price":{"$lte": + ' + value + '}'
        } else if (key == 'maxArea'){
            url += '"squareFeet":{"$lte": + ' + value + '}'
        } else if (key == 'amenities') {
            url += value + ':true'
        } else {
            url +=  '"' + key + '"' + ': {"$in": ['+value+']}'
        }
        oneAdded=true;

    }
    if (whereAdded) {
        url += '}'
    }

    console.log(url)

    if (preferences.sort){
        console.log("Hello World")
        if (whereAdded) {
            url += '&'
        } else {
            url += "?"
        }
        if (preferences['sort'] === 'price-asc'){
            url += 'sort={"price": 1}'
        } else if (preferences['sort'] === 'price-des'){
            url += 'sort={"price": -1}'
        } else if (preferences['sort'] === 'date-asc'){
            url += 'sort={"updatedAt": -1}'
        } else if (preferences['sort'] === 'date-des'){
            url += 'sort={"updatedAt": -1}'
        }

    }

    console.log(url)

    const apartments = await fetchApi(`${url}`);
    // console.log(apartments.data)
    return {
      props: {
        apartments: apartments.data
    
      },
    };
}

export default Search;