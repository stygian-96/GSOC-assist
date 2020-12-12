import React from 'react'
import Navbar from '../../Components/Navbar'
import TabLinks from './TabLinks'
import '../../Styles/HomePage.css';
import SearchField from './SearchField';
import RecommendedOrgs from './Recommended-orgs';
import TrendingOrgs from './Trending-orgs';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="top-wrapper">
                <TabLinks />
                <div className="main-content-wrapper">
                    <div className="main-content">
                        <SearchField />
                    </div>
                    <div className="recommended-wrapper">
                        <div className="trending-orgs">
                            <RecommendedOrgs />
                        </div>
                        <div className="recommended-orgs">
                            <TrendingOrgs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage