import React from 'react'

function ProfileCard(props) {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='md:w-[350px] p-[40px_20px] md:my-[50px] mx-3 md:mx-auto bg-white rounded-[15px] text-center font-sans'>
        <img src={props.img} alt={props.heading} className="w-[200px] h-[200px] mx-auto object-cover rounded-full mb-[15px]" />
        <h1 className='text-[35px] my-[10px] font-bold text-[#333]'>{props.heading}</h1>
        <p className='text-[16px] text-[#666]'>{props.bio}</p>
      </div>
    </div>
  )
}

export default ProfileCard;
