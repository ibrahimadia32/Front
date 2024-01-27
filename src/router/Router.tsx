import { Routes, Route } from 'react-router-dom';
import Edit from '../views/Edit';
import Home from '../views/Home';

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
];

const Router = () => {
    return (
        <Routes>
            {routes.map((route: RouteElement) => (
                <Route path={route.path} element={route.component} />
            ))}
        </Routes>
    );
};

export default Router;
