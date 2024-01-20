import axios from 'axios';

const url : string = 'http://localhost:8000/';
export default class Requestapi {
    static getallprofil = async () => {
        const response = await axios.get(`${url}profil`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        
        }
        );
        return response;
    };

}