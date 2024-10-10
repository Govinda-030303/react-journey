import React from 'react'
import Footer from './Footer'
import Profile from './Profile'
import Contact from './Contact'

function MainApp() {
  return (
    <>
        <Profile></Profile>
        <Footer></Footer>
    </>
  )
}

export default MainApp


// put the context provider
// function App() {
//     return (
//       <ContextProvider>
//         <MainApp></MainApp>
//       </ContextProvider>
//     );
//   }