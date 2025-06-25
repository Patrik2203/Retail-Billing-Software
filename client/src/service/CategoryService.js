import axios from "axios";

export const addCategory = async (category) => {
    return await axios.post('https://billing-software-ln5r.onrender.com/api/v1.0/admin/categories', category, {headers : {'Authorization' :  `Bearer ${localStorage.getItem('token')}`}});
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`https://billing-software-ln5r.onrender.com/api/v1.0/admin/categories/${categoryId}`, {headers : {'Authorization' :  `Bearer ${localStorage.getItem('token')}`}});
}

export const fetchCategories = async () => {
    return await axios.get('https://billing-software-ln5r.onrender.com/api/v1.0/categories', {headers : {'Authorization' :  `Bearer ${localStorage.getItem('token')}`}})
}