import {
    Grid,Paper,Typography,Box
} from '@mui/material';
import { Person } from '../interface/Interface.Profil';

interface Element {
    value: any;
    type?: 'avatar' | 'string';
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

interface RowProps {
    telephone: string;
    email: string;
    address: string;
}

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

const Row = ({ telephone,email,address }: RowProps) => {
    return (
        <Grid item xs={8} sm={2} md={4} >
        <Paper style={styles.paper}>
        <Typography variant="h6">Contact</Typography>
        <Typography variant="body1">
            Téléphone : {telephone}
        </Typography>
        <Typography variant="body1">
            Email : {email}
        </Typography>
        <Typography variant="body1">
            Adresse : {address}
        </Typography>
        </Paper>
    </Grid>
    )
};

export default Row;