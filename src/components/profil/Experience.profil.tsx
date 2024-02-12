import { 
    Grid, Paper, Typography,Box
 } from '@mui/material';
import { Experience } from '../interface/Interface.Profil';



interface Element {
    value: any;
    type?: 'avatar' | 'string';
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}


interface RowProps {
    experiences: Experience[];
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

const Row = ({ experiences }: RowProps) => {

    
    return (
        <Grid item xs={8} sm={2} md={4} >
        <Paper style={styles.paper}>
        <Typography variant="h6">Expérience</Typography>
        {experiences.map((item) => (
            <Box style={styles.section}>
            <Typography variant="h6">{item.company}</Typography>
            <Typography variant="subtitle1">{item.position}</Typography>
            {/* <Typography variant="subtitle2">{
            item.duration.from &&
            item.duration.from.getDate() + '/' +
            item.duration.from.getMonth() + 1+ "/" +
            item.duration.from.getFullYear()}</Typography> */}
            </Box>
        ))}
        </Paper>
    </Grid>
    )
};

export default Row;