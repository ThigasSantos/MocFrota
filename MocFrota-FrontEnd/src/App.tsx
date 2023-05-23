import '../src/components/css/App.css'

function App() {
  return (
    <>
    <html>
      <body>
          <main>
              <div className="background"></div>
              <div className="login">
                <div className="logo"><img src="../src/components/img/logo4.png" alt="logo" /></div>
                <form action="" method="post" className="loginForm">
                  <div className="box-user">
                    <input type="text" id="user" name="" required/>
                    <label>Login</label>
                    <br /> <br />
                  </div>
                  <div className="box-user">
                    <input type="password" name="" required/>
                    <label>Senha</label>
                    <br /> <br />
                  </div>
                  <div >
                    <button className="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Entrar
                    </button>
                  </div>               
                </form>
              </div>
          </main>   
      </body>
    </html></>
  )
}

export default App
