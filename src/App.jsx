import React from 'react';
import './App.css';
import { Header, Header2 } from './components/Header.js'

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
  constructor() {
    super()
    this.state = {
      name: "Asif",
      email: "asifahmed1us@hotmail.com"
    }
  }
  getState = () => {
    console.log(this.state.name)
  }

  set_state = (e) => {
    this.setState({
      name: "Asif Ahmed1"
    })
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value,
      
    })
  }

  get_props(props){
    console.log(props)
  }



  render() {
    return (
      <div>
        <Header get_props={this.get_props} name={this.state.name} email={this.state.email}/>
        <Header2 />
        <h2>My name is {this.state.name}</h2>
        <h2>My name is {this.state.email}</h2>
        <input onChange={(e)=>{this.handleChange(e)}} name="name" type="text" placeholder="Name" />
        <input onChange={(e)=>{this.handleChange(e)}} name="email" type="text" placeholder="email" />
        <button onClick={this.getState}>Get State</button>
        <button onClick={this.set_state}>Set State</button>
        
        <Footer />
      </div>
    )
  }
}


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <h3>Footer</h3>
      </div>
    )
  }
}
export default App;
