import React from 'react'

const AboutTabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? 'mr-3 font-semibold hover:text-white text-white-200 border-b border-white-300' : 'mr-3 font-semibold hover:text-white text-white-100'
  return (
    <button onClick={selectTab}>
        <p className={buttonClasses}>
            {children}
        </p>
    </button>
  )
}

export default AboutTabButton
