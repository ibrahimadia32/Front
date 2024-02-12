import { useEffect, useState } from 'react';
import Requestapi from '../services/Requestapi';
import { Person } from '../components/interface/Interface.Profil';
import CardHome from '../components/home/Card.home';
import { Grid, Paper } from '@mui/material';

const Home = () => {

    const [persons, setPersons] = useState<Person[]>([]);

    useEffect(() => {
        Requestapi.getallprofil().then((response: any) => {
            setPersons(response.data);

        });
        console.log(persons);
    },[]);
    return (
        <Paper
            sx={{
                p: 2,
                flexDirection:'row',
                minHeight: "100vh", 
                width: "100%",       
            }}
        >
           <Grid 
           container
           columns={{lg: 12}}
           spacing={2}
           sx={{
                width: "100%",
           }}
           >
           {persons.map((person, index) => (
                <Grid item key={index}>
                    <CardHome person={person} />
                </Grid>
            ))
            }
           </Grid>
        </Paper>
    );
};

export default Home;