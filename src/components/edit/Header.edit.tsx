import { TableCell, TableRow } from '@mui/material';

interface HeaderElement {
    name: string;
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

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
        name: 'Actions',
        key: 'actions',
    },
];

const HeaderEdit = () => {
    return (
        <TableRow>
            {headerElements.map((elem, index) => (
                <TableCell key={index} align={elem.align}>
                    {elem.name}
                </TableCell>
            ))}
        </TableRow>
    );
};

export default HeaderEdit;
