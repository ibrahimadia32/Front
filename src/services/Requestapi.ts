import axios from 'axios';

const url: string = 'http://192.168.1.94:8000';
export default class Requestapi {
    static getallprofil = async () => {
        const response = await axios.get(`${url}/profil`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
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
}
