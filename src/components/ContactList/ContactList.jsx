import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts?.map(item => (
        <ContactItem item={item} onDelete={onDelete} key={item.id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
