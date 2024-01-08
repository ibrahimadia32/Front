import { Table, TableHead, Paper, TableBody  } from "@mui/material";
import HeaderEdit from "../components/edit/Header.edit";
import RowEdit from "../components/edit/Row.edit";

const Edit = () => {
    return (
        <Table component={Paper}>
            <TableHead>
                <HeaderEdit />
            </TableHead>
            <TableBody>
        
                <RowEdit />
        
            </TableBody>
        </Table>
    )
}


export default Edit;