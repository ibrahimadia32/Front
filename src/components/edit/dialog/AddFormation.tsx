import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TextField,
    Typography,
    TableCell,
} from '@mui/material';
import { Formation } from '../../interface/Interface.Profil';
import { useState } from 'react';
import Add from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';

interface Props {
    defaultFormations?: Formation[];
    returnFormations: (formations: Formation[]) => void;
}

interface FormationInput {
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

const AddFormation = ({ defaultFormations = [] }: Props) => {
    const [open, setOpen] = useState(false);
    const [startInput, setStartInput] = useState('');
    const [endInput, setEndInput] = useState('');

    const [formations, setFormations] = useState<Formation[]>(defaultFormations);

    const tableHeads = ['degrée', 'Organisme', 'Date de début', 'Date de fin', ' '];
    const formationInputs: FormationInput[] = [
        {
            name: 'degree',
            key: 'degree',
            value: '',
            type: 'text',
            changeValue: (value) => {
                setFormations((formations) => {
                    const newFormations = [...formations];
                    newFormations[formations.length - 1].degree = value;
                    return newFormations;
                });
            },
        },
        {
            name: 'school',
            key: 'school',
            value: '',
            type: 'text',
            changeValue: (value) => {
                setFormations((formations) => {
                    const newFormations = [...formations];
                    newFormations[formations.length - 1].school = value;
                    return newFormations;
                });
            },
        },
        {
            name: 'start',
            key: 'start',
            value: startInput,
            type: 'date',
            changeValue: setStartInput,
        },
        {
            name: 'end',
            key: 'end',
            value: endInput,
            type: 'date',
            changeValue: setEndInput,
        },
    ];
    return (
        <>
            <Typography variant="h6">
                {'Formations :'}
                <IconButton
                    onClick={() => {
                        setOpen(true);
                    }}>
                    <Add />
                </IconButton>
            </Typography>
            <Table sx={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {tableHeads.map((head, index) => (
                            <TableCell key={index}>{head}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formations.map((formation, index) => (
                        <TableRow key={index}>
                            <TableCell>{formation.degree}</TableCell>
                            <TableCell>{formation.school}</TableCell>
                            <TableCell>{formation.duration && formation.duration.from?.getFullYear()}</TableCell>
                            <TableCell>{formation.duration && formation.duration.to?.getFullYear()}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{'Ajouter une formation'}</DialogTitle>
                <DialogContent>
                    <List>
                        {formationInputs.map((input, index) => (
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
                    </List>
                </DialogContent>
                <DialogActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-center',
                    }}>
                    <Button
                        onClick={() => {
                            setOpen(false);
                            setFormations(formations);
                        }}>
                        Ajouter
                    </Button>
                    <Button onClick={() => setOpen(false)}>Annuler</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddFormation;
