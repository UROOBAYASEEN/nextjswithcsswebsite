import React from 'react'
import Header from './components/Header'


import Menu from './components/Menu'
import Special from './components/Special'
import Imagecom from './components/Imagecom'
import Clientreview from './components/Clientreview'
import Footer from './components/Footer'
import Center from './components/Center'



const page = () => {
  return (
    
    <React.Fragment>
      <Header/>
      <Center/>

      {/* <Main/> */}
      <Menu/>
      <Special/>
      <Imagecom/>
      <Clientreview/>
      <Footer/>
    </React.Fragment>
  )
}

export default page