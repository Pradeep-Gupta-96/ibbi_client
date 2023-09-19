import React from 'react'
import aboutusimg from '../utility/about-us-img.png'

const PostDetails = () => {
    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">Post title</div>
                </div>
            </div>
            <div className="page-content pb-40">
                <div className="bound">
                    <p><img className='page-banner' src={aboutusimg} alt="banner" /></p>
                    <p>Welcome to IBC Support, a specialized platform dedicated to facilitating and enhancing the corporate insolvency resolution process in alignment with the Indian Insolvency and Bankruptcy Code (IBC), 2016. Our primary focus is to provide vital services and assistance to a diverse range of stakeholders, including financial creditors, operational creditors, resolution applicants, Insolvency professionals (IRP/RP/Liquidator). Whether it's aiding in filling of Section 7/9 application, claim submissions, document drafting or review, legal representation, or other services pertaining to the insolvency process, we offer comprehensive solutions to navigate the complexities of insolvency, streamline procedures, and ultimately drive successful resolutions for distressed entities.</p>
                </div>
            </div>
        </>
    )
}

export default PostDetails