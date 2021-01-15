import React from 'react';
import HostelCard from './HostelCard';

const Hostel = () => {
    return ( 
        <div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <HostelCard />
                </div>
                <div className="col-12 col-md-6">
                    <HostelCard />
                </div>
                <div className="col-12 col-md-6">
                    <HostelCard />
                </div>
                <div className="col-12 col-md-6">
                    <HostelCard />
                </div>
            </div>
        </div>
     );
}
 
export default Hostel;