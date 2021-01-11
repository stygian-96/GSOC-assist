import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const RecommendedOrgs = () => {
    return(
        <div className="recommended-orgs-wrapper">
            <p>
                RECOMMENDED ORGANISATIONS
            </p>
            <div>
                <div className="recommended-orgs-list">
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div><span>9.5</span> <StarIcon /></div>  
                    </div>
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div><span>9.5</span> <StarIcon /></div>
                    </div>
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div><span>9.5</span> <StarIcon /></div>
                    </div>
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div><span>9.5</span> <StarIcon /></div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default RecommendedOrgs