import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { isEmpty } from 'ramda';
import LoaderCube from '../../components/Loader/LoaderCube';
import Card from '../../components/Card';

class ListContainer extends Component {
  state = {
    loading: true,
    hits: [],
  };

  componentDidMount() {
    // this.fetchDataPromise();
    this.fetchDataAsync();
    // Essais la fonction go() pour te procurer un max de plaisir
    this.go();
  }

  getCoffee = () => (
    new Promise((resolve) => {
      // it takes 2 seconds to make coffee
      setTimeout(() => resolve('☕'), 2000);
    }));

  fetchDataPromise = () => {
    axios.get('https://hn.algolia.com/api/v1/search?query=redux&page=25')
      .then((response) => {
        const res = response.data.hits;
        this.setState({
          loading: false,
          hits: res,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log('Error fetch list promise : ', error);
      });
  }

  async fetchDataAsync() {
    try {
      const response = await axios('https://hn.algolia.com/api/v1/search?query=redux&page=25');
      const result = await response.data;
      if (!isEmpty(result)) {
        this.setState({
          loading: false,
          hits: result.hits,
        });
      }
    } catch (error) {
      // eslint-disable-next-line
      console.log('Error fetch list async : ', error);
    }
  }

  // Funny async func
  async go() {
    try {
      // but first, coffee
      const coffee = await this.getCoffee();
      // eslint-disable-next-line
      console.log(coffee); // ☕
      // then we grab some data over an Ajax request
      const wes = await axios('https://api.github.com/users/wesbos');
      // eslint-disable-next-line
      console.log('Single await : ', wes.data); // mediocre code
      // many requests should be concurrent - don't slow things down!
      // fire off three requests and save their promises
      const userPromise = axios('https://randomuser.me/api/');
      const namePromise = axios('https://uinames.com/api/');
      // await all three promises to come back and destructure the result into their own variables
      const [user, name] = await Promise.all([userPromise, namePromise]);
      // call setState
      this.setState({
        loading: false,
      });
      // eslint-disable-next-line
      console.log('User info : ', user.data);
      // eslint-disable-next-line
      console.log('Name info : ', name.data);
    } catch (e) {
      // eslint-disable-next-line
      console.error('Error, shit happened : ', e); // 💩
    }
  }

  render() {
    const { loading, hits } = this.state;
    return (
      <Fragment>
        {loading &&
          <LoaderCube />
        }
        {!loading &&
          <Fragment>
            {hits.map(hit => (
              <Card
                key={hit.objectID}
                id={hit.objectID}
                title={hit.title}
                author={hit.author}
                url={hit.url}
              />
            ))}
          </Fragment>
        }
      </Fragment>
    );
  }
}

export default ListContainer;
