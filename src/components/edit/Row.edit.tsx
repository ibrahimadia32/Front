
import { Create, Delete } from '@mui/icons-material';
import {TableCell, Avatar, TableRow, IconButton, ButtonGroup} from '@mui/material';


interface RowElement {
    value : any,
    type?: "avatar" | "string" ,
    key: string,
    align?: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined,
}


const RowEdit = ({
    firstname = 'John',
    lastname = 'Doe',
    email = 'john@doe.fr',
    phone = '06 06 06 06 06',
    location = 'Paris',
    avatar = 'https://material-ui.com/static/images/avatar/1.jpg',
}: {
    firstname?: string,
    lastname?: string,
    email?: string,
    phone?: string,
    location?: string,
    avatar?: string,

}

) => {

    const rowElements : RowElement[] = [
        {
            value: <Avatar src={avatar} />,
            key: 'avatar',
        
        
        },
        {
            value: `${firstname} ${lastname}`,
            key: 'name',
        
        },
        {
            value: email,
            key: 'email',
        },
        {
            value: phone,
            key: 'phone',
        
        },
        {
            value: location,
            key: 'location',
        
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