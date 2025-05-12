import React from 'react';
import { useRouterData } from '../context/RoutersDataContext';
import { useRouterFilter } from '../context/RoutersFilterContext';
import RouterCard from './RouterCard';

interface Router {
    id: string;
    name: string;
    type: string;
    updatatedAt: string;
}
const RouterList = () => {
    const { state } = useRouterFilter();
    const { routerType, sortOption } = state;
    const { routers, loading, error } = useRouterData();

    const filteredRouters = routerType === 'all' 
        ? routers 
        : [...routers].filter(router => router.type === routerType);

    const sortedRouters = [...filteredRouters].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'name') {
            return b.name.localeCompare(a.name);
        }
        return 0;
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="router-list">
            {sortedRouters.map((router: Router) => (
                <RouterCard key={router.id} router={router} />
            ))}
        </div>
    );
}
export default RouterList;