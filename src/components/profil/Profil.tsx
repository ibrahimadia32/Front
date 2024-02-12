import { Create, Delete, Visibility } from '@mui/icons-material';
import { TableCell, Avatar, TableRow, IconButton, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import { Person } from '../interface/Interface.Profil';


interface Element {
    value: any;
    type?: 'avatar' | 'string';
    key: string;
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

interface RowProps {
    person: Person;
}



const Row = ({ person }: RowProps) => {
    const [visible, setVisible] = useState(null);

    const elements: Element[] = [
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
            value: person.bio,
            key: 'bio',
        },
        {
            value: person.avatarUrl,
            key: 'avatarUrl',
        },
        {
            value: person.email,
            key: 'email',
        },
        {   value: person.address,
            key: 'address',
        },
        {
            value: person.github,
            key: 'github',
        },
        {
            value: person.linkedin,
            key: 'linkedin',
        },
        {
            value: person.experiences,
            key: 'experience',
        },
        {
            value: person.formations,
            key: 'formation',
        },
    ];
};



export default Row;
