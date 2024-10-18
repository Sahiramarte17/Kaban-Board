import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decodes the token and returns the payload
    }
    return null;
    
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
      if (decoded && decoded.exp) {
        const currentTime = Date.now() / 1000; // Get the current time in seconds
        return decoded.exp < currentTime; // Check if the token has expired
      }
      return false; // If no expiration time is provided, assume the token is valid
    } catch (err) {
      return true; // If there's an error decoding, assume the token is invalid/expired
    }
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('id_token') || ''; // Retrieves the token from localStorage
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // TODO: redirect to the home page
    window.location.assign('/'); 
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();
