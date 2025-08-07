import './App.css'
import { Link } from 'react-router'

function App() {

  return (
    <>
      <div className='logo-container'>
        <img src='/logo.png' className="logo" alt="Grizzlies Logo"/>
      </div>
      <h1>Grizzlies Pick'Em</h1>
      <p className="read-the-docs">
        Inicia sesión para acceder a las predicciones
      </p>
      <div className="login-container">
        <Link to="/landing">
          <button className="login-button">Iniciar sesión</button>
        </Link>
      </div>
    </>
  )
}

export default App
