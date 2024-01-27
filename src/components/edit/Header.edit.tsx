import { MoreVert } from '@mui/icons-material';
import { Button, IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import ActionButton from './ActionButton';

interface HeaderElement {
    name: React.ReactNode;
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

const HeaderEdit = () => {
    const [open, setOpen] = React.useState(false);

    const headerElements: HeaderElement[] = [
        {
            name: 'Avatar',
            key: 'avatar',
        },
        {
            name: 'Name',
            key: 'name',
        },
        {
            name: 'Email',
            key: 'email',
        },
        {
            name: 'Phone',
            key: 'phone',
        },
        {
            name: 'job',
            key: 'job',
        },
        {
            name: <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {"Actions"} 
                <ActionButton/>
            </div>,
            key: 'actions',
        },
    
    ];
    
    return (
        <TableRow>
            {headerElements.map((elem, index) => (
                <TableCell key={elem.key} align={elem.align}>
                    {elem.name}
                </TableCell>
            ))}
        </TableRow>
    );
};

export default HeaderEdit;
