import React from 'react';
import styled from 'styled-components';

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            this.props.start?<Btn onClick={() => {this.props.e()}}>Stop</Btn>:<Btn disabled="disabled" onClick={() => {this.props.e()}}>Stop</Btn>
        )
    }
}

const Btn = styled.button `
     width: 50%;
     border: none;outline: none;
     padding: 0.5em;
     color: white;
     background: grey;
     :hover {
         background: blue;
     }
     :disabled {
         background: grey;
         :hover {
             background: grey;
         }
     }
`