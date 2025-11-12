import { useEffect, useState } from "react";
import { getUser, logOutUser, saveUser, type User } from "../storage"
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const currUser:User = getUser();
  const [user,setUser] =  useState<User>(
    {
      name: currUser.name || '',
      email: currUser.email || '',
      password: currUser.password || ''
    }
  );
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('loggedIn')) navigate('/login');
  }, [navigate]);

  const handleSave = () =>{
    saveUser(user);
    alert("Profile Updated Successfully");
  }

  const handleLogout = () =>{
    logOutUser()
    localStorage.removeItem("loggedIn");
    navigate('/login');
  }
  return (
    <div className="container mt-5">
      <h3>Account Information</h3>
      <input
        type="text"
        className="form-control mb-2"
        value={user?.name || ''}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        className="form-control mb-2"
        value={user?.email || ''}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button className="btn btn-primary w-100 mb-3" onClick={handleSave}>Save</button>
      <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
    </div>
  )
}
