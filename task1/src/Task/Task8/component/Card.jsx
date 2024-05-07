import React from 'react'

const Card = () => {

     const randomNumber = Math.floor(Math.random()*100);
     console.log(randomNumber);
     return(
          <>
          <h1>Card Title</h1>
               {Boolean(randomNumber % 2) && <h3  style={{color:"red"}}>This is Odd Number</h3>}
               <p style={{color:"blue"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, magni.
               </p>
          </>
     )
}

export default Card