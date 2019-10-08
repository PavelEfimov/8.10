import Axios from 'axios';

const getUsers = () => Axios.get('/users');

export { getUsers };
