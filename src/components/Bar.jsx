import React from 'react';
import styled from 'styled-components';

class Bar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Bars>a</Bars>
        )
    }
}

const Bars = styled.div `
    width: 100%;
    position: absolute;
    height: 20px;
    z-index: 0;
    top: 60%;
    transfrom: translate(-50%, -50%);
    background-color:#0f0f0a;
`

export default Bar;