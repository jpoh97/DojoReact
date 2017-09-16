import React, {Component} from 'react'

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