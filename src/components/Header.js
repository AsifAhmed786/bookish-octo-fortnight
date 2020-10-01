import React from 'react'

class Header extends React.Component{
    render(){
        return(
        <div>
        <h1 className="header">Header {this.props.name} email {this.props.email}</h1>
        <button onClick={()=>this.props.receiveProps("Sylani")}>Get Props</button>
        </div>
        )
    }
}


class Header2 extends React.Component{
    render(){
        return(
        <h1>Header2 </h1>

        )
    }
}

export{
    Header,
    Header2
}