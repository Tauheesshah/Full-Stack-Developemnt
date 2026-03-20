import React from 'react'
import PropTypes from 'prop-types'

const NameShow = ({label,age}) => {
  return (
   <>
        <h4>{label}-{age}</h4>
   </>
  )
}

NameShow.prototype={
    label:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}

NameShow.defaultProps = {
    label:"Hello",
    age:0
}





export default NameShow
