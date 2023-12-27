import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Grid} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


  const SingleCard = () => (
    <Card variant="outlined" sx={{ width: 300, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, mb: 2 }} color="text.secondary" gutterBottom>
          Mot du jour
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontSize: 24, mb: 1 }}>
          Developpeur
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjectif
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 14, mb: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum voluptatem dolorum eaque tempore neque aperiam consequatur sint inventore voluptatibus culpa 
          <br />
          {'"un sourire bienveillant"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
        <AddIcon/>
      </CardActions>
    </Card>
  );

  export default function CenteredCards() {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Grid container spacing={2} justifyContent="center">
          {/* Render multiple cards / */}
          <Grid item>
            <SingleCard />
          </Grid>
          <Grid item>
            <SingleCard />
          </Grid>
          {/* / Add more Grid items for additional cards */}
        </Grid>
      </Box>
    );
  }
