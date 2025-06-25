import { useEffect, useState } from "react";
import UserForm from "../../components/UserForm/Userform";
import UserList from "../../components/UserList/UserList";
import "./ManageUsers.css";
import toast from "react-hot-toast";
import { fetchUser } from "../../service/UserService";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const response = await fetchUser();
        if (response.status === 403) {console.log("PRatik auth")}
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to fetch users");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);
  return (
    <div className="users-container text-light">
      <div className="left-column">
        <UserForm setUsers={setUsers}></UserForm>
      </div>
      <div className="right-column">
        <UserList users={users} setUsers={setUsers}></UserList>
      </div>
    </div>
  );
};

export default ManageUsers;
