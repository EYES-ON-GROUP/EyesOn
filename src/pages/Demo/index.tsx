import React from 'react'

const Demo = () => {
  return (
    <div>
      <div className='h-auto relative pb-20 pt-[100px] px-8'>
      <div className='flex justify-between place-items-center mb-10'>

        <div>
          <span className='text-blue font-bold text-xl'>eyes</span>
          <span className="text-orange font-bold pl-1 text-xl">ON</span>
        </div>

        <button>
        <img src="/assets/images/mobileassets/active (1).png" alt="" className='w-10 h-10' />
        </button>
      </div>

      <div className='flex justify-between place-items-center mb-10'>
        <div className='flex gap-4'>
        <button className='flex flex-col place-items-center text-xs'>
         <img src="/assets/images/istockphoto-1354524757-612x612-removebg-preview.png" className='h-12 w-12 rounded-full border-dark-blue border-4  object-cover' alt="" />
         <p className='text-dark-blue font-semibold'>Ashley</p>
        </button>
        <button className='flex flex-col place-items-center text-xs'>
         <img src="/assets/images/istockphoto-1354524757-612x612-removebg-preview.png" className='h-12 w-12 rounded-full border border-gray-400  object-cover' alt="" />
         <p>Fortune</p>
        </button>
        <button className='flex flex-col place-items-center text-xs'>
         <img src="/assets/images/istockphoto-1354524757-612x612-removebg-preview.png" className='h-12 w-12 rounded-full border border-gray-400  object-cover' alt="" />
         <p>Diane</p>
        </button>
        </div>

        <div>
          <img src="/assets/images/mobileassets/more.png" alt=""  className='h-8 w-8 object-cover'/>
        </div>
      </div>

      <div className='min-h-[130px] rounded-xl flex flex-col gap-3 text-white px-8 py-5 mb-5 bg-[#1A2332]'>
        <div className='flex place-items-center gap-1'>
          <p className='text-white font-semibold'>Current Location</p>
          <img src="/assets/images/mobileassets/location.png" alt="" />
        </div>

        <p className='text-xs'>Getsmarter, Bonamoussadi</p>

        <button className='flex mt-4 rounded-xl place-items-center gap-2 w-fit bg-orange px-3 py-1'>
        See On Map
        <img src="/assets/images/mobileassets/map.png" className='h-5 w-5' alt="" />
        </button>
      </div>

      <div className='min-h-[100px] text-xs mb-10  rounded-xl flex gap-3 justify-around text-white px-8 py-5 bg-[#1A2332]' >
        <div className='flex flex-col gap-2 place-items-center'>
          <img src="/assets/images/mobileassets/search (1).png" alt="" />
          <p className=''>Live view</p>
        </div>
        <div className='flex flex-col gap-2 place-items-center'>
        <img src="/assets/images/mobileassets/iphone.png" alt="" />
        <p className=''>Messages</p>
        </div>
        <div className='flex flex-col gap-2 place-items-center'>
        <img src="/assets/images/mobileassets/sign.png" alt="" />
        <p className=''> Website</p>
        </div>
        <div className='flex flex-col gap-2 place-items-center'>
        <img src="/assets/images/mobileassets/screenshot.png" alt="" />
        <p className=''>Screenshot</p>
        </div>
      </div>

      <div className='min-h-[180px] rounded-xl bg-white shadow-xl shadow-gray-400 px-8 py-5 mb-5'>
        <div className='flex justify-between place-items-center mb-5'>
          <div>
          <p>Screen time</p>
          <p className='text-4xl font-bold'>6h50min</p>
          </div>

          <button className='flex flex-col text-xs font-bold place-items-center'>
          <img src="/assets/images/mobileassets/switch (1).png" className='px-5 py-3 bg-orange rounded-full' alt="" />
          Shutdown
          </button>
        </div>

        <div className='flex justify-between place-items-center'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between gap-5 place-items-center'>
              <div>
                <span className='py-0.5 px-3  mr-1 rounded-full bg-green-900'></span>
                <span>Social Media</span>
              </div>
              <div>
                <p  className='font-semibold'>3h25min</p>
              </div>
            </div>

            <div className='flex justify-between gap-5 place-items-center'>
              <div>
                <span className='py-0.5 px-3  mr-1 rounded-full bg-orange'></span>
                <span>Social Media</span>
              </div>
              <div>
                <p  className='font-semibold'>3h25min</p>
              </div>
            </div>
            
            <div className='flex justify-between gap-5 place-items-center'>
              <div>
                <span className='py-0.5 px-3  mr-1 rounded-full bg-gray-800'></span>
                <span>Games</span>
              </div>
              <div>
                <p  className='font-semibold'>3h25min</p>
              </div>
            </div>

            <div className='flex justify-between gap-5 place-items-center'>
              <div>
                <span className='py-0.5 px-3  mr-1 rounded-full bg-gray-400'></span>
                <span>Videos</span>
              </div>
              <div>
                <p  className='font-semibold'>3h25min</p>
              </div>
            </div>
           Ì
            
          </div>

          <div></div>
        </div>
      </div>

      <div className='min-h-[180px] rounded-xl bg-white shadow-xl shadow-gray-400 px-8 py-5 mb-5'>
        <div className='flex justify-between place-items-center mb-5'>
          <p>Appels & messages</p>

          <div>
            <span className='text-cyan-500 text-xs'>Details</span>
          </div>
        </div>

        <div className='grid  grid-cols-3 gap-3'>
          <div className='w-full px-8 py-2 rounded-md flex flex-col place-items-center gap-2 bg-[#9FEF00]'>
            <img src="/assets/images/mobileassets/phone-call.png" alt="" />
            <p className='text-xs'>Calls</p>
            <p>56</p>

          </div>
          <div className='w-full px-8 py-2 rounded-md flex flex-col place-items-center gap-2 bg-[#3743A5]'>
            <img src="/assets/images/mobileassets/comments.png" alt="" />
            <p className='text-xs'>Messages</p>
            <p>56</p>

          </div>
          <div className='w-full px-8 py-2 rounded-md flex flex-col place-items-center gap-2 bg-opacity-25 bg-[#1A2332]'>
            <img src="/assets/images/mobileassets/user.png" alt="" />
            <p className='text-xs'>Contacts</p>
            <p>56</p>

          </div>
        </div>
      </div>


      <div className='h-auto pb-5 rounded-xl bg-white shadow-xl shadow-gray-400 px-8 py-5 mb-5'>
        <div className='flex justify-between place-items-center mb-5'>
          <p>Appels & messages</p>

          <div>
            <span className='text-cyan-500 text-xs'>Details</span>
          </div>
        </div>

        <div className='grid  grid-cols-6 gap-3'>
          <img src="/assets/images/mobileassets/instagram.png" alt="" />
          <img src="/assets/images/mobileassets/social-media.png" alt="" />
          <img src="/assets/images/mobileassets/facebook(1).png" alt="" />
          <img src="/assets/images/mobileassets/app-store.png" alt="" />
          <img src="/assets/images/mobileassets/booster.png" alt="" />
          <img src="/assets/images/mobileassets/icons8-app-48.png" alt="" />
        </div>
      </div>

    </div>
    <div className='h-[70px] rounded-t-3xl bg-gray-300 shadow-xl shadow-gray-400 fixed bottom-0 w-full'>
      <div className='w-[80%] relative justify-between flex gap-4 pt-5 mx-auto'>
        <div className='flex flex-col place-items-center text-xs'>
        <img src="/assets/images/mobileassets/eye.png" alt="" />
        <p>Live View</p>
        </div>
        <div className='flex flex-col place-items-center text-xs'>
        <img src="/assets/images/mobileassets/location (1).png" alt="" />
        <p>Location</p>
        </div>
        <div className='flex flex-col gap-10 place-items-center text-xs'>
        <img src="/assets/images/mobileassets/home-icon-silhouette (2).png" alt="" className='px-3 absolute -top-5 py-3 bg-orange rounded-full' />
        <p className='mt-6 font-bold'>Home</p>
        </div>
        <div className='flex flex-col place-items-center text-xs'>
        <img src="/assets/images/mobileassets/lock.png" alt="" />
        <p>Lock</p>
        </div>
        <div className='flex flex-col place-items-center text-xs'>
        <img src="/assets/images/mobileassets/setting.png" alt="" />
        <p>Settings</p>
        </div>
      
        
      </div>
    </div>
    </div>
  )
}

export default Demo