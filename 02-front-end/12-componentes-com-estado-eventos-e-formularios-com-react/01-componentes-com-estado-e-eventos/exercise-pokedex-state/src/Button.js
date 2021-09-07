import React from 'react';
import './button.css';

class Button extends React.Component {
  render() {
    const { children, className, disabled, onClick } = this.props;

    return (
      <button
        className={`button-text ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
