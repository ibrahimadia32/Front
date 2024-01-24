import { Create, Delete, Visibility } from '@mui/icons-material';
import { TableCell, Avatar, TableRow, IconButton, ButtonGroup } from '@mui/material';
import { Person } from '../interface/Interface.Profil';
import { useState } from 'react';
import EditDailog from './DialogEdit.edit';
import ViewEdit from './VeiwEdit.edit';

interface RowElement {
    value: any;
    type?: 'avatar' | 'string';
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

interface RowEditProps {
    person: Person;
    deletePerson: (id: string) => void;
}

const RowEdit = ({ person, deletePerson }: RowEditProps) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [visible, setVisible] = useState(false);

    const rowElements: RowElement[] = [
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
            value: person.phone,
            key: 'phone',
        },
        {
            value: person.jobtitle,
            key: 'job',
        },
        {
            value: (
                <ButtonGroup>
                    <IconButton onClick={() => setVisible(true)}>
                        <Visibility />
                    </IconButton>
                    <IconButton onClick={() => setOpenDialog(true)}>
                        <Create />
                    </IconButton>
                    <IconButton onClick={() => deletePerson(person._id)}>
                        <Delete />
                    </IconButton>
                </ButtonGroup>
            ),
            key: 'actions',
        },
    ];

    return (
        <TableRow>
            {rowElements.map((elem, index) => (
                <TableCell key={elem.key} align={elem.align}>
                    {elem.value}
                </TableCell>
            ))}
            <EditDailog person={person} open={openDialog} handleClose={() => setOpenDialog(false)} />
            <ViewEdit person={person} open={visible} handleClose={() => setVisible(false)} />
        </TableRow>
    );
};

export default RowEdit;
