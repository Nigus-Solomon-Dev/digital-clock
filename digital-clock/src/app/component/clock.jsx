'use client'

import { useState,useEffect } from "react"
{console.log('i am in')}
export default function Clock(){
  console.log('i am in');
  
  const[time,setTime]=useState(new Date)
useEffect(()=>{
  const timer=setInterval(()=>{
 setTime(new Date());
  },1000);
 
  return ()=>clearInterval(timer);
},[]);
const formatTime=(data)=>{
  let hours=data.getHours();
  let minutes=data.getMinutes();
  let seconds=data.getSeconds();
  const ampm=hours>=12?'pm':'am';


  //converting the hour 
  hours=hours%12;
  hours=hours ?hours:12

  //adding a leading zero
  const formattedHours=String(hours).padStart(2,'0');
  const formattedMinute=String(minutes).padStart(2,'0');
  const formattedSecond=String(seconds).padStart(2,'0');
  return `${formattedHours}:${formattedMinute}:${formattedSecond} ${ampm}`;
}
const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-8 rounded-2xl bg-gray-800 shadow-2xl border border-gray-700">
        <div className="text-7xl font-mono font-bold text-blue-400 tracking-wider">
           {formatTime(time)}
        </div>
        <div className="text-2xl text-gray-400 mt-4">
          {formatDate(time)}
        </div>
      </div>
    </div>
  );




}