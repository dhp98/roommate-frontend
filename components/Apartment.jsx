import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaParking, FaDog, FaWifi, FaTv} from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import {GiWashingMachine, GiElevator} from "react-icons/gi";

const Apartment = ({apartment}) => (
    <Link href={`/apartment/${apartment._id}`} passHref>
        <Flex flexWrap='wrap' w='400px' p='5' paddingTop='10px' justifyContent='flex-start' cursor='pointer' >
            <Box>
                <Image src="https://cf.ltkcdn.net/mortgage/images/orig/172674-850x565-House-for-rent-IS.jpg" width={400} height={260} />
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Text fontWeight='bold' fontSize='lg'>PRICE: {apartment.price}/MONTH</Text>
                    </Flex>
                </Flex>
                <Flex alignItems='center' p='1' w='350px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><FaBed/> &nbsp;: {apartment.numberOfBeds}, &nbsp; <FaBath/> &nbsp;: {apartment.numberOfBaths}</Flex>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400' justifyContent='flex-end'><FaParking/> &nbsp;: {apartment.parking?<>Yes</>:<>No</>}</Flex>
                </Flex>
                <Flex alignItems='center' p='1' w='350px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><BsFillHouseFill/> &nbsp;: {apartment.squareFeet} SqFt</Flex>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400' justifyContent='flex-end'><FaDog/> &nbsp;: {apartment.petFriendly?<>Yes</>:<>No</>}</Flex>
                </Flex>
                <Flex alignItems='center' p='1' w='350px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><GiWashingMachine/> &nbsp;: {apartment.dishwater?<>Yes</>:<>No</>}</Flex>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400' justifyContent='flex-end'><FaWifi/> &nbsp;: {apartment.internet?<>Yes</>:<>No</>}</Flex>
                </Flex>
                <Flex alignItems='center' p='1' w='350px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><GiElevator/> &nbsp;: {apartment.elevator?<>Yes</>:<>No</>}</Flex>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400' justifyContent='flex-end'><FaTv/> &nbsp;: {apartment.television?<>Yes</>:<>No</>}</Flex>
                </Flex>
                <Text fontSize='lg' fontWeight='bold'>
                    <center>Apartment Address:&nbsp;{apartment.address}</center>
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default  Apartment ;