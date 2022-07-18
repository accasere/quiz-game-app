import React, { Fragment } from 'react'
import {Helmet} from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './styles/home.css'



 function Home() {
  return (
    <Fragment>
        <Helmet>
            <title>Quiz-Game- Home</title>
        </Helmet>
         <div id="home">
            <section>                
                <h1 style={{textAlign: 'center'}}>Quiz-Game</h1>
                <div className='play-button-container'>                    
                        <Link className='play-button' to="/play/instructions">Play </Link>
                </div>
                <div className='auth-container'>
                    <Link to='/login' className='auth-buttons' id="login-btn">Login</Link>
                    <Link to='/signup' className='auth-buttons' id="signup-btn">SignUp</Link>
                </div>
            </section>
        </div>

    </Fragment>
   
    )
}

export default Home;

