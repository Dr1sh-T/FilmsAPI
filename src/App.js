import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      DataIsLoaded: false
    }

  }

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>  {
          items.map((item) => (
            <ul key={item.id} >
              <li> User_Name: {item.username} </li>
              <li>Full_Name: {item.name}</li>
              <li>User_Email: {item.email} </li>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default App;