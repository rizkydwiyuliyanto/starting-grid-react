import React from 'react';
import styled from 'styled-components';

class Lights extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const styled = {
            redLight:(x) => {
                let color="";
                if (x == 1){
                    color = "red"
                }else if (x == 2){
                    color = "red";
                }else if (x == 3) {
                    color = "red";
                }else if (x == 4){
                    color = "red"
                }else if (x == 5){
                    color = "red";
                }
                return color
            },
            greenLight:()=> {
                let color = "grey";
                return color;
            }
        }
        
        return (
            <Light 
                style={this.props.Start?{background:styled.redLight(this.props.Color)}:{background: styled.greenLight()}}
            />
        )
    }
}
const Light = styled.div `
    width: 50px;
    height: 50px;
    border-radius: 50%;
     background: grey;
    margin:0.5em 0;
`

export default Lights;