import React from 'react';
import { Link, withRouter } from 'react-router';

// <3 ES6 destructuring
const Header = ({ currentUser, logout, router, clearErrors }) => {
// Displaying either a welcome message and logout button or log in and sign up links
  let links;
  let welcomeMessage;
  const logoutAndRedirect = () => {
    clearErrors();
    logout();
    router.push("/login");
  };
  // This is annoying and feels hacky, but react router yells at you if you're
  // using hashHistory and you click a Link tag that routes to the current page,
  // so this'll have to do for now
  const handleClick = (path, e) => {
    if (router.location.pathname === path) {
      e.preventDefault();
    }

  };
  if (currentUser) {
    welcomeMessage = <h3>Welcome, {currentUser.username}</h3>;
    links = <button onClick={ logoutAndRedirect }>Logout</button>;
  } else {
    links = (
      <div>
        <Link to="signup" className="signup" onClick={ (e) => handleClick("/signup", e) }>Sign Up</Link>
        <Link to="login" onClick={ (e) => handleClick("/login", e) }>Log In</Link>
      </div>
    );
  }
  return (
    <div className="header-container">
      <header className="clearfix">
        <h1>Questionnaire Manager</h1>
        <nav>
          { welcomeMessage }
          { links }
        </nav>
      </header>
    </div>
  );
};

export default withRouter(Header);
