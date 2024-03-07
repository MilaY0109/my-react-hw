import './App.css'
import MailBox from './Components/MailBox'

const meestExpress = [
  { id: "1", userMail: "hary@mail.com" },
  { id: "2", userMail: "mary@mail.com" },
  { id: "3", userMail: "top@mail.com" }
];

const novaPoshta = [
  { id: "11", userMail: "fill@mail.com" },
  { id: "22", userMail: "caroll@mail.com" },
  { id: "33", userMail: "kate@mail.com" }
];

const ukrPoshta = [
  { id: "111", userMail: "gary@mail.com" },
  { id: "222", userMail: "1link@mail.com" },
  { id: "333", userMail: "1246red@mail.com" }
];

function App() {
  return (
    <>
     
      <MailBox boxUsers={meestExpress} boxTitle="Meest Express" boxActiveAmount={3} />
      <MailBox boxUsers={novaPoshta}  boxTitle="NovaPoshta" boxActiveAmount={5} />
      <MailBox boxUsers={ukrPoshta}  boxTitle="UkrPoshta" />
    </>
  )
}

export default App