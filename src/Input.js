import React from 'react';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.getState = this.getState.bind(this);
    }

  myInput = React.createRef();


  getState (event)  {
    this.setState({value: event.target.value});
    console.log(this.state.value);

  //1. Stop the form from submitting
    //event.preventDefault();
  // 2. get the text from that input
  ///this.setState({value: event.target.value});
}


  render() {
    return (


        <form className="store-selector" >
              <input type="text"
                ref={this.myInput}
                onChange={this.getState}
                value={this.state.value}
                required
                placeholder="Store Name"//onChange={this.myInput}
                />
              <button type="submit"> Click</button>
       </form>


    );
  }
}

export default Input;
