import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { email, value } = e.target;
    setLoginData({ ...loginData, [email]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const User = await axios.get('http://localhost:8080/api/usuarios', loginData);

    try {
     console.log('Bienvenido', User.data);
    } catch (error) {
      console.error('Error al iniciar sesion', error);
    }
  };

  return (
    <div className='form-cont'>
      <form className='formulario' onSubmit={handleSubmit}>
        <h1>INICIAR SESION</h1>
        <div className='contenedor'>
          <div className='input-contenedor'>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type='text'
              placeholder='Mail'
              name='email'
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          <div className='input-contenedor'>
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type='number'
              placeholder='Password'
              name='password'
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          <input type='submit' value={'Ingresar'} className='button' />
          
          <p>¿No tienes una cuenta?<a className='link' href='/AgregarUsuario'>Registrate</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;

