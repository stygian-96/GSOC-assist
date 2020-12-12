import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const RecommendedOrgs = () => {
    return(
        <div>
            <p>
                RECOMMENDED ORGANISATIONS
            </p>
            <div>
                <div className="recommended-orgs-list">
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div>9.5 <StarIcon /></div>  
                    </div>
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div>9.5 <StarIcon /></div>
                    </div>
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div>9.5 <StarIcon /></div>
                    </div>
                    <div className="orgs-item">
                        <div>Amahi</div>
                        <div>9.5 <StarIcon /></div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default RecommendedOrgs