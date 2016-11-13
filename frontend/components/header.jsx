import React from 'react';
import { Link, withRouter } from 'react-router';

// <3 ES6 destructuring
const Header = ({ currentUser, logout, router }) => {
// Displaying either a welcome message and logout button or log in and sign up links
  let links;
  let welcomeMessage;
  const logoutAndRedirect = () => {
    logout();
    router.push("/login");
  };
  if (currentUser) {
    welcomeMessage = <h3>Welcome, {currentUser.username}</h3>;
    links = <button onClick={ logoutAndRedirect }>Logout</button>;
  } else {
    links = (
      <div>
        <Link to="login">Log in</Link>
        <Link to="signup">Sign up</Link>
      </div>
    );
  }
  return (
    <header>
      <img src={ window.EQAssets.logo }/>
      { welcomeMessage }
      { links }
    </header>
  );
};

export default withRouter(Header);
