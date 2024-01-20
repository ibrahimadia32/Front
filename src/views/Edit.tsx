import { Table, TableHead, Paper, TableBody  } from "@mui/material";
import HeaderEdit from "../components/edit/Header.edit";
import RowEdit from "../components/edit/Row.edit";
import { useEffect, useState } from "react";
import Requestapi from "../services/Requestapi";
import {Person } from "../components/interface/Interface.Profil";

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