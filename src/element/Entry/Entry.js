import React, { Component } from 'react';
class Entry extends Component {
    render() {
        return (
            <li className="timeline-item">
                <div className="timeline-info">
                    <span>{this.props.entry.date}</span>
                </div>
                <div className="timeline-marker"/>
                <div className="timeline-content">
                    <h3 className="timeline-title"><strong>{this.props.entry.name}</strong>, {this.props.entry.short}</h3>
                    <p>{this.props.entry.long}</p>
                </div>
            </li>
        );
    }
}

export default Entry;
