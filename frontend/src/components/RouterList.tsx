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

interface RouterListProps {
    handleModal: (router: Router) => void;
}

const RouterList = ({ handleModal }: RouterListProps) => {
    const { state } = useRouterFilter();
    const { routerType, sortOptions } = state;
    const { routers, loading, error } = useRouterData();

    const filteredRouters = routerType === 'All' 
        ? routers 
        : [...routers].filter(router => router.type === routerType);

    const sortedRouters = [...filteredRouters].sort((a, b) => {
        if (sortOptions === 'name') {
            return a.title.localeCompare(b.title);
        } else if (sortOptions === 'name') {
            return b.title.localeCompare(a.title);
        }
        return 0;
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="router-list">
            {sortedRouters.map((router: Router) => (
                <RouterCard key={router.id} router={router} handleModal={handleModal} />
            ))}
        </div>
    );
}
export default RouterList;