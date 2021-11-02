import React from 'react';
import styled from 'styled-components';

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Parent>
                {this.props.children}
            </Parent>
        )
    }
}
const Parent = styled.div `
    width: 50%;
    text-align: center;
    height: auto;
    border: unset;
    
`
export default Header;