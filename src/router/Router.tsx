import { Routes, Route } from 'react-router-dom';
import Edit from '../views/Edit';
import Home from '../views/Home';
import Profil from '../views/Profil';
import Inscription from '../views/Page.inscription';
import Connexion from '../views/Page.connexion';

interface RouteElement {
    path: string;
    component: React.ReactNode;
}

const routes: RouteElement[] = [
    {
        path: '/edit',
        component: <Edit />,
    },
    {
        path: '/home',
        component: <Home />,
    },
    {
        path: '/profil/:id',
        component: <Profil />,
    },
    {
        path: '/Connexion',
        component: <Connexion />,
    },
];

const Router = () => {
    return (
        <Routes>
            {routes.map((route: RouteElement) => (
                <Route path={route.path} element={route.component} key={route.path} />
            ))}
        </Routes>
    );
};

export default Router;
