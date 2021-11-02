import React from 'react';
import styled from 'styled-components';

class Board extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BoardParent>
                {this.props.children}
            </BoardParent>
        )
    }
}
const BoardParent = styled.div `
  background-color: #0f0f0a;
  padding:0 1em;
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  position: static;
  z-index: 10;
`
export default Board;