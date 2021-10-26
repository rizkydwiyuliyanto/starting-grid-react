import React from 'react';
import styled from 'styled-components';
 
class Time extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            second : 0,
            second2 : 0,
            miliSecond: 0,
            miliSecond2: 0,
            miliSecond3: 0,
        }
       
    }
    myInterval(){
        this.setState({second: this.state.second+1});
    }
    componentWillMount(){
        if (!this.props.S){
            this.myInterval()
        }
    }
    componentWillUnmount(){
        if (!this.props.S){
            this.myInterval()
        }
    }

    render (){
        console.log(this.props.StartTime)
        return (
            <Parent>
                <p>{this.state.second}</p>
            </Parent>
        )
    }
}
const Parent = styled.div `
      height: 10%;
      border: unset;
      p {
          font-size: 2rem;
      }
`

export default Time;