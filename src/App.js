import React from 'react';

class App extends React.Component {




  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.changeColor = this.changeColor.bind(this);
      this.state = {
        isLoaded: false,
        items1: ''
    };
    this.stateTwo = {
      isLoaded: false,
      items2: ''
  };



    }

  myInput = React.createRef();

  componentDidMount(){

    fetch('http://www.colr.org/json/color/random')
        .then(res=>res.json())
        .then(json=>{
          this.setState({
            isLoaded: true,
            items1:json,
          })
          //console.log(this.state.items.colors[0].hex)
        //  let randomOne =this.state.items.colors[0].hex;
      //  console.log(this.state)

        })

        fetch('http://www.colr.org/json/color/random')
            .then(res=>res.json())
            .then(json=>{
              this.setState({
                isLoaded: true,
                items2:json,
              })


            })


  }

  getState = (event) => {
    this.setState({value: event.target.value});
    console.log(this.state.value);
    //console.log(this.state.items.colors[0].hex)
    //console.log(this.state.items2.colors[0].hex)


}



changeColor = (event) => {
  const randomOne =`#${this.state.items1.colors[0].hex}`;
  const randomTwo =`#${this.state.items2.colors[0].hex}`;
  console.log(randomOne)
  console.log(randomTwo)
  this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

    if (this.state.isToggleOn) {this.setState({bColor:"black"})}
    if (!this.state.isToggleOn) {
      if (Math.random()>0.5) {this.setState({bColor:randomOne})}
      else {this.setState({bColor:randomTwo})}
    }


}


  render() {

    return (


        <form className="store-selector" >
        <div style={{backgroundColor:this.state.bColor}} onClick={this.changeColor} props="true"> {this.state.value}</div>
              <input type="text"
                ref={this.myInput}
                onChange={this.getState}
                value={this.state.value}
                required
                placeholder="Write something"
                />
        </form>


    );
  }
}

export default App;
