import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import s from './form.module.css';

export default function Form({ addValidContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = () => {
    addValidContacts({ name, number, id: nanoid(5) });
    removeState();
  };

  const removeState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label>
        <p className={s.text}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <p className={s.text}>Number</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
      </label>
      <button className={s.button} type="sabmit">
        add contact
        <span>
          <BsFillArrowRightSquareFill />
        </span>
      </button>
    </form>
  );
}

Form.propTypes = { addValidContacts: PropTypes.func.isRequired };
