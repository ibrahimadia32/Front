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
        <div
        style={{ width: "100%", height: "50vh", justifyContent: "left", alignItems: "center" , backgroundColor: "#F5F5F5"}}
        >
        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                <Avatar
                    alt={developerInfo.name}
                    src={developerInfo.avatarUrl}
                    style={styles.avatar}
                />
                </Grid>
            
                <Grid item>
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
        
        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Bio</Typography>
            <Typography variant="body1">{developerInfo.bio}</Typography>
            </Paper>
        </Grid>

        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Expérience</Typography>
            {developerInfo.experience.map((item) => (
                <Box style={styles.section}>
                <Typography variant="h6">{item.company}</Typography>
                <Typography variant="subtitle1">{item.position}</Typography>
                <Typography variant="subtitle2">{item.duration}</Typography>
                </Box>
            ))}
            </Paper>
        </Grid>

        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Formation</Typography>
            {developerInfo.formation.map((item) => (
                <Box style={styles.section}>
                <Typography variant="h6">{item.school}</Typography>
                <Typography variant="subtitle1">{item.degree}</Typography>
                <Typography variant="subtitle2">{item.duration}</Typography>
                </Box>
            ))}
            </Paper>
        </Grid>

        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Compétences</Typography>
            <Typography variant="body1">Compétence 1</Typography>
            <Typography variant="body1">Compétence 2</Typography>
            <Typography variant="body1">Compétence 3</Typography>
            <Typography variant="body1">Compétence 4</Typography>
            </Paper>
        </Grid>

        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Langues</Typography>
            <Typography variant="body1">Langue 1</Typography>
            <Typography variant="body1">Langue 2</Typography>
            <Typography variant="body1">Langue 3</Typography>
            </Paper>
        </Grid>

        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Centres d'intérêt</Typography>
            <Typography variant="body1">Centres d'intérêt 1</Typography>
            <Typography variant="body1">Centres d'intérêt 2</Typography>
            <Typography variant="body1">Centres d'intérêt 3</Typography>
            </Paper>
        </Grid>
        
        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body1">Téléphone : {developerInfo.phone}</Typography>
            <Typography variant="body1">Email : {developerInfo.email}</Typography>
            <Typography variant="body1">Adresse : {developerInfo.address}</Typography>
            </Paper>
        </Grid>
        </div>
    );
}

export default  ProfilePage;


