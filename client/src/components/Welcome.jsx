import React from 'react'

export default function Welcome (){
 const date = new Date ()
 const hours = date.getHours()
 let timeOfDay

 if (hours <12) {
     timeOfDay = "morning! ☕️ "
 }else if (hours >= 12 && hours < 17) {
     console.log(hours)
     timeOfDay = "afternoon! 👋 "
 }else {
     timeOfDay = "evening! 🌚 "
 }
  return(
<h1 className ="header">Good {timeOfDay}</h1>
  )
  
}