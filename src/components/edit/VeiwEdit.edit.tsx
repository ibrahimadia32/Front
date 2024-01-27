import {
    Dialog,
    DialogActions,
    DialogContent,
    List,
    ListItem,
    TextField,
    Button,
    DialogTitle,
    MenuItem,
    Select,
    Chip,
    Box,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { Person } from '../interface/Interface.Profil';
import FormationItem from './inputElements/FormationItem.edit';
import ExperienceItem from './inputElements/ExperienceItem.edit';

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
}

const VeiwEdit = ({ open, handleClose, person }: Props) => {
    const personInput: PersonInput[] = [
        {
            name: 'lastname',
            key: 'lastname',
            value: person.lastname,
            type: 'text',
        },
        {
            name: 'firstname',
            key: 'firstname',
            value: person.firstname,
            type: 'text',
        },
        {
            name: 'email',
            key: 'email',
            value: person.email,
            type: 'email',
        },
        {
            name: 'phone',
            key: 'phone',
            value: person.phone,
            type: 'tel',
        },
        {
            name: 'jobtitle',
            key: 'jobtitle',
            value: person.jobtitle,
            type: 'text',
        },
        {
            name: 'address',
            key: 'address',
            value: person.address,
            type: 'text',
        },
    ];

    return (
        <Dialog sx={{ '& .MuiDialog-paper': { width: '80%' } }} open={open} onClose={handleClose}>
            <DialogTitle>{'Visualisation :'}</DialogTitle>
            <DialogContent>
                <List>
                    {personInput.map(
                        (input, index) =>
                            input.value !== '' &&
                            input.value !== undefined &&
                            input.value !== null && (
                                <ListItem key={index}>
                                    <TextField
                                        fullWidth
                                        sx={{ width: '100%' }}
                                        variant="filled"
                                        label={input.name}
                                        name={input.name}
                                        type={input.type}
                                        value={input.value}
                                    />
                                </ListItem>
                            )
                    )}
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h6">Skills :</Typography>
                        <List>
                            {person.domaines.map((skill, index) => (
                                <ListItem key={index}>
                                    <Chip label={skill.name} />
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h6">Formations :</Typography>
                        <List>
                            {person.formations.map((formation, index) => (
                                <ListItem key={index}>
                                    <FormationItem formation={formation} />
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h6">Experiences :</Typography>
                        <List>
                            {person.experiences.map((experience, index) => (
                                <ListItem key={index}>
                                    <ExperienceItem experience={experience} />
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
    );
};

export default VeiwEdit;
