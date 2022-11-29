import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Report = () => {
    const reported = useLoaderData();
    console.log(reported);
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
         
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
           
            {
                reported.map((report,i)=> <tr key={report._id}>
                    <th>1+i</th>
                    <td>{report.name}</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>)
            }
         
          </tbody>
        </table>
      </div>
    );
};

export default Report;