export interface User {
  name: string;
  email: string;
  password: string;
}


export const saveUser = (newUser:User)=>{
    localStorage.setItem("user", JSON.stringify(newUser));
}

export const getUser = ()=>{
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

export const logOutUser = () =>{
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
}

export const setLoggedIn = (status:boolean) =>{
    localStorage.setItem("loggedIn", status ? "true" : "false");
}

export const isLoggedIn = () : boolean =>{
    return localStorage.getItem("loggedIn") === "true";
}