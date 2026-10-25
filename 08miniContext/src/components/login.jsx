import React ,{useContext}from "react";

import UserContext from "../context/userContext";

function Login() {
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState('');

    const {setUser} = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        setUser({ username, password });
    }

    return (
        <div>
        <h1>Login</h1>
        <input type="text" 
        value={username} onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" />
        {"   "}
        <input type="text" 
        value={password} onChange={(e) => setPassword(e.target.value)}
         placeholder="Password" />
        <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;