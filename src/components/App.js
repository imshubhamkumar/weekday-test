/* eslint-disable react/prefer-stateless-function */
import React from "react";
import styled from "styled-components";
import Routes from "../routes/Routes";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

class App extends React.Component {
  componentDidMount() {}

  render() {
    return <Container>{Routes()}</Container>;
  }
}

export default App;
