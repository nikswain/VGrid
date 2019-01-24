import React, { Component } from 'react';
import classnames from 'classnames';
import './App.css';

class VGridElement extends Component {
  render() {
    const { style, selected, onClick, row, col } = this.props;
    const classNames = classnames(
      'grid-element',
      {'grid-element-selected': selected},
      {'grid-element-not-selected': !selected},
    );

    return (
      <span
        style={style}
        onClick={onClick}
        className={classNames}
      >
        {col},{row}
      </span>
    );
  }
}

export default VGridElement;
