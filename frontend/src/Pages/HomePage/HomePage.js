import React from 'react'
import Navbar from '../../Components/Navbar'
import TabLinks from './TabLinks'
import '../../Styles/HomePage.css';
import SearchField from './SearchField';
import RecommendedOrgs from './Recommended-orgs';
import TrendingOrgs from './Trending-orgs';
import OPCard from '../../Components/OPCard'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="top-wrapper">
                <TabLinks />
                <div className="main-content-wrapper">
                    <div className="main-content">
                        <SearchField />
                        <div className="card-container">
                            <OPCard
                                logoUrl="http://lh3.googleusercontent.com/uPn---A285wRChEDmLTxZrAA76uIJ54vylaXBowYo36QCT4zJQEbpYV4XHxeKf5QnstBXZrszuetY4cukSWfyjANjv4PrzE=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
                            <OPCard
                                logoUrl="//lh3.googleusercontent.com/UzeA0lR3xzO5W2glTP_1xrkx0D0TARjOtD16xsx8Ci28kdYfGhHU4EnhOTaFq1zD6K5o5OAjy47e9oAZWmC3kb-ZNUzlsw=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
                            <OPCard
                                logoUrl="//lh3.googleusercontent.com/nH1tK1QplL7izpbqjDORl6AEo6BsJv33FlRKoVg4Oobvui0gl2KTmkmEVsYVdPaV4SIkeW1cXV9HVl0uo65gePxLZlMd-7n6=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
<<<<<<< HEAD
=======
                            <OPCard
                                logoUrl="//lh3.googleusercontent.com/nH1tK1QplL7izpbqjDORl6AEo6BsJv33FlRKoVg4Oobvui0gl2KTmkmEVsYVdPaV4SIkeW1cXV9HVl0uo65gePxLZlMd-7n6=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
                            <OPCard
                                logoUrl="//lh3.googleusercontent.com/nH1tK1QplL7izpbqjDORl6AEo6BsJv33FlRKoVg4Oobvui0gl2KTmkmEVsYVdPaV4SIkeW1cXV9HVl0uo65gePxLZlMd-7n6=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
                            <OPCard
                                logoUrl="//lh3.googleusercontent.com/nH1tK1QplL7izpbqjDORl6AEo6BsJv33FlRKoVg4Oobvui0gl2KTmkmEVsYVdPaV4SIkeW1cXV9HVl0uo65gePxLZlMd-7n6=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
                            <OPCard
                                logoUrl="//lh3.googleusercontent.com/nH1tK1QplL7izpbqjDORl6AEo6BsJv33FlRKoVg4Oobvui0gl2KTmkmEVsYVdPaV4SIkeW1cXV9HVl0uo65gePxLZlMd-7n6=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
                            <OPCard
                                logoUrl="//lh3.googleusercontent.com/nH1tK1QplL7izpbqjDORl6AEo6BsJv33FlRKoVg4Oobvui0gl2KTmkmEVsYVdPaV4SIkeW1cXV9HVl0uo65gePxLZlMd-7n6=h128"
                                title=""
                                decription=""
                                yrList=''
                                noOfTimes=""
                            />
>>>>>>> 62dda84872cea718cf0a50f38b3e73e88cccb1a9
                        </div>    
                    </div>
                    <div className="recommended-wrapper">
                        <div className="recommended-orgs">
                            <RecommendedOrgs />
                        </div>
                        <div className="trending-orgs">
                            <TrendingOrgs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage