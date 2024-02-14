import { Link, Navigate, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { useState } from 'react';

const links = [
    { title: 'Home', path: '/dashboard/home' },
    { title: 'edit', path: '/dashboard/edit' },
];

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    if (localStorage.getItem('token')) {
    return (
        <>
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
                <Avatar
                    onClick={(event) => {
                        setAnchorEl(event.currentTarget);
                    }}
                ></Avatar>
            </Toolbar>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                    setAnchorEl(null);
                }}
                
            >
                <Link to="/connexion" style={{ textDecoration: 'none', color: 'black' }}>
                    <Button
                        color="inherit"
                        onClick={() => {
                            localStorage.removeItem('token');
                        }}
                    >
                        Deconnexion
                    </Button>
                </Link>
            </Menu>

        </AppBar>
        <Outlet />
        </>
    );
    }
    
    else {
        return (
            <Navigate to="/connexion" replace={true} />
        );
    }
};

export default Dashboard;
