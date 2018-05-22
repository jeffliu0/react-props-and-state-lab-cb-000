import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleAdoptPet = () => this.props.onAdoptPet(this.props.pet.id)

  render() {
    const {pet: {name, type, gender, age, weight}, isAdopted } = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type</span>
          </div>
          <div className="description">
            <p>{age} </p>
            <p>{weight} </p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
