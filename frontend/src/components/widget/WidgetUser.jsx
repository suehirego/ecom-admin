import React, { useEffect, useState } from 'react';
import './widget.scss';
import axios from 'axios';



const WidgetUser = () => {

   //total users
   const [userCount, setUserCount] = useState("");

   useEffect(() => {
      const getCount = async () => {
         try {
            const res = await axios.get("/users/usercount");
            setUserCount(res.data);
         } catch { }
      };
      getCount();
   })


   return (
      <div className='widget'>
         <div className='top'>
            <span className='title'>TOTAL USERS</span>
         </div>
         <div className='bottom2'>
            <span className='counter3'>{userCount}</span>
            <span className='desc'>Total Registered Users</span>

         </div>
      </div>
   )
}

export default WidgetUser