import { createContext, useContext, useReducer } from 'react';

type RouterType = 'All' | 'WiFi' | 'Enterprise' | 'Home';
type SortOptions = string;

interface RouterFilterState {
    routerType: RouterType;
    sortOption: SortOptions;
}

type Action = 
    | { type: 'SET_ROUTER_TYPE'; payload: routerType }
    | { type: 'SET_SORT_BY'; payload: SortOption };

const initialState: RouterFilterState = {
    routerType: 'All',
    sortOption: 'name',
};

const RouterFilterContext = createContext<{
    state: RouterFilterState;
    dispatch: () => null;
}>({
    state: initialState,
    dispatch: () => null,
});

function reducer(state: ProductFilterState, action: Action): ProductFilterState {
    switch (action.type) {
        case 'SET_ROUTER_TYPE':
            return { ...state, filterCategory: action.payload };
        case 'SET_SORT_BY':
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
}

export const RouterFilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <RouterFilterContext.Provider value={{ state, dispatch }}>
            {children}
        </RouterFilterContext.Provider>
    );
}
export const useRouterFilter = () => {
    const context = useContext(RouterFilterContext);
    if (!context) {
        throw new Error('useRouterFilter must be used within a RouterFilterProvider');
    }
    return context;
}
export default RouterFilterContext;