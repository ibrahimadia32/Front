import { Table, TableHead, Paper, TableBody } from '@mui/material';
import HeaderEdit from '../components/edit/Header.edit';
import RowEdit from '../components/edit/Row.edit';
import { useEffect, useState } from 'react';
import Requestapi from '../services/Requestapi';
import { Person } from '../components/interface/Interface.Profil';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Edit = () => {
    const [persons, setPersons] = useState<Person[]>([]);

    useEffect(() => {
        Requestapi.getallprofil().then((response: any) => {
            setPersons(response.data);
        });
    });

    return (
        
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
        
    );
};

export default Edit;