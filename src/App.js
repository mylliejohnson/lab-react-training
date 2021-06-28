import React from 'react';
import './App.css';
import IdCard from './IdCard.js';
import Greetings from './Greetings.js';
import Random from './Random.js'
import BoxColor from './BoxColor.js'
import CreditCard from './CreditCard';

function App() {
  return (
    // ITERATION 1
    <div>
    <h1>ID Card</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg" 
        />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />   
      
      <h1>Greetings</h1>
      <Greetings lang="de" name="Ludwig" />
      <Greetings lang="fr" name="Francois" />
      
      <h1>Random Number</h1>
      <Random min={1} max={1000}/>
      <Random min={1} max={100}/>

      <h1>Box Color</h1>
      <div>
        <BoxColor r={155} g={210} b={255} />
        <BoxColor r={138} g={150} b={100} />
      </div>

      <div>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="grey"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="light"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="yellow"
        color="white" />
      </div>
</div>

  );
}

export default App;
