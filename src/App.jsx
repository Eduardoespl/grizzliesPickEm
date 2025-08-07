import './App.css'

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
        <a href="#" target="_blank" rel="noopener noreferrer">
          <button className="login-button">Iniciar sesión</button>
        </a>
      </div>
    </>
  )
}

export default App
