import {
    Dialog,
    DialogActions,
    DialogContent,
    List,
    ListItem,
    TextField,
    Button,
    DialogTitle,
    Typography,
    Chip,
    Select,
    Box,
    SelectChangeEvent,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Domaine, Experience, Formation, Person } from '../interface/Interface.Profil';
import Requestapi from '../../services/Requestapi';
import { Domain } from '@mui/icons-material';
import AddFormations from './dialog/AddFormations';
import AddExperiences from './dialog/AddExperiences';
import AddSkills from './dialog/AddSkills';

interface Props {
    open: boolean;
    handleClose: () => void;
    person: Person;
}

interface PersonInput {
    name: string;
    key: string;
    value: any;
    type:
        | 'text'
        | 'number'
        | 'date'
        | 'email'
        | 'password'
        | 'tel'
        | 'url'
        | 'search'
        | 'time'
        | 'color'
        | 'file'
        | 'month'
        | 'week'
        | 'datetime-local'
        | 'radio'
        | 'checkbox'
        | 'range'
        | 'hidden'
        | 'button'
        | 'submit'
        | 'reset'
        | 'image'
        | 'select'
        | 'textarea'
        | 'autocomplete';
    changeValue: (value: any) => void;
}

const EditDailog = ({ open, handleClose, person }: Props) => {
    const [personState, setPersonState] = useState<Person>(person);

    const handleSkills = (skills: Domaine[]) => {
        setPersonState({ ...person, domaines: skills });
    };

    const handleExperiences = (experiences: Experience[]) => {
        setPersonState({ ...person, experiences: experiences });
    };

    const handleFormations = (formations: Formation[]) => {
        setPersonState({ ...person, formations: formations });
    };

    const personInput: PersonInput[] = [
        {
            name: 'lastname',
            key: 'lastname',
            value: personState.lastname,
            type: 'text',
            changeValue: (value: any) => setPersonState({ ...person, lastname: value }),
        },
        {
            name: 'firstname',
            key: 'firstname',
            value: personState.firstname,
            type: 'text',
            changeValue: (value: any) => setPersonState({ ...person, firstname: value }),
        },
        {
            name: 'email',
            key: 'email',
            value: personState.email,
            type: 'email',
            changeValue: (value: any) => setPersonState({ ...person, email: value }),
        },
        {
            name: 'phone',
            key: 'phone',
            value: personState.phone,
            type: 'tel',
            changeValue: (value: any) => setPersonState({ ...person, phone: value }),
        },
        {
            name: 'jobtitle',
            key: 'jobtitle',
            value: personState.jobtitle,
            type: 'text',
            changeValue: (value: any) => setPersonState({ ...person, jobtitle: value }),
        },
    ];

    return (
        <Dialog open={open} sx={{ '& .MuiDialog-paper': { width: '80%' } }} onClose={handleClose}>
            <DialogTitle>{'Edition :'}</DialogTitle>
            <DialogContent>
                <List>
                    {personInput.map((input, index) => (
                        <ListItem key={index}>
                            <TextField
                                fullWidth
                                label={input.name}
                                name={input.name}
                                type={input.type}
                                value={input.value}
                                onChange={(event) => input.changeValue(event.target.value)}
                            />
                        </ListItem>
                    ))}
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <AddSkills defaultSkills={personState.domaines} handleSkills={handleSkills} />
                    </ListItem>

                    <ListItem>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <AddFormations
                                defaultFormations={personState.formations}
                                handleFormations={handleFormations}
                            />
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <AddExperiences
                                defaultExperiences={personState.experiences}
                                handleExperiences={handleExperiences}
                            />
                        </Box>
                    </ListItem>
                    <ListItem></ListItem>
                </List>
            </DialogContent>
            <DialogActions
                sx={{
                    display: 'flex',
                    justifyContent: 'space-center',
                }}>
                <Button onClick={handleClose}>Annuler</Button>
                <Button
                    onClick={() => {
                        handleClose();
                    }}>
                    Enregistrer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditDailog;
