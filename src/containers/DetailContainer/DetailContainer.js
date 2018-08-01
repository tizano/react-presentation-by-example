import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { isEmpty } from 'ramda';
import LoaderHeart from '../../components/Loader/LoaderHeart';
import LoaderReact from '../../components/Loader/LoaderReact';
import CustomLink from '../../components/CustomLink';
import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import Modal from '../../components/Modal';


class DetailContainer extends Component {
  state = {
    loading: true,
    hits: [],
  };

  componentDidMount() {
    const { match } = this.props;
    console.log(this.props);
    axios.get(`https://hn.algolia.com/api/v1/items/${match.params.itemId}`)
      .then((response) => {
        this.setState({
          loading: false,
          hits: response.data,
        });
        localStorage.setItem('currentDetail', JSON.stringify(response.data));
      });
  }

  render() {
    const { loading, hits } = this.state;
    const { modalOpen } = this.props;
    const hitItem = JSON.parse(localStorage.getItem('currentDetail'));
    return (
      <Fragment>
        {loading &&
          <LoaderHeart />
        }
        {!loading && !isEmpty(hits) &&
          <Card
            id={hits.id}
            title={hits.title}
            author={hits.author}
            url={hits.url}
            detail
          />
        }

        {modalOpen &&
          <Modal>
            {isEmpty(hitItem) &&
              <LoaderReact />
            }
            {!isEmpty(hitItem) &&
              <article id={hitItem.id}>
                <header>
                  <h2>{hitItem.title}</h2>
                </header>
                <p>
                  Author : {hitItem.author}
                </p>
                {hitItem.url &&
                  <p className="card--container-spacing">
                    URL : <CustomLink
                      link={hitItem.url}
                      primary={parseInt(hitItem.id, 10) % 2 === 0}
                      target="_blank"
                      rel="noopener"
                      text={hitItem.title}
                    />
                  </p>
                }
              </article>
            }
          </Modal>
        }
        <FloatingButton overlayColor="#f65b54">
          Cliques sur moi !
        </FloatingButton>
      </Fragment>
    );
  }
}

DetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen,
});

export default connect(mapStateToProps)(DetailContainer);
