import React, { Component } from "react";
import "./App.css";
import InputComponent from "./InputComponent/InputComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
class App extends Component {
  state = {
    stringList: [],
  };

  changingLengthHandler = (e) => {
    this.setState({
      stringList: e.target.value.split(""),
    });
  };

  deleteCharHandler = (index) => {
    const stringList = [...this.state.stringList];
    stringList.splice(index, 1);
    this.setState({ stringList: stringList });
  };

  render() {
    let charList = this.state.stringList.map((aChar, index) => {
      return (
        <CharComponent
          char={aChar}
          key={index}
          delete={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (= ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (= CharComponent) and style it as an inline
            box (= display: inline-block, padding: 16px, text-align: center,
            margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <InputComponent
          changed={this.changingLengthHandler}
          value={this.state.stringList.join("")}
        />
        <ValidationComponent length={this.state.stringList.length} />
        {charList}
      </div>
    );
  }
}

export default App;
