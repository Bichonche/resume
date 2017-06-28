import React, { Component } from 'react';
import Entry from "../Entry/Entry";

import json from '../../data/entries.json';

class Contact extends Component {
    render() {
        return (
            <div className="seven columns">
                <h2>A propos</h2>
                {json.about}
            </div>
        );
    }
}

export default Contact;
