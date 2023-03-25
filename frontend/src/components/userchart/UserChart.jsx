import React from 'react';
import './userchart.scss';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const UserChart = ({ title, data, dataKey }) => {


   return (

      <div className='userChart'>
         <div className="title">{title}</div>

         <ResponsiveContainer width="100%" aspect={4 / 1}>
            <AreaChart data={data} allowDuplicatedCategories={false}>
               <XAxis dataKey="name" stroke="gray" allowDuplicatedCategory={false} />
               <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
               <Tooltip />
               <Area type="monotone" dataKey={dataKey} stroke="#5BD1D7" fillOpacity={1} fill="url(#total)" />
            </AreaChart>
         </ResponsiveContainer>


      </div>
   )
}

export default UserChart

