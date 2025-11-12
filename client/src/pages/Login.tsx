import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../storage";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e:FormEvent) =>{
    e.preventDefault();

    const user = getUser()
    if(user && user.email === email && user.password === password){
      localStorage.setItem("loggedIn", "true");
      alert("Login Successful");
      navigate('/profile');
    }
    else{
      alert("Invalid Credentials");
    } 
  }
  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <form onSubmit={handleLogin} className="mt-3">
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  )
}
