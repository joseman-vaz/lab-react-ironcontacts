import "./App.css";
import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const moreContacts = contactsData.slice(5);
  const addRandomContact = () => {
    if (moreContacts.length > 0) {
      const randomItem = Math.floor(Math.random() * moreContacts.length);
      const randomContact = moreContacts[randomItem];
      setContacts((previousContacts) => [...previousContacts, randomContact]);
    }
  };

  const sortPopularity = () => {
    const copyContacts = [...contacts];
    copyContacts.sort((cont1, cont2) =>
      cont1.popularity > cont2.popularity ? -1 : 1
    );
    setContacts(copyContacts);
  };
  const sortName = () => {
    const copyContacts = [...contacts];
    copyContacts.sort((cont1, cont2) => (cont1.name > cont2.name ? 1 : -1));
    setContacts(copyContacts);
  };

  const deleteContact = (item) => {
    const copyContacts = [...contacts];
    copyContacts.splice(item, 1);
    setContacts(copyContacts);
  };

  return (
    <div className="App">
      <div className="table-container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th colSpan="6">
                <h1>IronContacts</h1>
              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <button className="btn btn-primary" onClick={addRandomContact}>
                  Add Random Contacts
                </button>
              </th>
              <th colSpan="2">
                <button className="btn btn-primary" onClick={sortPopularity}>
                  Sort by Popularity
                </button>
              </th>
              <th colSpan="2">
                <button className="btn btn-primary" onClick={sortName}>
                  Sort by Name
                </button>
              </th>
            </tr>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Delete the star!</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : null}</td>
                <td>{contact.wonEmmy ? "⭐" : null}</td>
                <td>
                  <button class="btn btn-danger" onClick={deleteContact}>
                    Finish career!
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
