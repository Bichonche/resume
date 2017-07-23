import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="five columns">
                <h2>Contact</h2>
                <ul>
                    {this.props.contact.map(c => <li>{c.type} : {c.value}</li>)}
                </ul>
            </div>
        );
    }
}

export default Contact;
