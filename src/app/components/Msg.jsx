import React from 'react'
import { Phone,Video,AlertCircle,Ellipsis } from 'lucide-react'
const Msg = () => {
  return (
<>

<section >
<div className='flex  '>
<h1 className='text-4xl font-light tracking-widest  '>FRIENDS </h1>
  <section className='flex items-center  '>


<div className=''>

<span className='flex gap-4 items-center'> <div className='h-12 w-12 rounded-full bg-white'></div>USER</span>

</div>



<div>
<button><Phone/></button>
<button><Video/></button>
<button><AlertCircle/></button>
<button><Ellipsis/></button>
</div>
  </section>
</div>

</section>



</>
  )
}

export default Msg
