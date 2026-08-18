import React from 'react'
import SignOut from '../Components/SignOut';

const AdminControl = () => {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className=" text-[var(--text-secondary)]/70 ">
        THIS IS ADMIN CONTROLLER
      </h1>

      <SignOut/>
    </div>
  );
}

export default AdminControl