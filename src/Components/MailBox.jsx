

const MailBox = ({boxUsers, boxTitle, boxActiveAmount = 0 }) => {
  return (
      <div>
          <h2>{boxTitle}</h2>
          {boxActiveAmount === 0 ? (
              <p>
                  <b>Sorry, there are no active boxes</b>
              </p>
              
          ) : (
             <p>Amount of Active Boxes: {boxActiveAmount}</p> 
          )}
          <ul>
               {boxUsers.map(user => {
                 return (
                      <li key={user.id}>Email: {user.userMail}</li>
                  )
              })} 
              
              {/* {boxUsers.map(({id, userMail }) => {
                  return (
                      <li key={id}>{userMail}</li>
                  )
              })} */}


          </ul>
    </div>
  )
}

export default MailBox