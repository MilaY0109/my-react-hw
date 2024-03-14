

// const MailBox = ({boxUsers, boxTitle, boxActiveAmount = 0 }) => {
//   return (
//       <div>
//           <h2>{boxTitle}</h2>
//           {boxActiveAmount === 0 ? (
//               <p>
//                   <b>Sorry, there are no active boxes</b>
//               </p>
              
//           ) : (
//              <p>Amount of Active Boxes: {boxActiveAmount}</p> 
//           )}
//           <ul>
//                {boxUsers.map(user => {
//                  return (
//                       <li key={user.id}>Email: {user.userMail}</li>
//                   )
//               })} 
              
//               {/* {boxUsers.map(({id, userMail }) => {
//                   return (
//                       <li key={id}>{userMail}</li>
//                   )
//               })} */}


//           </ul>
//     </div>
//   )
// }

// export default MailBox


////// INLINE Styles //////
// const MailBox = ({ boxUsers, boxTitle, boxActiveAmount = 0 }) => {
    
//     const stylesObj = {
//         border: "1px solid black",
//         padding: 20,
//         borderRadius: "10px",
//         //backgroundColor: "rgba(0, 0, 0, 0.04)",
//         backgroundColor: boxActiveAmount === 0 ?  "rgba(255, 0, 51, 0.08)" :  "rgba(0, 0, 0, 0.04)",
//     lineHeight: 1.50,
// }

//   return (
//       <div style={stylesObj}>
//           <h2 className="mailboxTitle">{boxTitle}</h2>
//           {boxActiveAmount === 0 ? (
//               <p>
//                   <b>Sorry, there are no active boxes</b>
//               </p>
              
//           ) : (
//              <p>Amount of Active Boxes: {boxActiveAmount}</p> 
//           )}
//           <ul>
//                {boxUsers.map(user => {
//                  return (
//                       <li key={user.id}>Email: {user.userMail}</li>
//                   )
//               })} 
              
             


//           </ul>
//     </div>
//   )
// }

// export default MailBox

//////////////////////////////////////////////////

/// Styles VANILLA in MailBox.css

//import './MailBox.css'  //For Vanilla

//For MODULE CSS
 import clsx from "clsx"; 
import css from "./MailBox.module.css";
import MailBoxList from "../MailBoxList/MailBoxList";

const MailBox = ({ boxUsers, boxTitle, boxActiveAmount = 0 }) => {
    const isMailBoxIsFull = boxActiveAmount === 0;
    
    // const classes = [css.mailbox]
    //  if (isMailBoxIsFull) {
    //     classes.push(css.full);
    // }  для варианта без clcx

  return (
      //<div className={classes.join(' ')}>  для варианта без clcx

// использование clsx
      <div className={clsx(css.mailbox, {
          [css.full]: isMailBoxIsFull,
      })}
      >
          <h2 className={css.mailboxTitle}>{boxTitle}</h2>
          {isMailBoxIsFull ? (
              <p>
                  <b>Sorry, there are no active boxes</b>
              </p>
              
          ) : (
             <p>Amount of Active Boxes: {boxActiveAmount}</p> 
          )}

          {/* <ul className={css.mailboxList}>
               {boxUsers.map(user => {
                 return (
                      <li key={user.id}>Email: {user.userMail}</li>
                  )
              })} 
              
            
          </ul> */}  
          
          <MailBoxList boxUsers={boxUsers} />
    </div>
  )
}

export default MailBox