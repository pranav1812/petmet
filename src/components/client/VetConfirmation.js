import React from 'react';
import './VetProfile.css';
import Carousel from 'react-elastic-carousel';
import SquareCard from './SquareCard';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 240, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

const VetConfirmation = () => {
    return ( 
        <div>
            <div className="outer mb-4">
                <h3 className="clinic_name mb-4">ORTHO VET CLINIC</h3>
                <div className="container">
                    <h6 className="clinic_name mb-4">Dr. Arvind Goyal</h6>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="col-12 sections mb-4">
                                Home Visit
                            </div>
                            <div className="col-12 sections mb-4">
                                14/11/2000
                            </div>
                            <div className="col-12 sections">
                                10:00 - 11:00 AM
                            </div>
                        </div>
                        <div className="col-12 col-md-8 sections">
                            <h6>Nishant Saini</h6>
                            <p className="card_text">House No. 123, Sector 15 Panchkula, Haryana, India<br />134113</p>
                            <p className="card_text">Mobile: 98998 98998</p>
                            <div className="row justify-content-end">
                                <span className="badges_new confirm_pend">Confirmation Pending</span>
                                <span className="badges_new conf">Booking Confirmed</span>
                                <span className="badges_new track">Track Address</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-9">
                            <p style={{color:"#03a300", fontSize:"25px"}}>Your booking request has been sent. Our team will reach out to you in 24 hours.</p>
                        </div>
                        <div className="col" style={{textAlign:"right"}}>
                            <span className="badges_new help">Need Help ?</span>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <h2 className="mt-4" style={{paddingBottom: "20px"}}>TOP FEATURED</h2>
                <div style={{justifyContent: "center",paddingBottom: "40px"}}>
                    <Carousel breakPoints={breakPoints}>
                        <item>
                        <SquareCard />
                        </item>
                        <item>
                        <SquareCard />
                        </item>
                        <item>
                        <SquareCard />
                        </item>
                        <item>
                        <SquareCard />
                        </item>
                    </Carousel>
                </div>
        </div>
     );
}
 
export default VetConfirmation;