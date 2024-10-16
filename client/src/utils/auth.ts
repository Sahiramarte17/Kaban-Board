import { JwtPayload, jwtDecode } from 'jwt-decode';


class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken(); // Get the token from localStorage
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode and return the JWT token
    }
    return null;
  }
  

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // !! coerces the token into a boolean
  }

  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decodedToken = jwtDecode<JwtPayload>(token); // Decode the token
      if (decodedToken.exp) {
        // Check if the expiration time has passed
        const currentTime = Date.now() / 1000; // Current time in seconds
        return decodedToken.exp < currentTime;
      }
      return false; // Token doesn't have an exp field, assume it's valid
    } catch (err) {
      return true; // If the token cannot be decoded, consider it expired
    }
  }
  

  getToken(): string {
    // TODO: return the token
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
