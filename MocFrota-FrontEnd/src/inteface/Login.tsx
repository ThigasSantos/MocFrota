import {useNavigate} from 'react-router-dom';
import {postData } from "../../src/hooks/useLoginData";
import { useState } from 'react';
import jwtDecode from "jwt-decode";


export function Login(){

  const navigate = useNavigate();

  const handleInputUser = (event: any) => {
    setUser(event.target.value);
  };
  const handleInputPass = (event: any) => {
    setPassword(event.target.value);
  };

    const [email, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const submit = async () => {
      let response:any;
      try {
        response = await postData({ email, password });
      } catch (err) {
        alert("Ocorreu um erro ao fazer a requisição");
      }

        if (response.status === 200) {
          const token = response.data; // Obtenha o token JWT retornado pelo backend
          localStorage.setItem("app-token", token); // Armazene o token JWT no localStorage
          const decodedToken:any = jwtDecode(token); // Decodifique o token JWT
          const role = decodedToken.role; // Obtenha a role do usuário
          if(role === "Gerente")
            navigate("/home");
          else
            navigate("/homeCond");  
        } else {
          alert("Usuário ou senha incorretos");
        }
      
    };

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
