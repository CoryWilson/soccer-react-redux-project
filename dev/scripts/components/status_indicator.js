import React from 'react'

class StatusIndicator extends React.Component {
  constructor() {
    super();
    this.state = {
      watching: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({watching: !this.state.watching});
    
    if (this.state.watching == false) {
      // is watching
    } else {
      // is not watching
    }
  }
  render() {
    const text = this.state.watching ? 'fa fa-circle watching' : 'fa fa-circle not-watching';
    return (
      <div onClick={this.handleClick}>
        <i className={text}></i>
      </div>
    );
  }
}

export default StatusIndicator;