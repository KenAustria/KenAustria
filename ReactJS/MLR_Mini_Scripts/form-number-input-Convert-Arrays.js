// filename: form-number-input-Convert-Arrays.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { charactersArray: [], numberMaxArray: [], numberValue: 0 };
  //------------------------------------------------------------------------------------------
  containerStyle = {
    maxWidth: "340px",
    minHeight: "268px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  textInputStyle = {
    width: "80%",
    marginBottom: "6px",
    textAlign: "center",
    outline: "none"
  };
  feedbackStyle = { marginBottom: "6px" };
  numberInputStyle = {
    width: "20%",
    marginBottom: "6px",
    textAlign: "center",
    outline: "none"
  };
  //------------------------------------------------------------------------------------------
  alterCharactersHandler = event => {
    const updatedCharactersArray = []; // this resets the array each time.
    updatedCharactersArray.push(event.target.value); // update the character input.
    //--------------------------------------------------------------------------------------
    let numberMaxArray = []; // this helps to set the max attribute of the number input.
    if (updatedCharactersArray.length !== 0) {
      // if the text field is empty (prevent error).
      numberMaxArray = updatedCharactersArray[0].split("");
    }
    //--------------------------------------------------------------------------------------
    this.setState({
      charactersArray: updatedCharactersArray,
      numberMaxArray: numberMaxArray
    }); // above: set the maximum number the user can enter.
    // this number must be = or < the number of user entered characters.
  };
  numberInputHandler = event => {
    this.setState({ numberValue: event.target.value });
  };
  // set the user entered number.
  deleteCharacterHandler = () => {
    const filteredCharacterArray = this.state.numberMaxArray.filter(
      (currentCharacter, index) => index !== +this.state.numberValue - 1
    ); // above: each character is an array item.
    const joinedCharacterArray = [filteredCharacterArray.join("")];
    // above: this recreates the original format; one (combined) string inside an array.
    this.setState({
      charactersArray: joinedCharacterArray,
      numberMaxArray: filteredCharacterArray
    });
  };
  render() {
    return (
      <div style={this.containerStyle}>
        <div>
          Enter characters.<br />
          Choose the character # to delete.<hr />
        </div>
        <input
          type="text"
          value={this.state.charactersArray.join()}
          placeholder="Enter characters"
          onChange={event => this.alterCharactersHandler(event)}
          style={this.textInputStyle}
        />
        <div>
          {this.state.charactersArray.join("") || (
            <div style={this.feedbackStyle}>Waiting...</div>
          )}
        </div>
        <div>
          <input
            type="number"
            value={this.state.numberValue}
            min="1"
            max={this.state.numberMaxArray.length}
            onChange={this.numberInputHandler}
            style={this.numberInputStyle}
          />
        </div>
        <div>
          {this.state.numberValue <= this.state.numberMaxArray.length ? (
            <div style={this.feedbackStyle}>Status: good</div>
          ) : (
            <div style={this.feedbackStyle}>Your number is too high</div>
          )}
        </div>
        <button onClick={this.deleteCharacterHandler}>
          Delete a character
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
