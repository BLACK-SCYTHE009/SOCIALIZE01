import React from 'react'
import { ArrowRight,ArrowLeft } from 'lucide-react'
const StorySection = () => {
  return (
    <>
 <section>

    <div className='flex gap-x-28 px-6 py-8'  >
<ArrowLeft size={50} className=''/>
        
        <section className='flex gap-x-28 f'>
         <div className='user'>
         </div>
         <div className="user circle"></div>
         <div className="user"></div>
         <div className="user"></div>
         <div className="user"></div>
         <div className="user"></div>
         <div className="user"></div>
         <div className="user"></div>
         
        </section>
        <ArrowRight size={50} className=''/>
    </div>
 </section>
 <hr />
    </>
  )
}

export default StorySection
