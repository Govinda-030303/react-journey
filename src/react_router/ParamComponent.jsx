import React from 'react'
import { useParams } from 'react-router'

const ParamComponent = () => {
    const {id} =useParams();
  return (
    <div>
        params: {id}
    </div>
  )
}

export default ParamComponent