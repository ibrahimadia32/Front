import { Table, TableHead, Paper, TableBody, Box, Button } from '@mui/material';
import HeaderEdit from '../components/edit/Header.edit';
import RowEdit from '../components/edit/Row.edit';
import { useEffect, useState } from 'react';
import Requestapi from '../services/Requestapi';
import { Person } from '../components/interface/Interface.Profil';
import { PersonAdd } from '@mui/icons-material';
import AddEdit from '../components/edit/Add.edit';

const Edit = () => {
    const [persons, setPersons] = useState<Person[]>([]);

    const [openAdd, setOpenAdd] = useState(false);
    useEffect(() => {
        Requestapi.getallprofil().then((response: any) => {
            setPersons(response.data);
        });
    });

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    onClick={() => {
                        console.log('click');
                        setOpenAdd(true);
                    }}
                    size="large"
                    sx={{ color: 'green' }}
                    startIcon={<PersonAdd />}>
                    Ajouter un profil
                </Button>
            </Box>
            <Table component={Paper}>
                <TableHead>
                    <HeaderEdit />
                </TableHead>
                <TableBody>
                    {persons.map((person, index) => (
                        <RowEdit
                            person={person}
                            key={index}
                            deletePerson={(id: string) => {
                                console.log(id);
                                setPersons(persons.filter((person) => person._id !== id));
                            }}
                        />
                    ))}
                </TableBody>
            </Table>
            <AddEdit
                open={openAdd}
                handleClose={() => {
                    setOpenAdd(false);
                }}
            />
        </>
    );
};

export default Edit;
