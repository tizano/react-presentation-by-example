import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const EmotionObjectLink = styled('a')(props => ({
  minWidth: '12rem',
  margin: '0 auto 20px',
  padding: props.primary ? 18 : 16,
  borderRadius: 5,
  textDecoration: 'none',
  border: props.primary
    ? 'none'
    : '3px solid currentColor',
  background:
    props.primary &&
    'linear-gradient(90deg, #D26AC2, #46C9E5)',
  color: props.primary ? '#ffffff' : '#D26AC2',
  '&:hover': {
    opacity: '0.95',
  },
  '@media (min-width: 768px)': {
    margin: '0 20px 0 0',
    '&:last-child': {
      margin: 0,
    },
  },
}));

const CustomLink = ({
  text, link, ...props
}) => (
  <EmotionObjectLink href={link} {...props}>
    {text}
  </EmotionObjectLink>
);


CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CustomLink;
