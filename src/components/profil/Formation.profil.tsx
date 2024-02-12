import { 
    Grid, Paper, Typography,Box
 } from '@mui/material';
import { Formation } from '../interface/Interface.Profil';



interface Element {
    value: any;
    type?: 'avatar' | 'string';
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}


interface RowProps {
    experiences: Formation[];
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
