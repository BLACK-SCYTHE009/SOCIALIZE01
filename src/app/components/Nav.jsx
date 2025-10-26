import React from 'react'
import{JetBrains_Mono} from"next/font/google"
import{House,MessageCircle,Globe,HeartPulse,User,Bell} from "lucide-react"
import SearchBar from './SearchBar'
import StorySection from './StorySection'
const jetbrains=JetBrains_Mono({
  subsets:["latin"],
  weight:["400","700"]
})
const Nav = () => {
  return (
<header className=' '>
  <nav className='flex justify-between px-6 py-5 '>
    <div> <h1 className={`${jetbrains.className} text-3xl font-bold h `}>
        SOCIALIZE
      </h1></div> 
    <ul className='flex gap-24'>
      <li className='flex x gap-2'><House/>HOME</li>
      <li className='flex  gap-2 x'><MessageCircle/>MESSAGES</li>
      <li className='flex x gap-2 '><Globe/>CHATROOM</li>
      <li className='flex x gap-2 '><HeartPulse/>SWIPES</li>
      <li className='flex x gap-2 '><Bell/>NOTIFICATIONS</li>
      <li className='flex x gap-2 '><User/>USER-XYZ</li>
    </ul>
  </nav>
  <hr />
  <SearchBar/>
  <StorySection/>

</header>
  )
}

export default Nav
