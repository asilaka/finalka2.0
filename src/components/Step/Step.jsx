import React from 'react'
import s from './Step.module.scss'
const Step = () => {
  return (
  <>

    <section>
    <div className="container">
    <div className={s.wrap}>
  <img src="/images.png" alt="" />
<div className={s.into}>
    <h1>Step into the <br /> Anime Universe <br /> With Geekozi</h1>
    <button>Discover More</button>
</div>
    
  </div>
  

<div className={s.dop}>
  <div className={s.gift}>
  <h1>Surprise your <br /> friend with <br /> Geekozi Gift Card</h1>
  <button>Get Your Card</button>
  </div>

  <img src="/one.png" alt="" />

</div>
</div>

    </section>
 
  
  </>
  )
}

export default Step