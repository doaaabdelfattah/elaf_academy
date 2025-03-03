import Image from 'next/image'
import React from 'react'

const AboutAcademy = () => {
  return (
    <>  
      <div className="h-[50dvh] section-separate  relative bg-[url('/islamic-pic.jpg')] bg-cover bg-center md:bg-fixed flex items-center justify-center ">
    {/* Black overlay */}
    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

<div className='flex items-center justify-center flex-col py-9 gap-10'>


<Image
            src="/Quraan-aya-white.png"
width={1000}
height={100}
            className="z-50 h-auto px-10 flex items-center justify-center "
            alt="Qur'an Ayah"
            />

    <p className='text-center leading-loose text-lg tracking-wider z-50 text-white lg:block hidden'>


It is certainly We Who have revealed the Reminder, and it is certainly We Who will preserve it. <br/>


</p>
</div>
    
    

    </div>
    
    </>
  )
}

export default AboutAcademy