import { Link, Navigate, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { blueGrey } from '@mui/material/colors';


const links = [
    { title: 'Home', path: '/dashboard/home' },
    { title: 'edit', path: '/dashboard/edit' },
];

const Dashboard = () => {

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
                <Avatar></Avatar>
            </Toolbar>
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
