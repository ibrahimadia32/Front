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
    handleFormations: (formations: Formation[]) => void;
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

const AddFormation = ({ defaultFormations = [], handleFormations }: Props) => {
    const [open, setOpen] = useState(false);
    const [formations, setFormations] = useState<Formation[]>(defaultFormations);
    const [formationEdit, setFormationEdit] = useState<Formation>({
        degree: '',
        school: '',
        duration: {
            from: new Date(),
            to: new Date(),
        },
    });
    const tableHeads = ['degrée', 'Organisme', 'Date de début', 'Date de fin', ' '];
    const formationInputs: FormationInput[] = [
        {
            name: 'degree',
            key: 'degree',
            value: formationEdit.degree,
            type: 'text',
            changeValue: (value) => {
                setFormationEdit({ ...formationEdit, degree: value });
            },
        },
        {
            name: 'school',
            key: 'school',
            value: formationEdit.school,
            type: 'text',
            changeValue: (value) => {
                setFormationEdit({ ...formationEdit, school: value });
            },
        },
        {
            name: 'start',
            key: 'start',
            value: formationEdit.duration?.from?.toISOString().split('T')[0],
            type: 'date',
            changeValue: (value) => {
                const { duration } = formationEdit;
                duration.from = new Date(value);
                setFormationEdit({ ...formationEdit, duration });
            },
        },
        {
            name: 'end',
            key: 'end',
            value: formationEdit.duration?.to?.toISOString().split('T')[0],
            type: 'date',
            changeValue: (value) => {
                const { duration } = formationEdit;
                duration.to = new Date(value);
                setFormationEdit({ ...formationEdit, duration });
            },
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
                    {formations.map((form, index) => (
                        <TableRow key={index}>
                            <TableCell>{form.degree}</TableCell>
                            <TableCell>{form.school}</TableCell>
                            <TableCell>{''}</TableCell>
                            <TableCell>{''}</TableCell>
                            <TableCell>
                                <IconButton
                                    onClick={() => {
                                        const newFormations = [...formations];
                                        newFormations.splice(index, 1);
                                        setFormations(newFormations);
                                    }}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog maxWidth="xl" fullWidth open={open} onClose={() => setOpen(false)}>
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
                            setFormations([...formations, formationEdit]);
                            setFormationEdit({
                                degree: '',
                                school: '',
                                duration: {
                                    from: new Date(),
                                    to: new Date(),
                                },
                            });

                            handleFormations(formations);
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
