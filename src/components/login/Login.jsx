import { FaUser, FaLock } from 'react-icons/fa';
import React, { useState } from 'react'
import './Login.css';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`Enviando dados ${username} - ${password}`)
    }

  return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>acesse o sistema com sua conta </p>
            <div>
                <label>E-mail:</label>
                <input type='email' placeholder='Digite seu e-mail' required 
                onChange={(e)=> setUsername(e.target.value)}></input>
                <FaUser className='icon'></FaUser>
            </div>
            <div>
                <label>Senha:</label>
                <input type='password' placeholder='Digite sua senha' required
                onChange={(e)=> setPassword(e.target.value)}></input>
                <FaLock className='icon'></FaLock>
            </div>
            <button>Entrar</button>
        </form>
        <div className="image-container">
                <img src="/src/assets/Login-amico.png" alt="imagem de login" />
            </div>
    </div>
  )
}

export default Login;