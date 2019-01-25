import React from 'react';

class TextSample extends React.Component {
  render () {
    return (
      <div>
        <h2>{ this.props.text }</h2>
      </div>
    );
  }
}

export default TextSample;