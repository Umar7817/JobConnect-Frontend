import React from 'react'
import {Link} from "react-router-dom"
import { FiDollarSign, FiMapPin } from 'react-icons/fi'
import { FaIndianRupeeSign } from 'react-icons/fa6'

function Card({data} ) {
    const {companyName, jobTitle, componyLogo, minPrice, maxPrice, salaryType, exprienceLevel, jobLocation, description, _id} = data
  return (
    <div>

        <section className='card'>
        <Link to={`/job-details/${jobTitle}/${companyName}/${maxPrice}/${minPrice}/${salaryType}/${exprienceLevel}/${description}/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
            <img className='h-24 w-24 aspect-auto' src={componyLogo} alt="" />
            <div>
                <h4 className='text-black mb-1'>{companyName} </h4>
                <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
            
            <div className='flex text-black/70 text-base gap-2 mb-2' >
                <span className='flex items-center gap-2'> <FiMapPin/> { jobLocation}</span>
                <span className='flex items-center gap-2'> <FaIndianRupeeSign/> { maxPrice} - {minPrice}k </span>
                
            </div>
            <p className='text-base text-black/70'>{description}</p>
            </div>
        </Link>
        </section>

    </div>
  )
}

export default Card