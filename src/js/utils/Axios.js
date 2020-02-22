import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:8443';
Axios.defaults.timeout = 5000;
export default Axios;
