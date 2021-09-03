import React from 'react';
import '../../css/styles.css';

const Candidates = () => {
    return ( 
        <>
        <div className="list-container">
            <div className="list-main-header">
                <div className="title">
                    <span>Title</span>
                    <h2>Software Developer</h2>
                </div>
                <div className="experiance">
                    <span>Experiance</span>
                    <h2>10</h2>
                </div>
                <div className="company">
                    <span>Company</span>
                    <h2>Facebook</h2>
                </div>
            </div>
            <div className="button-section"></div>
            <div className="candidates-list"></div>
        </div>
        </>
     );
}
 
export default Candidates;