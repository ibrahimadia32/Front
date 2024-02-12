
import { CardActionArea, Card, CardContent,
  CardMedia,
  Typography } from '@mui/material';
import { Person } from '../interface/Interface.Profil';

interface Props {
    person : Person;

}

export default function ActionAreaCard({person}: Props) {

  return (
    <Card sx={{ 
      width: 250,
      minHeight: 300,
      
    }}>
      <CardActionArea
        component={"a"}
        href={`/profil/${person._id}`}
      >
        <CardMedia
          component="img"
          height="140"
          image={person.avatarUrl}
          alt="green iguana"
        />
        <CardContent
        
        >
          <Typography gutterBottom variant="h5" component="div">
            {person.firstname} {person.lastname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.domaines.map((domaine, index) => (
                <li key={index}>
                  {domaine.name}
                </li>
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}