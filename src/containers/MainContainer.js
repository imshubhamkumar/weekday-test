import React from "react";
import "../css/styles.scss";
import PropTypes from "prop-types";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <section
        id="main-container"
        className="main-section-without-bg"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div className="main-outer">Hello!!</div>
      </section>
    );
  }
}

MainContainer.propTypes = {
  modal: PropTypes.element,
};

export default MainContainer;
