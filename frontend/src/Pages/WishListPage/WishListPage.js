import React from 'react'
import Navbar from '../../Components/Navbar'
import TabLinks from '../HomePage/TabLinks'
import '../../Styles/HomePage.css';
import SearchField from '../HomePage/SearchField';
import RecommendedOrgs from '../HomePage/Recommended-orgs';
import TrendingOrgs from '../HomePage/Trending-orgs';
import WLCard from '../../Components/WLCard';

const WishListPage = () => {
    return (
        <div>
            <Navbar />
            <div className="top-wrapper">
                <TabLinks />
                <div className="main-content-wrapper">
                    <div className="main-content">
                        <SearchField />
                        <div className="card-container">
                            <WLCard />
                            <WLCard />
                            <WLCard />
                            <WLCard />
                            <WLCard />
                            <WLCard />
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

export default WishListPage