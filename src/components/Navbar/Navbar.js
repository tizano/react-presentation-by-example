import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const styles = theme => ({
  navbar: {
    display: 'block',
    backgroundColor: theme.color.secondary,
  },
  navLink: {
    padding: '1rem 3rem',
    display: 'block',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: theme.color.white,
    fontWeight: 600,
    fontSize: '1.2rem',
    transition: 'all .2s ease',
    '&:hover': {
      transition: 'all .2s ease',
      backgroundColor: theme.color.primary,
    },
    '@media (min-width: 700px)': {
      fontSize: '1.5rem',
      display: 'inline-block',
    },
  },
});

const Navbar = ({ classes }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
    <nav className={classes.navbar}>
      <Link to="/" className={classes.navLink}>Accueil</Link>
      <Link to="/articles" className={classes.navLink}>Liste des articles</Link>
      <Link to="/contact" className={classes.navLink}>Contact</Link>
    </nav>
  </header>
);

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Navbar);
