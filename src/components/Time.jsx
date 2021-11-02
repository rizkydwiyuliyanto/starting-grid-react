import React from 'react';
import styled from 'styled-components';



class Time extends React.Component {
    constructor(props){
        super(props);
    }
   
    render (){

        return (
            <Parent>
                <p style={!this.props.Start?{color:"#e60000"}:{color:"black"}}>{this.props.children}</p>
            </Parent>
        )
    }
}
const Parent = styled.div `
      height: 50%;
      border: unset;
      color: black;
      p {
          font-size: 2.5rem;
          font-weight: 300;
         
          span {
              font-size: 2rem;
          }
      }
`

export default Time;