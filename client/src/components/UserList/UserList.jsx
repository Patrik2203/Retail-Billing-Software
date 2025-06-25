import { useState } from "react";
import { deleteUser } from "../../service/UserService";
import toast from "react-hot-toast";

const UserList = ({users, setUsers}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const filterUser = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const deleteUserByUserId = async (id) => {
        try {
            await deleteUser(id);
            setUsers(prevUsers => prevUsers.filter(user => user.userId !== id));
            toast.success("User deleted");
        } catch (error) {
            toast.error("Error deleting user");
        }
    }

    return (
        <div className="category-list-container" style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search by keyword"
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      <div className="row g-3 pe-2">
      {
        filterUser.map((user, index) => (
            <div key = {index} className="col-12">
                <div className="card p-3 bg-dark">
                    <div className="d-flex align-item-center">
                        <div className="flex-grow-1">
                            <h5 className="mb-1 text-white">{user.name}</h5>
                            <p className="mb-0 text-white">{user.email}</p>
                        </div>
                        <div>
                            { user.role == "ROLE_USER" && 
                            <button className="btn btn-sm btn-danger" onClick={() => deleteUserByUserId(user.userId)}>
                              <i className="bi bi-trash"></i>
                            </button> }
                            {
                              user.role == "ROLE_ADMIN" && <p className="text-danger">ADMIN</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        ))
      }
      </div>
    </div>
    )
}

export default UserList;