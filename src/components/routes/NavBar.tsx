import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const links = [
    { title: 'Home', path: '/home' },
    { title: 'edit', path: '/edit' },
    // { title: 'settings', path: '/settings' },
];

const Navbar = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: blueGrey[900],
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Testify
                </Typography>
                {links.map((item, key) => (
                    <Button color="inherit" component={'a'} href={item.path} key={key}>
                        {item.title}
                    </Button>
                ))}
                <Avatar></Avatar>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
