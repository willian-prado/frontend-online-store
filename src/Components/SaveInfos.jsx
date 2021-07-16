import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SaveInfos extends Component {
  render() {
    const { email, radioButton, comentario } = this.props;
    return (
      <div>
        { email.map((enderecoEmail, index) => (
          <div key={ index }>
            <p>{ enderecoEmail }</p>
            <p>{ radioButton[index]}</p>
            <p>{ comentario[index]}</p>
          </div>
        ))}
      </div>
    );
  }
}

SaveInfos.propTypes = {
  email: PropTypes.arrayOf(PropTypes.string).isRequired,
  radioButton: PropTypes.arrayOf(PropTypes.string).isRequired,
  comentario: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default SaveInfos;
