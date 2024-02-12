import { Routes, Route } from 'react-router-dom';
import Edit from '../views/Edit';

interface RouteElement {
    path: string;
    component: React.ReactNode;
}

const routes: RouteElement[] = [
    {
        path: '/edit',
        component: <Edit />,
    },
];

const Router = () => {
    return (
        <Routes>
            {routes.map((route: RouteElement, index) => (
                <Route path={route.path} element={route.component} key={index} />
            ))}
        </Routes>
    );
};

export default Router;
