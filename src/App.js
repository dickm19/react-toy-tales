import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import { isCompositeComponent } from 'react-dom/test-utils';


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    return fetch("http://localhost:3000/toys").then(resp=>resp.json()).then(toys => this.setState({
      toys: toys
    }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleFormSubmit = (e) => {
    let toysArray = [...this.state.toys]
    fetch("http://localhost:3000/toys", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        name: e.name.value,
        image: e.image.value,
        likes: 0
      })
    }).then(resp=>resp.json()).then( toy => {
      toysArray.push(toy)
      this.setState({
      toys: toysArray
    })
  })
  
  }

  donateToy = (toy) => {
    let newToysArr = [...this.state.toys]
    const index = newToysArr.indexOf(toy)
    newToysArr.splice(index)
    this.setState({
      toys: newToysArr
    })
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: 'DELETE'
    }).then(resp => resp.json())
  }
  

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleFormSubmit={this.handleFormSubmit}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer  donateToy={this.donateToy} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
