function Rating(props){
   let rate = Math.round(props.children)
   let stars = ''

   for (let i = 0; i <5; i++){
       if(i<=rate){
           stars += '★'
       } else {
           stars += '☆'
       }
   }
   return (
       <div>{stars}</div>
   )
}

export default Rating