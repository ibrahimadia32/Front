import { Close } from '@mui/icons-material';
import {
    AppBar,
    Dialog,
    DialogContent,
    Button,
    IconButton,
    Toolbar,
    Typography,
    TextField,
    List,
    ListItem,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { Person } from '../interface/Interface.Profil';
import Requestapi from '../../services/Requestapi';

import { useState, useEffect } from 'react';

interface AddEditProps {
    open: boolean;
    handleClose: () => void;
}

interface DialogInput {
    label: string;
    type: string;
    value: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddEdit = ({ open, handleClose }: AddEditProps) => {
    const [profil, setProfil] = useState<Person>({
        _id: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        experiences: [],
        formations: [],
        jobtitle: '',
        domaines: [],
    });

    const dialogInput: DialogInput[] = [
        {
            label: 'firstname',
            type: 'text',
            required: true,
            value: profil.firstname,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, firstname: e.target.value });
            },
        },
        {
            label: 'lastname',
            type: 'text',
            value: profil.lastname,
            required: true,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, lastname: e.target.value });
            },
        },
        {
            label: 'email',
            type: 'email',
            required: true,
            value: profil.email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, email: e.target.value });
            },
        },
        {
            label: 'phone',
            type: 'tel',
            value: profil.phone,
            required: true,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, phone: e.target.value });
            },
        },
        {
            label: 'jobtitle',
            type: 'text',
            required: true,
            value: profil.jobtitle,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, jobtitle: e.target.value });
            },
        },
        {
            label: 'address',
            type: 'text',
            value: profil.address ? profil.address : '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, address: e.target.value });
            },
        },
        {
            label: 'github',
            type: 'text',
            value: profil.github ? profil.github : '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, github: e.target.value });
            },
        },
        {
            label: 'linkedin',
            type: 'text',
            value: profil.linkedin ? profil.linkedin : '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setProfil({ ...profil, linkedin: e.target.value });
            },
        },
    ];
    return (
        <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <AppBar
                sx={{
                    backgroundColor: blueGrey[900],
                }}
                position="static"
            >
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <Close />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Add Profil
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>

            <DialogContent>
                <Typography variant="h6" component="div">
                    Présentation :
                </Typography>
                {dialogInput.map((item, key) => (
                    <TextField
                        key={key}
                        autoFocus
                        margin="dense"
                        id={item.label}
                        label={item.label}
                        type={item.type}
                        value={item.value}
                        onChange={item.onChange}
                        fullWidth
                    />
                ))}

                <Typography variant="h6" component="div">
                    Formation :
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default AddEdit;
