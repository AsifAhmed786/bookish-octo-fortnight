import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h1>Header {this.props.name} {this.props.email}</h1>
                <button onClick={()=>{this.props.get_props("sylani")}}>Get Porps</button>
            </div>
        )
    }
}

class Header2 extends React.Component{
    render(){
        return(
            <div>
                <h4>Header 2</h4>
            </div>
        )
    }
}

export{
    Header,
    Header2
}