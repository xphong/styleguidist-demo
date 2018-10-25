import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  height: 38px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  border-radius: 3px;
  background: #365DC9;
  color: #FFF;
  cursor: pointer;
`;

export default class Button extends React.PureComponent {
  static propTypes = {
    /** Text for the button */
    text: PropTypes.string
  };

  static defaultProps = {
    text: 'Button'
  };

  render() {
    return (
      <StyledButton>{this.props.text}</StyledButton>
    );
  }
}
