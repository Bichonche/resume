import React, { Component } from 'react';
import {markdown} from 'markdown';
class Technologies extends Component {

    technologies = this.props.technologies;
    render() {
        return (
            <div className="row">
                <h2>Technologies</h2>
                <ul className="two-columns">
                    {this.props.technologies.map(e => <li>{markdown.toHTML(e)}</li>)}
                </ul>
            </div>
        );
    }
}

export default Technologies
