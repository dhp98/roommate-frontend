import { Flex,
  useColorMode,
  useColorModeValue,
  Stack, 
  Avatar,
  Heading,
  Box 
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function FormOverlay({ submitAction, children }) {
  const { colorMode } = useColorMode();
  
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
      encType="multipart/form-data"
      onSubmit={submitAction}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        w={['full', 'full', '60%']}
        border={colorMode === 'light' ? '1px solid white' : '1px solid black'}
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
        {children}
        </Box>
        
      </Stack>
    </Flex>
  );
}

FormOverlay.propTypes = {
  submitAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormOverlay;
