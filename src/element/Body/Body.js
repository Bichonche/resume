import React, { Component } from 'react';
import About from '../../element/About/About';
import Contact from '../../element/Contact/Contact';
import Entries from '../../element/Entries/Entries';
import Technologies from '../../element/Technologies/Technologies';


class Body extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <About about={this.props.json.about}/>
                <Contact contact={this.props.json.contact}/>
                </div>
                <hr/>
                    <Entries entries={this.props.json.entries}/>
                <hr/>
                    <Technologies technologies={this.props.json.technologies}/>
            </div>
        );
    }
}

export default Body;
