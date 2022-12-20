import './App.css';
import React, { Component } from 'react';  
  
class App extends Component {  
  constructor(props){  
    super(props);  
    this.state = {  
        persons: [
          {
            name: 'Ashley Perez',
            number: '704-463-9383',
            birthDate: '03/10/17'
          },
          {
            name: 'Tom',
            number: '704-463-9383',
            birthDate: '04/20/07'
          },
          {
            name: 'Sarah',
            number: '704-463-9383',
            birthDate: '05/1/02'
          },
          {
            name: 'Kim',
            number: '704-463-9383',
            birthDate: '06/05/01'
          }
        ]
      }  
  }  

  render() {  
    function BasicInfo(props) {
      const people = props.persons.map((person, id) =>
        <div key={id} className="person-container">
          <h2>name: {person.name}</h2>
          <h2>number: {person.number}</h2>
          <h2>birthDate: {person.birthDate}</h2>
        </div>
      );

      return (
        <div>
          {people}
        </div>
      );
    }

    return (  
      <div className="App">  
         <BasicInfo {...this.state}/>
      </div>  
    );  
  }  
}  
export default App;  