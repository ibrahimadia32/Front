import { Routes, Route } from 'react-router-dom';
import Edit from '../views/Edit';
import Home from '../views/Home';
import Profil from '../views/Profil';
import Inscription from '../views/Page.inscription';
import Connexion from '../views/Page.connexion';
import { Navigate } from 'react-router-dom';
import Dashboard from '../components/routes/Dashboard';

interface RouteElement {
    path: string;
    component?: React.ReactNode;
    index?: boolean;
    action?: any;
}

interface RouteMother {
    routes: RouteElement[];
    path: string;
    element?: React.ReactNode;
}

const Router = () => {
    const moms: Array<RouteMother> = [
        {
            path: '/',
            routes: [
                { path: '/inscription', component: <Inscription /> },
                { path: '/dashboard/edit', component: <Edit /> },
                { path: '/connexion', component: <Connexion />, index: true },
                { path: '/', component: <Navigate to="/connexion" replace={true} /> },
            ],
        },
        {
            path: '/dashboard',
            routes: [{ path: '/dashboard/home', component: <Home />, index: true }],
            element: <Dashboard />,
        },
    ];
    return (
        <Routes>
            {moms.map((mother, key) => (
                <Route key={key} path={mother.path} element={mother.element}>
                    {mother.routes.map((route, key) => (
                        <Route
                            key={key}
                            path={route.path}
                            element={route.component}
                            action={route.action}
                            index={route.index}
                        />
                    ))}
                </Route>
            ))}
        </Routes>
    );
};

export default Router;
