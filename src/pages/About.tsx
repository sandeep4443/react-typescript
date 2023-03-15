import React, { useState } from 'react';



type Props = {}

const About = (props: Props) => {

  const [toggle, setToggle] = useState<boolean>(false);

  const clickMe = () =>{
    setToggle(val => !val)
  }

  return (
    <>
      <div className="card-container">
        {toggle &&
          <div className="frame-container">
            <iframe title='unique' src="https://www.youtube.com/embed/cWDJoK8zw58" />
          </div>
        }
      </div>
      <button type="button" onClick={clickMe}>Click Me!</button>

    </>
  )
}

export default About;