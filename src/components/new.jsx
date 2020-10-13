import React, { Component } from "react";

class NewCode extends Component {
  //so we set this.handleclick i.e the first "this" is a global one, to bind the object that has this constructor
  //this is because we are trying to give the handleclick fxn access to count.
  //do not be deceived an easier way of doing this, is using arrow function to define the handleClick function
  //the question now is what if we use arrow function, but we have more than one class or object....????
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    count: 1,

    stylez: {
      fontSize: 100,
      fontWeight: "bold",
    },

    styler: {
      fontSize: 50,
      fontWeight: "normal",
    },

    test: ["amaka", "nnem", "odilo"],
    food: ["rice", "beans", "veggies"],
  };
  /* i initially defined this function inside the state, that gave the error that this.awesome isnt defined*/
  handleClick() {
    // console.log("clicked!", this);
    //setState tells react that we are updating the state
    //first itried using count++, it....
    this.setState({ count: this.state.count + 1 });
  }

  formatCount() {
    const count = this.state;
    return count === 0 ? <h1>zero</h1> : count;
  }

  awesome() {
    if (this.state.food.length === 0) return <p>food no dey!</p>;
    return (
      <ul>
        {this.state.food.map((eat) => (
          <li>{eat}</li>
        ))}
      </ul>
    );
  }

  render() {
    let { stylez, styler, count } = this.state;
    let classes = count === 0 ? stylez : styler;
    return (
      <div>
        <span style={classes}>{this.formatCount()}</span>;
        {/* note in the onclick below we didnt add "()",  because we are not calling the function, just the reference to it */}
        <button onClick={this.handleClick}> click me </button>;
        <ul>
          {this.state.test.map((names) => (
            <li key={names}> {names} </li>
          ))}
        </ul>
        )
        {/* the code on line 45 works on the principle that the and operator
        will return the last operand if it cant find a falsy operand*/}
        {this.state.food.length === 0 && "oga abeg do something"};
        {this.awesome()}
      </div>
    );
  }
}

export default NewCode;
