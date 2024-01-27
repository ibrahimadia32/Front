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
import { Domaine, Person } from '../interface/Interface.Profil';
import Requestapi from '../../services/Requestapi';
import { Domain } from '@mui/icons-material';

interface Props {
    open: boolean;
    handleClose: () => void;
}

interface PersonInput {
    name : string;
    key : string;
    value : any;
    type :
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
    changeValue : (value : any) => void;
}

const AddProfil = ({ open, handleClose }: Props) => {
    const [personState, setPersonState] = useState<Person>({
        lastname: '',
        firstname: '',
        jobtitle: '',
        bio: '',
        avatarUrl: '',
        phone: '',
        email: '',
        address: '',
        github:'',
        linkedin:'',
        experiences:[],
        _id: '',
        domaines: [],
        formations: [],
    });
    const [domaines, setDomaines] = useState<Domaine[]>([]);
    useEffect(() => {
        Requestapi.getalldomaine().then((res) => {
            setDomaines(res.data);
        });

    }, []);

    const personInput: PersonInput[] = [
        {
            name: 'lastname',
            key: 'lastname',
            value: personState.lastname,
            type: 'text',
            changeValue: (value: any) =>
                setPersonState({ ...personState, lastname: value }),
        },
        {
            name: 'firstname',
            key: 'firstname',
            value: personState.firstname,
            type: 'text',
            changeValue: (value: any) =>
                setPersonState({ ...personState, firstname: value }),
        },
        {
            name: 'jobtitle',
            key: 'jobtitle',
            value: personState.jobtitle,
            type: 'text',
            changeValue: (value: any) =>
                setPersonState({ ...personState, jobtitle: value }),
        },
        {
            name: 'bio',
            key: 'bio',
            value: personState.bio,
            type: 'textarea',
            changeValue: (value: any) =>
                setPersonState({ ...personState, bio: value }),

        },
        {
            name: 'avatarUrl',
            key: 'avatarUrl',
            value: personState.avatarUrl,
            type: 'text',
            changeValue: (value: any) =>
                setPersonState({ ...personState, avatarUrl: value }),
        },
        {
            name: 'phone',
            key: 'phone',
            value: personState.phone,
            type: 'tel',
            changeValue: (value: any) =>
                setPersonState({ ...personState, phone: value }),
        },
        {
            name: 'email',
            key: 'email',
            value: personState.email,
            type: 'email',
            changeValue: (value: any) =>
                setPersonState({ ...personState, email: value }),
        },
        {
            name: 'address',
            key: 'address',
            value: personState.address,
            type: 'text',
            changeValue: (value: any) =>
                setPersonState({ ...personState, address: value }),
        },
        {
            name:'github',
            key:'github',
            value:personState.github,
            type:'text',
            changeValue:(value:any)=>setPersonState({...personState,github:value}),
        },
        {
            name:'linkedin',
            key:'linkedin',
            value:personState.linkedin,
            type:'text',
            changeValue:(value:any)=>setPersonState({...personState,linkedin:value}),
        },
        {
            name:'experiences',
            key:'experiences',  
            value:personState.experiences,  
            type:'text',
            changeValue:(value:any)=>setPersonState({...personState,experiences:value}),
        },

    ];

    return (
        <Dialog open={open} sx={{ '& .MuiDialog-paper': { width: '80%' } }} onClose={handleClose}>
            <DialogTitle>{'Ajouter un profil :'}</DialogTitle>
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
                    <ListItem sx={{display: 'flex', flexDirection:'column',alignItems: 'flex-start'}}>
                        <Typography variant="h6">Skills :</Typography>
                    </ListItem>
                </List>
            </DialogContent>
            <DialogActions
             sx={{
                display: 'flex',
                justifyContent: 'space-center',
            }}
            >
                <Button onClick={handleClose}>Annuler</Button>
                <Button onClick={handleClose}>Ajouter</Button>
            </DialogActions>
        </Dialog>
            
    );
};

export default AddProfil;