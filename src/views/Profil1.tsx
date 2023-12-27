import React from "react";
import { Typography, Paper, Avatar, Grid, Divider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Box, FormControl, OutlinedInput, FormHelperText, Button, TextField } from '@mui/material';

const styles = {
  paper: {
    padding: 20,
    margin: 20,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  section: {
    marginTop: 20,
    
  },
};

const ProfilePage = () => {
    const developerInfo = {
        name: "John Doe",
        jobTitle: "Développeur Full Stack",
        location: "Ville fictive",
        bio: "Passionné par le développement web et les nouvelles technologies.",
        avatarUrl: "lien-vers-une-image.jpg",
        phone: "06 12 34 56 78",
        email: "email@gmail.com",
        address: "1 rue de la Paix, 75000 Paris",
        address1: "Lyon",
        birthday: "01/01/2000",
        github:"www.github.com",
        linkedin:"www.linkedin.com",

        experience: [
        {
            company: "ABC Inc.",
            position: "Développeur Web",
            duration: "Janvier 2020 - Présent",
        },
        {
            company: "XYZ Corp.",
            position: "Stagiaire en Développement",
            duration: "Juin 2019 - Décembre 2019",
        },
    ],
        formation: [
            {
                school: "Ecole 1",
                degree: "Diplôme 1",
                duration: "2018 - 2020",
            },
            {
                school: "Ecole 2",
                degree: "Diplôme 2",
                duration: "2016 - 2018",
            },
        
        ],
    };
    
    return (
        <Grid
        container
        style={{ width: "100%", height: "100vh", justifyContent: "center", alignItems: "center" }}
        >
        <Grid item xs={6} sm={4} md={3}>
            <Paper style={styles.paper} elevation={3}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                <Avatar
                    alt={developerInfo.name}
                    src={developerInfo.avatarUrl}
                    style={styles.avatar}
                />
                </Grid>
                <Grid item>
                <Typography variant="h2">{developerInfo.name}</Typography>
                <Typography variant="h5">
                    {developerInfo.jobTitle}
                </Typography>
                <Typography variant="h6">
                    {developerInfo.location}
                </Typography>
                </Grid>
            </Grid>

            </Paper>
        </Grid>

        {/* ////////////////////////////////// */}
        
                <Grid item>
                <Typography variant="h5"> {developerInfo.address1}</Typography>
                <Typography variant="h5"> {developerInfo.jobTitle}</Typography>
                <Typography variant="h6"> Note : </Typography>
                    
                    <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                        <div><StarIcon /></div>
                        <div><StarIcon /></div>
                        <div><StarIcon /></div>
                        <div><StarIcon /></div>
                        <div><StarHalfIcon /></div>
                    </div>
                
                <div style={
                    {
                        
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }
                }>
                    <div>
                        <Typography>Adresse: {developerInfo.address}</Typography>
                        <Typography>Téléphone: {developerInfo.phone}</Typography> 
                        <Typography>Email: {developerInfo.email}</Typography>
                        <Typography>GitHub: {developerInfo.github}</Typography>       
                        
                    </div>
                    
                    <div>
                       <Typography>Date d'anniversaires: {developerInfo.birthday}</Typography>
                          <Typography>LinkedIn: {developerInfo.linkedin}</Typography>
                    </div>
                </div>
        </Grid>
          {/* ///////////////////////////////////// */}
        </Grid>
    );
}

export default  ProfilePage;


