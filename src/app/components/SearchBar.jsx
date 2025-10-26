import React from 'react'
import { Search } from 'lucide-react'
const SearchBar = () => {
  return (
   <>
   <div className='flex justify-center py-6 relative max-h-fit '>
    
<input type="text" placeholder='SEARCH...' className='bg-white Sb pl-12 ' />
<Search className='absolute oe'/>
</div>

   </>
  )
}

export default SearchBar
