import React from 'react'
import { Phone,Video,AlertCircle,Ellipsis } from 'lucide-react'
const Msg = () => {
  return (
<>

<section className=' ' >
<div className='flex items-center gap-7 '>
<h1 className='text-4xl font-light tracking-widest br c '>FRIENDS </h1>
  <section className='flex items-center g '>


<div className=''>

<span className='flex gap-4 items-center'> <div className='h-12 w-12 rounded-full bg-white'></div>USER</span>

</div>




<div className='flex gap-4 '>
  <button><Phone/></button>
<button><Video/></button>
<button><AlertCircle/></button>
<button><Ellipsis/></button>

</div>
  </section>
</div>

</section>
<hr className=''/>


</>
  )
}

export default Msg
