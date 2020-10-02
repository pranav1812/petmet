import React from 'react';
import PastAppointmentCard from './PastAppointmentCard';

const PastAppointments = () => {
    return ( 
        <div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <PastAppointmentCard />
                </div>
                <div className="col-12 col-md-6">
                    <PastAppointmentCard />
                </div>
                <div className="col-12 col-md-6">
                    <PastAppointmentCard />
                </div>
            </div>
        </div>
     );
}
 
export default PastAppointments;