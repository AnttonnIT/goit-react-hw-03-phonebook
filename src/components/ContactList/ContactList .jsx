import { List, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}{' '}
            <Button
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
