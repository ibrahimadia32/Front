import { Table, TableHead, Paper, TableBody  } from "@mui/material";
import HeaderEdit from "../components/edit/Header.edit";
import RowEdit from "../components/edit/Row.edit";
import { useEffect, useState } from "react";
import Requestapi from "../services/Requestapi";
import {Person } from "../components/interface/Interface.Profil";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Edit = () => {
    const [person, setPerson] = useState<Person[]>([]);

    useEffect(() => {
        Requestapi.getallprofil().then((response: any) => {
            setPerson(response.data);
            
    });
    });

    return (
        
        <Table component={Paper}>
            <TableHead>
            <PersonAddIcon
      style={{
        fontSize: '25px',
        position: 'absolute',
        top: '15px',
        right: '15px',
        cursor: 'pointer',
      }}
       onClick={() => {
        console.log('click');
       }
         }
    />
                <HeaderEdit />
            </TableHead>
            <TableBody>
        
                {person.map((person, index) => (
                    <RowEdit person={person} key={index} />                  
                ))}
        
            </TableBody>
        </Table>
    )
}


export default Edit;