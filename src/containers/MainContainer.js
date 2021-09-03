import React from "react";
import "../css/styles.scss";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import Sidebar from "react-sidebar";
import Candidates from "./candidates";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
      <Navbar/>
      <div className="main-container">
        <Sidebar/>
        <Candidates/>
      </div>
      </>
    );
  }
}

MainContainer.propTypes = {
  modal: PropTypes.element,
};

export default MainContainer;
