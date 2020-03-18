import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            Error : false
        }
    }

    componentDidCatch(){
        this.setState({Error: true});
    }

    render(){
        
        if(this.state.Error){
            return <h1> OOOOOOPS this is bad</h1>
        }

        else{
            return this.props.children;
        }
    }

}

export default ErrorBoundary;