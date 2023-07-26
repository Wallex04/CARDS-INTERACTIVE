import React from 'react'


const Custom = () => { 
    const [count, setCount] = useState(0)

  return (
    <div className='both'>

        <div className="left">
        <label>log</label>
        <input type="text"  placeholder='12345677'/>
        <input type="text"  placeholder='12345677'/>
        <input type="text"  placeholder='12345677'/>
        <input type="text"  placeholder='12345677'/>
        </div>

    <div className="right">
    <label>CardHolder Name</label>
    <input type="text" placeholder='text'/>
    <label>Card Number</label>
    <input type="number" placeholder='123456'/>
   
        <label>Exp.Date</label>
        <input type="number" />
        <label>cv2</label>
        <input type="number" />
  
    <button className="confirm">confirm</button>
    </div>

    </div>


  )
}

export default Custom