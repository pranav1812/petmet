import React from 'react';
import Orders from './ordersCard';

const Orders_List = () => {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Orders />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Orders />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Orders />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Orders />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Orders_List;