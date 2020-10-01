import React from 'react';
import './App.css';
import {Header, Header2} from './components/Header'


// function App() {
//   return (
//     <div className="body">
//       <Header />
//       <h2>
//       Hello world      
//       </h2>
//       <Footer />

//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "Asif",
      email: "asifahmed1us@hotmail.com"
    }
  }
  get_state = ()=>{
    console.log(this.state.name)
  }

  set_state = ()=>{
    this.setState({
      name: "Asif Ahmed"
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]:  e.target.value
    })
  }

  receiveProps(props){
    console.log(props)
  }


  render(){
    return(
      <div>
        <Header name={this.state.name} email={this.state.email} receiveProps={this.receiveProps}/>
      <h1>My Name is {this.state.name}</h1>
      <h1>Email is {this.state.email}</h1>
      <input type="text" onChange={(e)=> this.handleChange(e)} name="name" placeholder="name" id=""/>
      <input type="text" onChange={(e)=> this.handleChange(e)} name="email" placeholder="email" id=""/>
      <button onClick={this.get_state}>Get Data</button>
      <button onClick={this.set_state}>Set Data</button>
      
        <Footer />
      </div>
      
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <h3 className="footer">Footer</h3>
    )
  }
}

export default App;
