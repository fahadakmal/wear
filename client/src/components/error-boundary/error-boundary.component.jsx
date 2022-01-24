import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './error-boundary.styles'
import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state={
        hasErrored:false
    }
    static getDerivedStateFromError(error) {
        

        //process the state
        return {
            hasErrored:true
        }
    }
    
    componentDidCatch(error,info){
         console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;