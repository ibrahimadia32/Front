
import { 
    Grid, Paper, Typography
 } from '@mui/material';



interface Element {
    value: any;
    type?: 'avatar' | 'string';
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

interface RowProps {
    bio?: string;
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

const Row = ({ bio }: RowProps) => {

    
    return (
        <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Typography variant="h6">Bio</Typography>
            <Typography variant="body1">{bio}</Typography>
            </Paper>
        </Grid>
    )
};



export default Row;
