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
import { Experience } from '../../interface/Interface.Profil';
import { useState } from 'react';
import Add from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';

interface Props {
    defaultExperiences?: Experience[];
    handleExperiences: (experiences: Experience[]) => void;
}

interface formationsInput {
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

const AddExperiences = ({ defaultExperiences = [], handleExperiences }: Props) => {
    const [open, setOpen] = useState(false);
    const [experiences, setExperiencesEdit] = useState<Experience[]>(defaultExperiences);
    const [experienceEdit, setExperienceEdit] = useState<Experience>({
        position: '',
        company: '',
        duration: {
            from: new Date(),
            to: new Date(),
        },
    });

    const tableHeads = ['degrée', 'Organisme', 'Date de début', 'Date de fin', ' '];
    const formationsInputs: formationsInput[] = [
        {
            name: 'compagny',
            key: 'compagny',
            value: experienceEdit.company,
            type: 'text',
            changeValue: (value) => {
                experienceEdit && setExperienceEdit({ ...experienceEdit, company: value });
            },
        },
        {
            name: 'position',
            key: 'position',
            value: experienceEdit.position,
            type: 'text',
            changeValue: (value) => {
                experienceEdit && setExperienceEdit({ ...experienceEdit, position: value });
            },
        },
        {
            name: 'start',
            key: 'start',
            value: experienceEdit.duration.from?.toISOString().split('T')[0],
            type: 'date',
            changeValue: (value) => {
                const { duration } = experienceEdit;
                duration.from = new Date(value);
                setExperienceEdit({ ...experienceEdit, duration });
            },
        },
        {
            name: 'end',
            key: 'end',
            value: experienceEdit.duration.to?.toISOString().split('T')[0],
            type: 'date',
            changeValue: (value) => {
                const { duration } = experienceEdit;
                duration.to = new Date(value);
                setExperienceEdit({ ...experienceEdit, duration });
            },
        },
    ];
    return (
        <>
            <Typography variant="h6">
                {'Experiences :'}
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
                    {experiences.map((experience, index) => (
                        <TableRow key={index}>
                            <TableCell>{experience.position}</TableCell>
                            <TableCell>{experience.company}</TableCell>
                            <TableCell>{''}</TableCell>
                            <TableCell>{''}</TableCell>
                            <TableCell>
                                <IconButton
                                    onClick={() => {
                                        const newformationss = [...experiences];
                                        newformationss.splice(index, 1);
                                        setExperiencesEdit(newformationss);
                                    }}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog maxWidth="xl" fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{'Ajouter une formations'}</DialogTitle>
                <DialogContent>
                    <List>
                        {formationsInputs.map((input, index) => (
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
                            setExperiencesEdit([...experiences, experienceEdit]);
                            setExperienceEdit({
                                position: '',
                                company: '',
                                duration: {
                                    from: new Date(),
                                    to: new Date(),
                                },
                            });

                            handleExperiences(experiences);
                        }}>
                        Ajouter
                    </Button>
                    <Button onClick={() => setOpen(false)}>Annuler</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddExperiences;
