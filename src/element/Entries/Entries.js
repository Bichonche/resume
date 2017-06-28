import React, { Component } from 'react';
import Entry from "../Entry/Entry";

class Entries extends Component {
    render() {
        return (
            <div className="row">
                <h2>Curriculum Vit&aelig;</h2>
                <ul className="timeline">
                    {this.props.data.map(e => <Entry entry={e}/>)}
                </ul>
            </div>
        );
    }
}

export default Entries;
