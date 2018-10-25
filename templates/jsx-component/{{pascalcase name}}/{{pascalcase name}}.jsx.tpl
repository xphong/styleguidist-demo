import React from 'react';
import PropTypes from 'prop-types';

export default class {{pascalcase name}} extends React.PureComponent {
  static propTypes = {
    /** Sample prop description that you can change */
    dummyProp: PropTypes.number
  };

  static defaultProps = {
    dummyProp: 123
  };

  render() {
    return (
      <p>replace me {this.props.dummyProp}</p>
    );
  }
}
