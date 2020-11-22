import React, {Component} from 'react';
import ToyCard from './ToyCard'

class  ToyContainer extends Component {

  likeToy = (id, newLikes) => {
    return fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({likes: newLikes})
    }).then(resp=>resp.json())
  }

  donateToy = (toy) => {
    this.props.donateToy(toy)
  }

  renderToys = () => {
   return  this.props.toys.map(toyObj => <ToyCard donateToy={this.donateToy} likeToy={this.likeToy} key={toyObj.id} toy={toyObj}/>)
  }
  render(){
    return(
      <div id="toy-collection">
        {this.renderToys()}
      </div>
    );
  }
}

export default ToyContainer;
