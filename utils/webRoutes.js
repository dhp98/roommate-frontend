// Entities should be an enum of: 'employees', 'floors', or 'rooms'.
export default {
    homepage: '/',
    profile: '/profile',
    roomDetail: (roomSlug) => `/rooms/${roomSlug}`,
    signIn: '/sign-in',
    signUp: '/sign-up',
    unauthorized: '/unauthorized',
  };