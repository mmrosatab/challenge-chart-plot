import React, { Component } from "react";

class TextAreaContainer extends Component {
  render() {
    return (
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default TextAreaContainer;
