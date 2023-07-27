import React, {useState} from "react"
import { useQuery, gql, useMutation } from "@apollo/client";

const LOGIN_QL = gql`
mutation Login($userName: String!, $password: String!) {
  login(userName: $userName, password: $password) {
    token
    user {
      email
      userName
      
    }
  }
}
`

const Login = (props) => {

 
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const [loginUser] = useMutation(LOGIN_QL, {
        "userName": username,
        "password": pass
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(email);
        console.log("i am sending", username, pass)
        const result = await loginUser();
        console.log(result);
    
        ///
    }

    //props.onFormSwitch('register')
    //need to add useNavigate to switch to register page
    return (
        <div className="auth-form-container">
       <h1>CSGO Roulette</h1>
       <br></br>
       <h2>Log In</h2>
       <form className="login-form">
           <label>Username</label>
           <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="userName"></input>
           <label>Password</label>
           <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password"></input>
           <button type="submit" onClick={handleSubmit}>Login</button>
       </form>
       <button className="link-btn">Don't have an account? Register Here!</button>
   </div>

    )
    
}


/*



        */


export default Login;