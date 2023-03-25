import React, { useState, useEffect, useMemo } from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import WidgetRevenue from '../../components/widget/WidgetRevenue';
import WidgetUser from '../../components/widget/WidgetUser';
import UserChart from '../../components/userchart/UserChart';
import Table from '../../components/table/TableComponent';
import WidgetStock from '../../components/widget/WidgetStock';
import axios from 'axios';


const Home = () => {

   const [userStats, setUserStats] = useState([]);

   const MONTHS = useMemo(
      () => [
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'June',
         'July',
         'Aug',
         'Sept',
         'Oct',
         'Nov',
         'Dec'
      ],
      []
   );

   useEffect(() => {
      const getStats = async () => {
         try {
            const res = await axios.get("/users/stats");
            const statsList = res.data.sort(function (a, b) {
               return a._id - b._id;
            });
            statsList.map((item) =>
               setUserStats((prev) => [
                  ...prev,
                  { name: MONTHS[item._id - 1], "New User": item.total },
               ])
            );
         } catch (err) {
            console.log(err);
         }
      };
      getStats();
   }, [MONTHS]);


   return (
      <div className='home'>
         <Sidebar />
         <div className='homeContainer'>
            <Topbar />
            <div className='widgets'>
               <WidgetUser />
               <WidgetRevenue />
               <WidgetStock />
            </div>

            <div className='charts'>
               <UserChart title="Monthly User Stats" data={userStats} grid dataKey="New User" />
            </div>

            <div className="tableCointainer">
               <div className="listTitle">Latest Transactions</div>
               <Table />
            </div>
         </div>

      </div>
   )
}

export default Home