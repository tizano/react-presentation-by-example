import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Card = ({
  id, title, author, url,
}) => (
  <article style={{ padding: '1rem', margin: '1rem', border: '1px solid #282c34' }} id={id}>
    <header>
      <h2>{title}</h2>
    </header>
    <p>
      Author : {author}
    </p>
    {url &&
      <p>
        URL : <a href={url} target="_blank" rel="noopener">{url}</a>
        <Button text="Voir le détail" className="azerty" />
      </p>
    }
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
