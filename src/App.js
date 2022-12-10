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
        <h1> API Display </h1> <br></br> 
        <div className="group">{
          items.map((item) => (
            <div className="container">
              <ul key={item.id} >
                <p> User_Name: {item.username} </p>
                <p>Full_Name: {item.name}</p>
                <p>User_Email: {item.email} </p>
                <br></br>
              </ul>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;