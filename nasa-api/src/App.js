import React, {Component} from 'react'
import axios from 'axios'

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'


class App extends Component {
  constructor(props){
    super(props); //propiedades
    this.state={
      inputText: '',
      outpuText: ''
    };
    this.textChanged = this.textChanged.bind(this); // referencia el this
 }



   textChanged(event){ //actualiza los campos cada que se llame el evento
     var userName = event.target.value;
     this.setState({inputText: userName});
     this.setState({outpuText: userName});
   }

 	render(){ //aqui va todo lo referente a la vista
     return (
       <div>
         <input type="text" onChange={this.textChanged}></input>
         <br/>
         <br/>
         <label>Hola {this.state.inputText}</label>
       </div>
     )
   }

 }

 export default App;

class Nasa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: ''
    }
    this.getImage = this.getImage.bind(this)
  }

  getImage(event){
    var self = this
    axios.get(url)
    .then(function (response) {
      console.log("img url: ", response.data.url);
      self.setState({imgUrl: response.data.url});
    })
    .catch(function (error) {
      console.log(error);
    })
    // this.setStatus({title: gotData.title})
  }

  render() {
    return (
      <div>
        <img src={this.state.imgUrl}/>
        <br/>
        <button onClick={this.getImage}>PUSH ME</button>
      </div>
    )
  }
}

export { App, Nasa }