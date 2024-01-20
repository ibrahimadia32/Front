
import { Create, Delete } from '@mui/icons-material';
import {TableCell, Avatar, TableRow, IconButton, ButtonGroup} from '@mui/material';
import { Person } from '../interface/Interface.Profil';


interface RowElement {
    value : any,
    type?: "avatar" | "string" ,
    key: string,
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined,
}

interface RowEditProps {
    person : Person,
}


const RowEdit = ({person}: RowEditProps) => {
    const rowElements : RowElement[] = [
        {
            value: <Avatar src={person.avatarUrl} />,
            key: 'avatar',
        
        
        },
        {
            value: `${person.firstname} ${person.lastname}`,
            key: 'name',
        
        },
        {
            value: person.email,
            key: 'email',
        },
        {
            value:person.phone,
            key: 'phone',
        
        },
        {
            value: person.jobtitle,
            key: 'job',
        
        },
        {
            value: <ButtonGroup>
                <IconButton>
                   <Create />
                </IconButton>
                <IconButton>
                    <Delete />
                </IconButton>
            </ButtonGroup>,
            key: 'actions',
        
        },
    ]
    

    return (
        <TableRow>

            {
                rowElements
            .map((elem, index) => (
                <TableCell key={elem.key}
                    align={elem.align}
                >
                    {elem.value}
                </TableCell>
            ))}
        </TableRow>
    )

}


export default RowEdit;