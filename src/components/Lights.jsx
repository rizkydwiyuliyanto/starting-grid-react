import React from 'react';
import styled from 'styled-components';

class Lights extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const styled = {
            color:(x) => {
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
            }
        }
        return (
            <Light style={this.props.Start?{background:styled.color(this.props.Color)}:{background:"#009900"}}>
            
            </Light>
        )
    }
}
const Light = styled.div `
    width: 50px;
    height: 50px;
    border-radius: 50%;
     background: black;
    margin:0.5em 0;
`

export default Lights;