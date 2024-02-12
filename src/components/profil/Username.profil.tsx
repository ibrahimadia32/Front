import { 
    Grid, Paper, Typography , Avatar
 } from '@mui/material';

 import StarIcon from '@mui/icons-material/Star';
 import StarHalfIcon from '@mui/icons-material/StarHalf';


interface Element {
    value: any;
    type?: 'avatar' | 'string';
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

interface RowProps {
    firstname?: string;
    lastname?: string;
    jobTitle?: string;
    address?: string;
    avatarUrl?: string;
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

  const Row = ({ firstname, lastname, jobTitle, address, avatarUrl }: RowProps) => {
        
        return (
            <Grid item xs={8} sm={2} md={4} >
            <Paper style={styles.paper}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                <Avatar
                    alt={firstname}
                    src={avatarUrl}
                    style={styles.avatar}
                />
                </Grid>
            
                <Grid item>
                <div style={{
                              display: 'flex',
                              flexDirection: 'row',
                              
                                }}>
                    </div>
                <Typography variant="h2">
                    {firstname} {lastname}
                </Typography>
                <Typography variant="h5">
                    {jobTitle}
                </Typography>
                <Typography variant="h6">
                    {address}
                </Typography>
                </Grid>
            </Grid>

            </Paper>
        </Grid>
        )
    };
    
export default Row;
