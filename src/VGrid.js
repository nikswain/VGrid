import React, { Component } from 'react';
import { Grid } from 'react-virtualized';
import VGridElement from './VGridElement';

import './App.css';

class VGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  gridKey(x, y) {
    return `${x},${y}`;
  }

  onClick(x, y) {
    const cell = this.gridKey(x, y);
    const cellValue = this.state[cell];
    this.setState({[cell]: !cellValue});
  }

  renderElement ({key, columnIndex, rowIndex, style}) {
    const selected = this.state[this.gridKey(columnIndex,rowIndex)];
    return (
      <VGridElement
        key={key}
        col={columnIndex}
        row={rowIndex}
        style={style}
        selected={selected} 
        onClick={this.onClick.bind(this,columnIndex,rowIndex)}
      />

    )  
  }

  render() {
    return (
      <div>
        <Grid
          cellRenderer={this.renderElement.bind(this)}
          columnCount={100}
          columnWidth={50}
          height={600}
          rowCount={100}
          rowHeight={30}
          width={600}
        />
      </div>
    );
  }
}

export default VGrid;
