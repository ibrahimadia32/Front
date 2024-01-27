import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const cardsData = [
  {
    title: 'Lizard',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging',
    imageUrl: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Ibou',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging',
    imageUrl: '/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title:'Thierno',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging',
    imageUrl: '/static/images/cards/contemplative-reptile.jpg',
    
  },

];

export default function ImgMediaCard() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'lightgray',
      }}
    >
      {cardsData.map((card, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={card.title} height="140" image={card.imageUrl} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Voir</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
