import React from 'react'

function ProfileCard(props) {
  return (
    <div className='w-[350px] h-[30rem] p-[40px_20px] my-[50px] mx-auto bg-white rounded-[15px] text-center font-sans'>
      <img src={props.img} alt={props.heading} className="w-[200px] h-[200px] mx-auto object-cover rounded-full mb-[15px]" />
      <h1 className='text-[35px] my-[10px] text-[#333]'>{props.heading}</h1>
      <p className='text-[16px] text-[#666]'>{props.bio}</p>
    </div>
  )
}

export default ProfileCard
