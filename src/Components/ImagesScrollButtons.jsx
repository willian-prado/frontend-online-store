import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

export default class ImagesScrollButtons extends Component {
  render() {
    const { decreaseIndex, increaseIndex } = this.props;
    return (
      <div>
        <button type="button" onClick={ decreaseIndex }>
          <AiOutlineCaretLeft />
        </button>
        <button type="button" onClick={ increaseIndex }>
          <AiOutlineCaretRight />
        </button>
      </div>
    );
  }
}

ImagesScrollButtons.propTypes = {
  decreaseIndex: PropTypes.func.isRequired,
  increaseIndex: PropTypes.func.isRequired,
};
