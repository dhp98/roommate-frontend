import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '../components/SearchFilters';
import Profile from '../components/Profile';

import { baseUrl, fetchApi } from '../utils/fetchApi'


const Search = ({profiles}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                onClick={() => setSearchFilters(!searchFilters)}
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
            <Text>Search Roommate By Filters</Text>
            <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
               User Profiles
            </Text>
            <Flex flexWrap='wrap'>
                {profiles.map((profile) => <Profile profile={profile} key={profile._id} />)}
            </Flex>
            {profiles.length === 0 && (
            <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
                <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
            </Flex>
      )}
        </Box>
    )
}

export async function getServerSideProps({query}) {

    // use query to construct url
    let url = baseUrl 
    url += 'profile/'
    let whereAdded = false;
    let oneAdded = false
    console.log(query)
    const preferences = {}
    if (query.foodPreference) {
        preferences["foodPreference"] =  query.foodPreference
    }
    if (query.drinking) {
        preferences['drinking'] = query.drinking
        console.log(query.drinking)
    }
    if (query.smoking) {
        preferences['smoking'] = query.smoking
        console.log(query.drinking)
    }
    if (query.cookingSkills) {
        preferences['cookingSkills'] = query.cookingSkills
        console.log(query.drinking)
    }
    if (query.studyProgram) {
        preferences['studyProgram'] = query.studyProgram
        console.log(query.drinking)
    }
    
    for (const [key, value] of Object.entries(preferences)) {
        if (!whereAdded) {
            url +=  "?where={";
            whereAdded = true;
        }
        if (!oneAdded) {
            url +=  '"' + key + '"' + ': {"$in": ['+value+']}'
            oneAdded=true;
        } else {
            url += ',"' + key + '"' + ': {"$in": ['+value+']}'
        }
    }
    if (whereAdded) {
        url += '}'
    }

    console.log(url)
    const profiles = await fetchApi(`${url}`);
    return {
      props: {
        profiles: profiles.data
    
      },
    };
}

export default Search;