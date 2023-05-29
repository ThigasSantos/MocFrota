import {Link, useNavigate} from 'react-router-dom';
import {postData } from "../../src/hooks/useLoginData";
import { useState } from 'react';

export function Login(){

  const navigate = useNavigate();

  const handleInputUser = (event: any) => {
    setUser(event.target.value);
  };
  const handleInputPass = (event: any) => {
    setPassword(event.target.value);
  };

    const [email, setUser] = useState("");
    const [password, setPassword] = useState("");

    const submit = async() =>{
     const ret = await postData({email, password});
      navigate("/home");
     
    }

    return (
        <>
        <html>
          <body>
              <main>
                  <div className="background"></div>
                  <div className="login">
                    <div className="logo"><img src="../src/components/img/logo4.png" alt="logo" /></div>
                    <div className="loginForm">
                      <div className="box-user">
                        <input type="text" id="user" name="" value={email} onChange={handleInputUser} required/>
                        <label>Login</label>
                        <br /> <br />
                      </div>
                      <div className="box-user">
                        <input type="password" name="" value={password} onChange={handleInputPass} required/>
                        <label>Senha</label>
                        <br /> <br />
                      </div>
                      <div >
                        <button className="btn" onClick={submit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Entrar
                        </button>
                      </div>               
                    </div>
                  </div>
              </main>   
          </body>
        </html></>
        )
}

export default Login;