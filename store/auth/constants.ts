export const mockAuthData = {
  email: 'admin@example.com',
  password: 'Qwerty12345'
};

export const checkAuthData = (_email: string, _password: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { email, password } = mockAuthData;
  
      resolve(email === _email && password === _password);
    }, 1000);
  });
};

export const getStorageAuth = () => {
  const isAuth = localStorage.getItem('isAuth');
  return isAuth ? isAuth === '1' : null;
};