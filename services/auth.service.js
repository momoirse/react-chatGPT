import jwtDecode from 'jwt-decode';

const ACCESS_TOKEN_KEY = 'access_token';

export function setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function isLoggedIn() {
  const token = getAccessToken();
  if (!token) {
    return false;
  }

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now().valueOf() / 1000;
  return decodedToken.exp > currentTime;
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.location.reload();
}
