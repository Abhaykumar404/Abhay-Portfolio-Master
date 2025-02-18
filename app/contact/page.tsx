import Calendar from '@/components/contactPageComponent/Calendar'
import CalenderShadule from '@/components/contactPageComponent/CalenderShadule'
import Introcontact from '@/components/contactPageComponent/Introcontact'
import React from 'react'

function page() {
  return (
    <div>
        <Introcontact/>
        {/* <Calendar /> */}
        <CalenderShadule />
    </div>
  )
}

export default page