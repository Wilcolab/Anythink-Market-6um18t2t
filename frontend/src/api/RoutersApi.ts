import axios from 'axios';

const REACT_APP_CODESPACE_BACKEND_URL = 'https://ominous-guide-q6vgwv7947c4vpg-3001.app.github.dev/';

const getRouters = async () => axios.get(`${REACT_APP_CODESPACE_BACKEND_URL}/routers`).then(response => response.data);

export {
    getRouters
}