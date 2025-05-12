import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface RouterDetailsProps {
    open: boolean;
    handleModal: () => void;
    router: {
        id: string;
        name: string;
        type: string;
        updatedAt: string;
    }
}

const RouterDetails = ({ open, handleModal, router }: RouterDetailsProps) => {
    return (
        <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ width: 400, padding: 2, backgroundColor: 'white', borderRadius: 2 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {router.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Type: {router.type}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Last updated: {new Date(router.updatedAt).toLocaleString()}
                </Typography>
                <Button onClick={() => handleModal()} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Close
                </Button>
            </Box>
        </Modal>
    );  
}

export default RouterDetails;
