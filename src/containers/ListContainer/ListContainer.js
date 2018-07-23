import React, { Component, Fragment } from 'react';
import axios from 'axios';
import LoaderCube from '../../components/Loader/LoaderCube';
import Card from '../../components/Card';

class ListContainer extends Component {
  state = {
    loading: true,
    hits: [],
  };

  componentDidMount() {
    axios.get('https://hn.algolia.com/api/v1/search?query=redux&page=25')
      .then((response) => {
        const res = response.data.hits;
        this.setState({
          loading: false,
          hits: res,
        });
      });
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
