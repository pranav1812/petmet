import React from 'react';
import AppointmentCard from './AppointmentCard';

const Orders_List = () => {
    return ( 
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <AppointmentCard />
                </div>
                <div className="col-12 col-md-6">
                    <AppointmentCard />
                </div>
                <div className="col-12 col-md-6">
                    <AppointmentCard />
                </div>
            </div>
        </>
     );
}
 
export default Orders_List;