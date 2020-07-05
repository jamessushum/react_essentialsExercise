import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1},
      { name: 'Yoshi', age: 20, belt: 'green', id: 2},
      { name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }
  // using spread operator ... to make carbon copy of ninjas array in state so we can add the newNinja object without altering the original state
  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let newNinjasArray = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas: newNinjasArray
    })
  }
  // using filter array method so it wont be destructive to the original state, if return evaluates to false then object wont be included in new array
  deleteNinja = (id) => {
    let newArrayOfNinjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: newArrayOfNinjas
    })
  }
  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log(prevProps, prevState)
  }
  // passing in props (properties) ex. this.state.ninjas & this.addNinja to child components so they can be used 
  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas } />
        <AddNinja addNinja={ this.addNinja } />
      </div>
    )
  }
}

export default App;
