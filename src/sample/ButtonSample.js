import React from 'react';
//import TextSample from './TextSample';

class ButtonSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      label: 'hello world'
    }
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    console.log('button clicked!!');
    const val  = this.state.count + 1;
    this.setState({ count: val });
  }

  render () {
    return (
      <div>
        {/* <TextSample text={ this.state.label } /> */}
        <button
          onClick={ this.clicked }>
          { this.state.count }
        </button>
      </div>
    );
  }
}

export default ButtonSample;