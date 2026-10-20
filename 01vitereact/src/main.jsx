import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
 //<React.StrictMode>//ye line nhi bhi likhi to chalega but ye line likhne se app ke andar jitne bhi component hai unka error check hota hai aur error aata hai to console me show hota hai


// const reactElement =  {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children:'Click me to go to Googles'
// }

//upper vala nhi paass kr sakte kyuki ye hmne banaya hhai
//nichi vala react ke according banaya hai vha jo pattern hai uske hisab se 

const username = 'Chai';

const reactElement = React.createElement(
  'a',
   { href: 'https://www.google.com', target: '_blank' },
   'Click me to go to Googles',
  username
  );
   



ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
 
)
