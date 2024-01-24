import { ListItem, Typography } from '@mui/material';
import { Formation } from '../../interface/Interface.Profil';

interface Props {
    // open: boolean;
    // handleClose: () => void;
    formation: Formation;
}

const FormationItem = ({ formation }: Props) => {
    return (
        <ListItem>
            <Typography variant="subtitle1">{formation.school + ' : '}</Typography>
            <Typography variant="body1">{formation.degree}</Typography>
        </ListItem>
    );
};

export default FormationItem;
