import React from 'react'

const MailBoxListItem = ({user}) => {
  return (
   <li>Email: {user.userMail}</li>
  )
}

export default MailBoxListItem