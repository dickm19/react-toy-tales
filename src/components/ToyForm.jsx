import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: ''
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value,
   
    })
  }

  handleFormSubmit = (e) => {
    e.persist()
    e.preventDefault()
    this.props.handleFormSubmit(e.target)
    this.setState({
      name: '',
      image: ''
    })
  }
  

  render() {
    return (
      <div onSubmit={this.handleFormSubmit} className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name}/>
          <br/>
          <input type="text" onChange={this.handleChange} name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
