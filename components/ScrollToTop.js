import React from 'react'

const ScrollToTop = ({scrolltop}) => {
    
  return (
    <>
        <button onClick={scrolltop} className="bg-green-800 m-6 rounded-3xl p-5">Scroll To Top</button>
    </>
  )
}

export default ScrollToTop