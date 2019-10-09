import React, { Component } from 'react';

const Button = props => {
  return (
    <a
      href={props.link}
      className='link-button btn'
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.display}
    </a>
  );
};

export default Button;
