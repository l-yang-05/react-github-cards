import React from 'react';
import './App.css';
import Form from './Form.js';
import CardList from './CardList.js';


class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        profiles: []
      };
  }  
  addNewProfileData = (profileData) => {
    this.setState(prevState => ({profiles: [...prevState.profiles, profileData],
    }));
    console.log('App', profileData);
  }
  render(){
    return (
    <div>
      <div className="header">{this.props.title}</div>
      <Form onSubmit={this.addNewProfileData} />
      <CardList profiles={this.state.profiles} />
    </div>
    )
  }
}

export default App;




