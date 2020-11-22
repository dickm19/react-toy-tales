import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
  }

  likeToy = () => {
    const newLikes = this.state.likes + 1
    this.props.likeToy(this.props.toy.id, newLikes)
    return this.setState({
      likes: newLikes
    })
  }

  donateToy = () => {
    return this.props.donateToy(this.props.toy)
  }

  render() {
    const toy = this.props.toy
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button onClick={this.likeToy} className="like-btn">Like {'💕'}</button>
        <button onClick={this.donateToy} className="del-btn">Donate to GoodWill 🥺</button>
      </div>
    );
  }

}

export default ToyCard;
