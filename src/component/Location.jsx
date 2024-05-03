import React from 'react'
import Input from './Input'

function Location({handleChange}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
            
            <Input handleChange={handleChange} value="" title="All" name="test"/>
            <Input handleChange={handleChange} value="ahmedabad" title="Ahmedabad" name="test"/>
            <Input handleChange={handleChange} value="Mumbai" title="Mumbai" name="test"/>
            <Input handleChange={handleChange} value="Banglore" title="Banglore" name="test"/>
           
        </div>
    </div>
  )
}

export default Location