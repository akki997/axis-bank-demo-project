import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                 <header>
        <nav  className="navbar navbar-expand-lg fixed-top navbar-light" style={{ 'background-color': 'rgb(117, 6, 58)'}}>
                        <div><a style={{'color': 'white'}} href="/home" className="navbar-brand">Bank Of People</a>
                             
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;