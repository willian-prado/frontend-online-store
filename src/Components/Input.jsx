import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { value, type, id, datatestid, onChange, name } = this.props;

    return (
      <input
        value={ value }
        type={ type }
        id={ id }
        data-testid={ datatestid }
        onChange={ onChange }
        name={ name }
      />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
