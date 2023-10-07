type User = {
    id: string;
    username: string;
    password: string;
  };
  
  let currentUser: User | null = null;
  
  const login = (username: string, password: string): boolean => {
    // Check if the provided credentials are valid (mocked for simplicity)
    if (username === 'testuser' && password === 'password') {
      currentUser = {
        id: '1',
        username,
        password,
      };
      return true;
    }
    return false;
  };
  