import axios from 'axios';

const baseurl = "http://localhost:8081";
export const login = async (request) => {
    const user = await axios.post(`${baseurl}/auth/token`, {
        email: request.email,
        password: request.password
      });
    return user.data;
}