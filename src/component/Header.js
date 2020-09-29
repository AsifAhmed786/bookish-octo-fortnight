import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h1>
                Header
                </h1>
            </div>
        )
    }
}

class Header2 extends React.Component{
    render(){
        return(
            <div>
                Body Header
            </div>
            
        )
    }
}



// export default Header
export{
    Header,
    Header2
}