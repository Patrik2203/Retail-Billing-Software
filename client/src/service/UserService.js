import axios from "axios";

export const addUser = async (user) => {
    return await axios.post('https://billing-software-ln5r.onrender.com/api/v1.0/admin/register',user, {headers : {'Authorization' :  `Bearer ${localStorage.getItem('token')}`}});
}

export const deleteUser = async (id) => {
    return await axios.delete(`https://billing-software-ln5r.onrender.com/api/v1.0/admin/users/${id}`, {headers : {'Authorization' :  `Bearer ${localStorage.getItem('token')}`}});
}

export const fetchUser = async () => {
    return await axios.get('https://billing-software-ln5r.onrender.com/api/v1.0/admin/users', {headers : {'Authorization' :  `Bearer ${localStorage.getItem('token')}`}});
}