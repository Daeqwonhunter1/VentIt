import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {
  return (
    <header>
      <h1>Ventit</h1>
      <div>
        {props.currentUser
          ?
          <div id="user-info">

            <p id="user">{`Hello, ${props.currentUser.username}`}</p>
            <Link to='/register'><button onClick={props.handleLogout}>Logout</button></Link>

          </div>
          :
          <Link to='/login'><button>Login/register</button></Link>

        }

      </div>

    </header>

  )


}