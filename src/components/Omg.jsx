// import React from 'react'

// const Omg = () => {
//   return (
//     <div className=' flex gap-35 justify-center items-center text-white'>
//         <div className=' flex gap-6'><img src="bobr.png" alt="" />
//       <h1>6500 / 6500</h1></div>
      

//       <h1>Boost</h1>

//     </div>
//   )
// }

// export default Omg
import React, { useState } from 'react'

const Omg = () => {
   const [open, setOpen] = useState(false);
  return (
    <div>
    
<div class="flex items-center ml-[193px] gap-2 -mt-[38px]">
  <img src="rru.png" alt="power" />
  <div class="flex gap-[90px]">
    <h3 class="text-white text-sm font-semibold">6500 / 6500</h3>
    <h4 class="text-white text-sm font-semibold">Boost</h4>
  </div>
</div>


<div class="w-[400px] h-[60px] bg-[#32363CB2] rounded-[12px] ml-[206px] mt-[17px] flex items-center justify-between px-3 relative">

  
  <div onClick={() => setOpen(!open)} class="w-[65px] h-[50px] rounded-[8px] hover:bg-[#21242980] flex flex-col items-center justify-center text-white cursor-pointer">
    <img src="un.png" alt="Exchange" class="w-5 h-5 mb-1" />
    <p class="text-[12px]">Exchange</p>
  </div>

  <ul tabIndex={0}className={open == true ? "dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm absolute bottom-[120%]" : "hidden"}>
        <div className="close">
         
        </div>
        <li>
          <a>Тоp 10 cmc pairs</a>
          <p>Profit per hour</p>
          <a><img src="non.png" alt="" />192</a>
        </li>
        <h1>===================</h1>
        <li>
          <a>Mene coins</a>
          <p>Profit per hour</p>
          <a><img src="non.png" alt="" />2.3k</a>
        </li>
</ul>
  
  <div class="w-[65px] h-[50px] rounded-[8px] hover:bg-[#21242980] flex flex-col items-center justify-center text-[#A2A2A2]">
    <img src="omg.png" alt="Mine" class="w-5 h-5 mb-1" />
    <p class="text-[12px]">Mine</p>
  </div>

  <div class="w-[65px] h-[50px] rounded-[8px] hover:bg-[#21242980] flex flex-col items-center justify-center text-[#A2A2A2]">
    <img src="unu.png" alt="Friends" class="w-5 h-5 mb-1" />
    <p class="text-[12px]">Friends</p>
  </div>

  
  <div class="w-[65px] h-[50px] rounded-[8px] hover:bg-[#21242980] flex flex-col items-center justify-center text-[#A2A2A2]">
    <img src="unur.png" alt="Earn" class="w-5 h-5 mb-1" />
    <p class="text-[12px]">Earn</p>
  </div>

  
  <div class="w-[65px] h-[50px] rounded-[8px] hover:bg-[#21242980] flex flex-col items-center justify-center text-[#A2A2A2]">
    <img src="airdrop.png" alt="Airdrop" class="w-5 h-5 mb-1" />
    <p class="text-[12px]">Airdrop</p>
  </div>

</div>

    </div>
  )
}

export default Omg

