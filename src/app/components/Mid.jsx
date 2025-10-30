import React from 'react'
import { Plus,Heart,MessageSquareText,Share2 } from 'lucide-react'
const Mid = () => {
  return (
    <>
      {/* //grid grid-cols-3 row-span-1 */}
      <main className='gri'>

        <section><div className='User-Info'>
          
          
          
          <section>
            <div className='flex gap-14  p-4 justify-center items-center'>
              <button className='flex gap-2 text-xl '>Follow <Plus size={23}/></button>
              <div className='flex gap-5 items-center'>              <div className='USer text-2xl'>User-xyz</div>
              <div className='h-7 w-7 bg-white rounded-full'></div>
              </div>
               </div>
<div className=' flex gap-24 justify-center'>
<button className='block'><Heart strokeWidth={2.5}/></button>
<button className='block'><MessageSquareText strokeWidth={2.5}/></button>
<button className='block'><Share2 strokeWidth={2.5}/></button>
</div>
           
          </section>
          
          
          
          
          
          
          
          
          
          
      
          </div></section>
        <section className='wrapper-M'>
  
          <div className='Main-Content'></div> </section>
        <section className='wrapper-S'><div className='Friend-Suggestions'>

          <section>


            <div>

              <div className='text-3xl text-center'>FRIEND SUGGESTIONS</div>

              </div>
              </section>
              </div>
              </section>

      </main>
    </>
  )
}

export default Mid
