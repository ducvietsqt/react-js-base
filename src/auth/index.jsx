const isLogin = () => {
  const isAuthenticate = localStorage.getItem('remember_token', false);
  if (isAuthenticate)
  {
    return true;
  }
  return false;
}

export {isLogin}