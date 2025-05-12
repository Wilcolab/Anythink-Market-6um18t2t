
interface Router {
    id: string;
    name: string;
    type: string;
    updatatedAt: string;
}

interface RouterCardProps {
    router: Router;
}

const RouterCard = ({ router }: RouterCardProps) => {
    return (
        <div key={router.id} className="router-card">
                    <h3>{router.name}</h3>
                    <p>Type: {router.type}</p>
                    <p>Updated At: {new Date(router.updatatedAt).toLocaleDateString()}</p>
                </div>
    );
}

export default RouterCard;