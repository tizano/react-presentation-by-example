import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Card.css';

const Card = ({
  id, title, author, url,
}) => (
  <article className="card--container" id={id}>
    <header>
      <h2>{title}</h2>
    </header>
    <p>
      Author : {author}
    </p>
    {url &&
      <p>
        URL : <a href={url} target="_blank" rel="noopener">{url}</a>
      </p>
    }
    <Button text="Voir le détail" className="azerty" />
  </article>
);

Card.defaultProps = {
  url: false,
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Card;
