import { AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts-action';
import { useEffect } from 'react';
import s from './contactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter.toLowerCase());

  useEffect(() => {
    window.localStorage.setItem(
      'contactsList',
      JSON.stringify(contacts),
    );
  }, [contacts]);

  const filterItems = contacts.filter(el =>
    el.name.toLowerCase().includes(filter),
  );

  return (
    <div>
      <h2>Contacts:</h2>
      <ul>
        {filterItems.map((el, inx) => {
          const numberEl = inx + 1;
          const { name, number, id } = el;
          return (
            <li key={id} className={s.item}>
              <span className={s.number}>{numberEl}</span>
              <span>
                <b className={s.text}>name:</b> {name}{' '}
              </span>
              <span>
                <b className={s.text}>tel:</b>
                {number}
              </span>
              <button
                className={s.button}
                type="button"
                onClick={() => dispatch(removeContacts(el.id))}
              >
                <AiFillDelete />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ContactsList.propTypes = {
//   removeContacs: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };
