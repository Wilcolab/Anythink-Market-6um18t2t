import moment from 'moment';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <Card sx={{ minWidth: 275, margin: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {router.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {router.type}
                </Typography>
                <Typography variant="body2">
                    Last updated: {moment(router.updatatedAt).format('D MMM YYYY')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default RouterCard;