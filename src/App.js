import React from 'react';
import ShowWeather from './ShowWeather';
import Spinner from './Spinner';



class App extends React.Component{
    
    state = {lat:null, errmessage: ''}
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}), 
            err => this.setState({errmessage:err.message})
        );
    }
    renderComponent(){
        if(this.state.errmessage && !this.state.lat){
            return (
                <div>
                     <h2 className="ui inverted red button">Error Message: {this.state.errmessage}</h2>
                </div>
            )
        }else if(this.state.lat && !this.state.errmessage){
            
             return(
                <div>
                    <ShowWeather lat={this.state.lat}/>
                </div>
            )
        }
        else{
            return(
                <Spinner message="Please allow location request" />
            )
        }
    }
    render(){
        
        return(
            <div>{this.renderComponent()}</div>
        )
        
       
    }
}

export default App