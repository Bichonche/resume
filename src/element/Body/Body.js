import React, { Component } from 'react';
import About from '../../element/About/About';
import Contact from '../../element/Contact/Contact';
import Entries from '../../element/Entries/Entries';


class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <About/>
                <Contact/>
                </div>
                <hr/>
                <div className="row">
                    <Entries data={this.props.data.entries}/>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Body;
