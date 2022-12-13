import { Box, Flex, Text } from '@chakra-ui/layout';
import Link from 'next/link';

const Profile = ({ profile}) => (

  <Link href={`/profile/${profile._id}`} passHref>
    <Flex flexWrap='wrap' w='400px' p='5' paddingTop='10px' justifyContent='flex-start' cursor='pointer' >
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

    </Flex>
    </Link>
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
