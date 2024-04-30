import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const getFilteredContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  }

  return contacts.filter(item => item.name.toLowerCase().includes(filter));
};

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = getFilteredContacts(contacts, filter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem
            contact={contact}
            onContactDelete={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}
