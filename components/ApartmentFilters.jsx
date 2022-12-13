import { useEffect, useState } from 'react';
import { Flex,  Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Select from 'react-select'
import { filterData, getFilterValues } from '../utils/apartmentData';



const ApartmentFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        console.log("e ")
        console.log(filterValues)
        const path = router.pathname;
        const { query } = router;
    
        const values = getFilterValues(filterValues)
        console.log(values)
        console.log(values.length)
      
        values.forEach((item) => {
          console.log(item.name)

          if (item.value && Array.isArray(item.value) && filterValues?.[item.name]) {
            const current_values = []
            item.value.forEach(val => {
              current_values.push(val.value)
            })
            if (current_values.length > 0) {
              query[item.name] = '"' + current_values.join('","') + '"';
            } else {
              delete query[item.name]
            }
          } else if (item.value && filterValues?.[item.name]) {
            query[item.name] = item.value.value
          }
        })
      
        router.push({ pathname: path, query: query });
      };

      
    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
        {filters?.map((filter) => (
          <Box key={filter.queryName}>
            {(filter.queryName==='minPrice' || filter.queryName==='maxPrice' || filter.queryName==='minArea' || filter.queryName==='maxArea' || filter.queryName==='sort') ?
            <Select options={filter.items} onChange={(e) => searchProperties({ [filter.queryName]: e })} placeholder={filter.placeholder} w='fit-content' p='2'>
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option> 
              ))}
            </Select>
            :
            <Select options={filter.items} onChange={(e) => searchProperties({ [filter.queryName]: e })} placeholder={filter.placeholder} w='fit-content' p='2' isMulti >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option> 
            ))}
          </Select>
        }   
          </Box>
        ))}
        </Flex>
    )

}

export default ApartmentFilters;