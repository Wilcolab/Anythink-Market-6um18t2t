import React from 'react';
import { useRouterData } from '../context/RoutersDataContext';
import RouterCard from './RouterCard';

interface Router {
    id: string;
    name: string;
    type: string;
    updatatedAt: string;
}

const RouterList = () => {
    const { routers, loading, error } = useRouterData();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            {routers.map((router: Router) => (
                <RouterCard key={router.id} router={router} />
            ))}
        </>
    );
}
export default RouterList;