import axios from 'axios';
import { UserLogin } from "../interfaces/UserLogin";

const API_URL = 'http://localhost:3001'; // Replace with your actual backend URL

const login = async (userInfo: UserLogin) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userInfo);
    return response.data; // Assuming the token is returned in response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export { login };









  // TODO: make a POST request to the login route