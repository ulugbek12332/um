import React from 'react'

const Header = () => {
  return (
    <div className='flex'>
        <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
        <p className='text-[#F79841]'>Earn per tap</p>
        <p className='text-[#FFFFFF]'>+12</p>
      </div>
       <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
        <p className='text-[#F79841]'>Coins to level up</p>
        <p className='text-[#FFFFFF]'>10 </p>
      </div>
       <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
        <p className='text-[#F79841]'>Profit per hour</p>
        <p className='text-[#FFFFFF]'>+636</p>
      </div>
      <InfoBox text={'Earn per tap'} value={+18648} />
        <InfoBox text={'Coins to level up'} value={10 } />
          <InfoBox text={'Profit per hour'} value={+18648} />
    </div>
  )
}

function InfoBox(text, value){
    <div className="element w-[117px] h-[50px] bg-[#32363C] rounded-[10px] text-center">
        <p className='text-[#F79841]'>{text}</p>
        <p className='text-[#FFFFFF]'>{value}</p>
      </div>
}

export default Header