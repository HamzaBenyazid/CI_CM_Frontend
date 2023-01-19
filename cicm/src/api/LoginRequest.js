import axios from 'axios';

const LoginRequest = async (credentials, setToken) => {


    const instance = axios.create({
        baseURL: "http://localhost:8765",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json',
          withCredentials: false
        }
    });

    await instance.post('/api/auth/login', credentials)
        .then(result => {
            console.log(result.data);
            setToken("token", result.data.access_token, {
                path: "/", 
                maxAge: 1000000,
                sameSite: true
            })
        })
        .catch((res ) => {
            console.log(credentials.remember);
            console.log(res)
        });
}

export default LoginRequest;