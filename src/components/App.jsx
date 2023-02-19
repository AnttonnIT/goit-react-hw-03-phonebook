import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container } from './App.styled';
import { save, load } from 'utils/local-storage-api';

const LOCAL_STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = load(LOCAL_STORAGE_KEY) || [];

    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      save(LOCAL_STORAGE_KEY, this.state.contacts);
    }
  }

  formSubmitHandle = data => {
    const isInContacts = this.state.contacts.find(
      ({ name }) => name === data.name
    );
    if (isInContacts) {
      return alert(`${data.name} is aready in contacts.`);
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    const regExp = new RegExp(filter, 'gi');
    return contacts.filter(({ name }) => name.match(regExp));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandle}></Form>

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange}></Filter>
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}
