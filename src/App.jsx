import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Header2} from './component/Header.js'

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

class App extends React.Component{
  render(){
    return(
      <div className="body">
       <Header />
       <h2>
       Hello world      
       </h2>
       <Footer />      
     </div>
    )
  }
}



class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <h3>
          Footer
        </h3>
      </div>
    )
  }
}



export default App;
