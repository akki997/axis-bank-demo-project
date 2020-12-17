import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
    }
    render() {
        return (
            <div>
                <nav  className="navbar navbar-expand-lg fixed-bottom navbar-light" style={{ 'background-color': 'rgb(117, 6, 58)'}}>
                <div style={{'color': 'white'}} className="text-center">All Rights Reserved 2020 @akshayKumar</div>


                    </nav>
            </div>
        );
    }
}

export default FooterComponent;