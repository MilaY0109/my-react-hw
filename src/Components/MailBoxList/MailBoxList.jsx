//import React from 'react'    //rafce
import css from './MailBoxList.module.css';
import MailBoxListItem from '../MailBoxListItem/MailBoxListItem';


const MailBoxList = ({ boxUsers }) => {
    return (
        <ul className={css.mailboxList}>
            {boxUsers.map(user => {
                return (
                    <MailBoxListItem user={user} key={user.id} />
                    //   <li key={user.id}>Email: {user.userMail}</li>
                )
            })}
              
            
        </ul>
    );
};

export default MailBoxList