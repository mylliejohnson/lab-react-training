import React from 'react'

function Greetings(props){
    function greet(lang){
      let hi = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
      }
      return(
        <div>
          {hi[lang]} {props.name}
        </div>
      )
    }
    return <div className="lang">{greet(props.lang)}</div>
}

export default Greetings