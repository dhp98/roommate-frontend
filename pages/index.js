import Link from 'next/link';
import Image from 'next/image'
import {Flex, Box, Text, Button } from '@chakra-ui/react'
import Profile from '../components/Profile';

import { baseUrl, fetchApi } from '../utils/fetchApi'

export const Banner = ({purpose, buttonText, linkName}) => {
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Box p="5">
      <Text>{purpose}</Text>
      <Text>{purpose}</Text>
      <Text>{purpose}</Text>

      {/* <Button fontSize='xl' bg="blue.300" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button> */}
    </Box>
  </Flex>
}

export default function Home({profiles}) {
  return (
  <Box>
     <Flex flexWrap='wrap'>
      <Text> Landing page </Text>
    </Flex>
  </Box>
  
  )
}

