import axios from 'axios';

const url: string = 'http://localhost:8000';
export default class Requestapi {
    static getallprofil = async () => {
        const response = await axios.get(`${url}/profil`, {
            headers: {
                'Content-Type': 'application/json',
                "authorization" : `Bearer ${localStorage.getItem('token')}`
            },
        });
        return response;
    };

    static login = async (login: string, password: string) => {
        const response = await axios.post(
            `${url}/user/login`,
            {
                login,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },

            }
        );
        return response;
    };
    static signup = async (
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        phone: string,
        entreprise: string
    ) => {
        const response = await axios.post(
            `${url}/user/register`,
            {
                firstname,
                lastname,
                email,
                password,
                phone,
                entreprise,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    };

        static getalldomaine = async () => {
            const response = await axios.get(`${url}/domaine`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        };

        static getprofil = async (id: string) => {
            const response = await axios.get(`${url}/profil/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response;
        };

        
    }
    




