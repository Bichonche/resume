import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
            <div className="seven columns">
                <h2>A propos</h2>
                {this.props.about}
            </div>
        );
    }
}

export default Contact;
