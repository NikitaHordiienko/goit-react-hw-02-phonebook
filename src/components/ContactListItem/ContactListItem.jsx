import React from "react";
import css from './ContactListItem.module.css';
import { FaUserAlt, FaUserMinus } from 'react-icons/fa';

const ContactListItem = ({ contact, onDeleteContact }) => {
    return (
        <li className={css.item} key={contact.id} >
            <FaUserAlt />
            <p className={css.text}>{contact.name}:</p>
            <a className={css.phone} href={"tell:" + contact.number}>{contact.number}</a>
            <button
                className={css.button}
                type="button"
                onClick={() => onDeleteContact(contact.id)}
            >Delete <FaUserMinus /></button>
        </li>
    )
}

export default ContactListItem;