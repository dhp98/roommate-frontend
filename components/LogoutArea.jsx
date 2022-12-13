import { Button, Heading, useToast, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { post } from '../utils/apiHelper';
import UserContext from '../utils/userContext';
import { FailedOperationToast, SuccessfulOperationToast } from './Toasts';

function LogoutArea() {
  const { dispatch } = useContext(UserContext);
  const toast = useToast();
  const router = useRouter();

  const handleLogout = async () => {
    // Has to be done like this so Vercel removes the cookie perfectly.
    post({ isLoggedOut: true }, '/api/logout')
      .then((response) => {
        if (response.status === 'success') {
          SuccessfulOperationToast(toast, 'You will be redirected shortly.');
          dispatch({ type: 'logout' });

          return setTimeout(() => router.push('/'), 2000);
        }

        return null;
      })
      .catch(() => FailedOperationToast(toast, 'Failed to log out! Please try again later!'));
  };

  return (
      <Button onClick={handleLogout}>
        Logout
      </Button>
  );
}

export default LogoutArea;