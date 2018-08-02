import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import injectSheet from 'react-jss';
import LoaderPaint from '../../components/Loader/LoaderPaint';
import Button from '../../components/Button';

const styles = {
  container: {
    margin: '4rem 1rem',
  },
  form: {
    boxShadow: '0px 10px 20px -2px rgba(80, 91, 109, 0.2)',
    margin: '0 auto',
    width: 500,
    padding: '1rem 1rem 3rem 1rem',
  },
  formLine: {
    margin: '1rem',
  },
};

class ContactContainer extends Component {
  state = {
    loading: false,
    name: '',
    username: '',
    email: '',
    send: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
    };
    this.setState({
      loading: true,
    });

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then((res) => {
        if (res.status === 201) {
          setTimeout(
            this.setState({
              name: '',
              username: '',
              email: '',
              loading: false,
              send: true,
            }),
            2000,
          );
          setTimeout(
            this.setState({
              send: false,
            }),
            5000,
          );
          // eslint-disable-next-line
          console.log(res);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    const {
      loading, name, username, email, send,
    } = this.state;
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <h2>Test post</h2>
          <div className={classes.formLine}>
            <label htmlFor="name">
              Nom
              <input
                type="text"
                name="name"
                id="name"
                onChange={e => this.handleChange(e)}
                value={name}
              />
            </label>
          </div>
          <div className={classes.formLine}>
            <label htmlFor="username">
              Pseudo*
              <input
                type="text"
                name="username"
                id="username"
                onChange={e => this.handleChange(e)}
                value={username}
              />
            </label>
          </div>
          <div className={classes.formLine}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                onChange={e => this.handleChange(e)}
                value={email}
              />
            </label>
          </div>
          <Button text="Envoyer" disabled={loading} />
          {loading &&
            <LoaderPaint />
          }
          {send &&
            <div>
              Le formulaire a été envoyé <span role="img" aria-label="Envoi réussi">🤙</span>
            </div>
          }
        </form>
      </div>
    );
  }
}

ContactContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default injectSheet(styles)(ContactContainer);
