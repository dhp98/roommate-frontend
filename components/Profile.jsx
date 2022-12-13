import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaParking, FaDog, FaWifi, FaTv, FaSmoking} from 'react-icons/fa';
import { BsFillHouseFill, BsFillPersonFill } from 'react-icons/bs';
import {GiWashingMachine, GiElevator, GiNotebook, GiCookingPot, GiEarthAmerica} from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { Button, Grid, Paper } from '@mui/material';

const Profile = ({ profile}) => (

  <Paper style={{ margin:"10px" }}>
  <Link href={`/profile/${profile._id}`} passHref>
    <Flex flexWrap='wrap' w='400px' p='5' paddingTop='10px' justifyContent='flex-start' cursor='pointer'>
      {/*
      <center>
        <Box w='full'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{width: 20 + '%', borderRadius: 100}}></img>

            {profile.userID!=null && <>
              <Text fontSize='lg'>
                Name: {profile.userID.firstName} {profile.userID.lastName}
                {console.log(profile.userId)}
              </Text>
            </>}
              
            {profile.foodPreference!=null && <>
              <Text fontSize='lg'>
                Food Preference: {profile.foodPreference}
              </Text>
            </>}

            {profile.studyProgram!=null && <>
              <Text fontSize='lg'>
                Study Program: {profile.studyProgram}
              </Text>
            </>}

            {profile.minAge!=null && <>
              <Text fontSize='lg'>
                Minimum Age: {profile.minAge}
              </Text>
            </>}

            {profile.maxAge!=null && <>
              <Text fontSize='lg'>
                Maximum Age: {profile.maxAge}
              </Text>
            </>}

            {profile.drinking==false && <>
              <Text fontSize='lg'>
                Drinking: Not fine with it.
              </Text>
            </>}

            {profile.drinking==true && <>
              <Text fontSize='lg'>
                Drinking: Fine with it.
              </Text>
            </>}

            {profile.smoking!=false && <>
              <Text fontSize='lg'>
                Smoking: Not fine with it.
              </Text>
            </>}

            {profile.smoking!=true && <>
              <Text fontSize='lg'>
                Smoking: Fine with it.
              </Text>
            </>}

            {profile.cookingSkills!=null && <>
              <Text fontSize='lg'>
                Cooking Skills: {profile.cookingSkills}
              </Text>
            </>}

            {profile.nationality!=null && <>
              <Text fontSize='lg'>
                Nationality: {profile.nationality}
              </Text>
            </>}

            {profile.otherInfo!=null && <>
              <Text fontSize='lg'>
                Other Information: {profile.otherInfo}
              </Text>
            </>}
        </Box>
        </center>
            */}
        
        <Flex flexWrap='wrap' w='400px' p='5' paddingTop='10px' justifyContent='flex-start' cursor='pointer' border='2px'>
            <Box w='360px'>
                <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width={200} height={260} style={{width: 30 + '%', borderRadius: 100, marginBottom: '18px', margin:'auto'}}/>
            </Box>
            <Box w='full'>
                {profile.userID!=null && <>
                  <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                      <Flex alignItems='center'>
                          <Text fontWeight='bold' fontSize='lg'>NAME: {profile.userID.firstName} {profile.userID.lastName}</Text>
                      </Flex>
                  </Flex>
                </>}
                <Flex alignItems='center' p='1' w='375px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><ImSpoonKnife/> &nbsp;: {profile.foodPreference?<>{profile.foodPreference}</>:<>N/A</>}</Flex>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400' justifyContent='flex-end'><GiNotebook/> &nbsp;: {profile.studyProgram?<>{profile.studyProgram}</>:<>N/A</>}</Flex>
                </Flex>
                <Flex alignItems='center' p='1' w='375px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><BsFillPersonFill/> &nbsp;: {profile.minAge?<>{profile.minAge} Years - {profile.maxAge} Years</>:<>N/A</>}</Flex>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400' justifyContent='flex-end'><BiDrink/> &nbsp;: {profile.drinking==null?<>N/A</>:<></>}{profile.drinking==true?<>Yes</>:<>No</>}</Flex>
                </Flex>
                <Flex alignItems='center' p='1' w='375px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><FaSmoking/> &nbsp;: {profile.smoking==null?<>N/A</>:<></>}{profile.smoking==true?<>No</>:<>Yes</>}</Flex>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400' justifyContent='flex-end'><GiCookingPot/> &nbsp;: {profile.cookingSkills?<>{profile.cookingSkills}</>:<>N/A</>}</Flex>
                </Flex>
                <Flex alignItems='center' p='1' w='375px' color='blue.400' whiteSpace= 'nowrap'>
                    <Flex alignItems='center' p='1' w='500px' color='blue.400'><GiEarthAmerica/> &nbsp;: {profile.nationality?<>{profile.nationality}</>:<>N/A</>}</Flex>
                </Flex>
                <Text fontSize='lg' fontWeight='bold'>
                    <center>Other Information:&nbsp;{profile.otherInfo?<>{profile.otherInfo}</>:<>N/A</>}</center>
                </Text>
            </Box>
        </Flex>

    </Flex>
    </Link>
    </Paper>
);
  
export default Profile;

// import { Box, Flex, Text } from '@chakra-ui/layout';

// const Profile = ({ profile }) => (
//     <Flex flexWrap='wrap' w='400px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
//         <Box w='full'>
//             <Text fontSize='lg'>
//             {profile._id}
//             </Text>
//         </Box>
//         <Box w='full'>
//         <Text fontSize='lg'>
//           {profile.foodPreference}
//         </Text>
//         <Text fontSize='lg'>
    
//         {profile.drinking===true?"Drinking: Fine with it":"Drinking: Not fine with it"}
        
//         </Text>
//         </Box>

//     </Flex>
// );
  
// export default Profile;
