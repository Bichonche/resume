import React, { Component } from 'react';
import Entry from "../Entry/Entry";

import json from '../../data/entries.json';

class Contact extends Component {
    render() {
        return (
            <div className="five columns">
                <h2>Contact</h2>
                <ul>
                    {json.contact.map(c => <li>{c.type} : {c.value}</li>)}
                </ul>
            </div>
        );
    }
}

export default Contact;
