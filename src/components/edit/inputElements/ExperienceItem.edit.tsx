import { ListItem, Typography } from '@mui/material';
import { Experience } from '../../interface/Interface.Profil';

interface Props {
    // open: boolean;
    // handleClose: () => void;
    experience: Experience;
}

const ExperienceItem = ({ experience }: Props) => {
    return (
        <ListItem>
            <Typography variant="subtitle1">{experience.company}</Typography>
            <Typography variant="subtitle2">{experience.position}</Typography>
        </ListItem>
    );
};

export default ExperienceItem;
