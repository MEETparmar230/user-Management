import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import { saveUser, type User } from "../storage";


export default function Register() {

  const [user,setUser] = useState<User>({
    name:"",
    email:"",
    password:""
  })

  const navigate = useNavigate();

  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password
    }
    saveUser(newUser);
    alert("Registration Successful");
    navigate('/login');
  }

  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <input type="text" value={user.name} className="form-control mb-2" placeholder="Name"  onChange={(e)=>{setUser({...user,name:e.target.value})}} required/>
        <input type="text" value={user.email} className="form-control mb-2" placeholder="Email"  onChange={(e)=>{setUser({...user,email:e.target.value})}} required/>
        <input type="text" value={user.password} className="form-control mb-3" placeholder="Password"  onChange={(e)=>{setUser({...user,password:e.target.value})}} required/>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      
    </div>
  )
}
