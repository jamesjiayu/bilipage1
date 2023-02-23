import React from 'react'
import FirstSection from './sections/firstSection'
import SecondSection from './sections/secondSection'
import ThirdSection from './sections/thirdSection'
import style from './style.module.css'
function App() {
  return (
    <div className={style.app}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default App
