import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Button from '../Button';
import CustomLink from '../CustomLink';
import './Card.css';

class Card extends Component {
  handleClick = (id) => {
    this.props.dispatch(push(`/articles/detail/${id}`));
  }
  render() {
    const {
      id, title, author, url, detail,
    } = this.props;

    return (
      <article className="card--container" id={id}>
        <header>
          <h2>{title}</h2>
        </header>
        <p>
          Author : {author}
        </p>
        {url &&
          <p className="card--container-spacing">
            URL : <CustomLink link={url} primary={parseInt(id, 10) % 2 === 0} target="_blank" rel="noopener" text={title} />
          </p>
        }
        {!detail &&
          <Button
            text="Voir le détail"
            className="azerty"
            onClick={e => this.handleClick(id, e)}
          />
        }
        <em>Fait avec CSS Modules</em>
      </article>
    );
  }
}

Card.defaultProps = {
  url: false,
  detail: false,
};

Card.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  url: PropTypes.string,
  detail: PropTypes.bool,
};

export default connect()(Card);
