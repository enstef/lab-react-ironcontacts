import React, { Component } from "react"
import "./App.css"
import contacts from "./contacts"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    let firstFive = contacts.slice(0, 5)
    this.setState({
      contacts: firstFive
    })
  }

  addRandom(e) {
    let random = Math.floor(Math.random() * contacts.length)
    let newStateContacts = [...this.state.contacts, contacts[random]]
    
    //find easy solution for adding when unique
    //if (!newStateContacts.includes(newStateContacts[random])) this.addRandom()

    this.setState({
      contacts: newStateContacts
    })
  }
  sortByName(e) {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => a.name > b.name) 
    })
  }
  sortByPopularity(e) {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
    })
  }

  delete(i) {
    // let newStateContacts = [...this.state.contacts]
    // newStateContacts.splice(i, 1)
    this.setState({
      contacts: this.state.contacts.filter((c,j) => j !== i)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={e => this.addRandom(e)}>Add random Actor</button>
        <br />
        <button onClick={e => this.sortByName(e)}>Sort by name</button>
        <button onClick={e => this.sortByPopularity(e)}>Sort by popularity</button>

        <div className="contact">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
          <p>Action</p>
        </div>

        {this.state.contacts.map((contact, i) => (
          <div className="contact" key={i}>
            <img src={contact.pictureUrl} alt="" />
            <p>{contact.name}</p>
            <p>{contact.popularity}</p>
            <button onClick={e => this.delete(i)}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
}

export default App
