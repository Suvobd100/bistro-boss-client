// import React from 'react'
import { Outlet } from 'react-router'


const AuthLayout = () => {
  return (
    <div>
    <header>
      {/* <AuthNav/> */}
     
    </header>
    <main className='container mx-auto'>
    {/* <main className='min-h-[calc(100vh-380px)] container mx-auto'> */}
        <Outlet/>
    </main>
    {/* <footer><Footer/></footer> */}
</div>
  )
}

export default AuthLayout