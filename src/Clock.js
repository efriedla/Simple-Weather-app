import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    state = {time: console.log(this.time)}
    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString() })     
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                <h3> {this.state.time}</h3>
            </div>
        );
    }
}

export default Clock;
