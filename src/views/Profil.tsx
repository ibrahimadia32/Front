import React from 'react';
import { Typography, Paper, Avatar, Grid, Divider } from '@mui/material';

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
    name: 'John Doe',
    jobTitle: 'Développeur Full Stack',
    location: 'Ville fictive',
    bio: 'Passionné par le développement web et les nouvelles technologies.',
    avatarUrl: 'lien-vers-une-image.jpg',
    experience: [
      {
        company: 'ABC Inc.',
        position: 'Développeur Web',
        duration: 'Janvier 2020 - Présent',
      },
      {
        company: 'XYZ Corp.',
        position: 'Stagiaire en Développement',
        duration: 'Juin 2019 - Décembre 2019',
      },
    ],
  };

  return (
    <Grid container justifyContent="center" style={{ height: '100vh', alignItems: 'center' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper style={styles.paper} elevation={3}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Avatar alt={developerInfo.name} src={developerInfo.avatarUrl} style={styles.avatar} />
            </Grid>
            <Grid item>
              <Typography variant="h4">{developerInfo.name}</Typography>
              <Typography variant="subtitle1">{developerInfo.jobTitle}</Typography>
              <Typography variant="subtitle1">{developerInfo.location}</Typography>
            </Grid>
          </Grid>

          <Divider style={styles.section} />

          <Typography variant="body1" style={styles.section}>
            {developerInfo.bio}
          </Typography>

          <Divider style={styles.section} />

          <Typography variant="h5" style={styles.section}>
            Expérience Professionnelle
          </Typography>

          {developerInfo.experience.map((exp, index) => (
            <div key={index}>
              <Typography variant="subtitle1">{exp.position}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {exp.company} | {exp.duration}
              </Typography>
              {index < developerInfo.experience.length - 1 && <Divider style={styles.section} />}
            </div>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
