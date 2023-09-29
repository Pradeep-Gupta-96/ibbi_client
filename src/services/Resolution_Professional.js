import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import operationalcreditor from '../utility/operational-creditor.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Resolution_Professional = () => {
    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">For Insolvency Professional (IRP/RP)</div>
                </div>
            </div>
            <div className="page-content pb-40">
                <div className="bound">
                    <p><img className='page-banner' src={operationalcreditor} alt="banner" /></p>
                    <p>The Adjudicating Authority, i.e. NCLT appoints the Resolution Professional who manages the entire process of insolvency and bankruptcy. According to the Insolvency and Bankruptcy Code (IBC), 2016, “Resolution Professional” means an Insolvency Professional who conducts the insolvency resolution process and includes an interim resolution professional and takes necessary steps to revive the company. The Insolvency Professional is governed by specific legislation that they have to follow i.e., IBBI (Insolvency Professional) Regulation, 2016.</p>
                    <p>Interim Resolution Profession or Resolution Professional are the whole and sole of the company after the insolvency application is approved by the adjudicating authority. Resolution Professional is appointed by the adjudicating authority (National Company Law Tribunal, or NCLT.</p>
                    <p><em>We at IBC Support have been empowering IRPs and RPs with the specialized expertise and support essential to navigate the intricate terrain of insolvency proceedings with confidence and precision. In a landscape where the revival of distressed companies hinges on meticulous execution, safeguarding creditor interests, and strict adherence to regulatory frameworks, we stand as your unwavering ally, dedicated to facilitating your pivotal role in the resolution process.</em></p>
                    <p>Our platform offers a comprehensive suite of services, each designed to address a specific facet of the CIRP journey:</p>
                    <div className='services-sec'>
                        <Grid className="services-items" container spacing={2}>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Drafting of Public Announcements, Notices, and Agenda</h3>
                                    <p className='ab-text'>IBC Support assists in the meticulous drafting of essential documents, including public announcements, notices, and CoC meeting agendas. These documents are pivotal in disseminating crucial information and ensuring transparent communication throughout the insolvency process.</p>
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Voting Guidelines</h3>
                                    <p className='ab-text'>We establish clear and structured voting guidelines for Committee of Creditors (CoC) members, ensuring transparency and facilitating informed decision-making, especially during critical moments such as resolution plan approvals.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Notices to related parties/ and associated stakeholders claiming Set-Off Dues</h3>
                                    <p className='ab-text'>IBC Support effectively manages communication with stakeholders who assert set-off claims, ensuring that these claims are accurately documented and judiciously resolved within the CIRP framework.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Expressions of Interest (EOI) and Information Memorandum</h3>
                                    <p className='ab-text'>We handle the entire process of soliciting, receiving, and evaluating expressions of interest from potential resolution applicants. Additionally, our team assists in preparing the Information Memorandum, a comprehensive document designed to attract prospective resolution applicants by providing critical insights into the corporate debtor.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Demand Notices</h3>
                                    <p className='ab-text'>IBC Support takes charge of issuing demand notices, a crucial step in initiating the recovery of outstanding dues from the debtor or other responsible parties.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Legal Opinions on Key Matters</h3>
                                    <p className='ab-text'>Our experts offer invaluable legal opinions and guidance on complex legal issues that may arise during the Corporate Insolvency Resolution Process (CIRP) journey. These opinions ensure that actions and decisions are in strict compliance with the Insolvency and Bankruptcy Code (IBC), 2016 and other pertinent laws.</p> 
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Filing of Progress Reports</h3>
                                    <p className='ab-text'>We manage the preparation and timely filing of progress reports with the Adjudicating Authority, providing comprehensive updates on the status and progress of the insolvency proceedings.</p> 
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Recovery of Dues from Debtor List</h3>
                                    <p className='ab-text'>Our team actively engages in formulating and executing strategies for recovering outstanding dues from the debtor's assets. This may involve coordinating auctions, sales, or other methods to maximize creditor recoveries.</p> 
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Due Diligence of Resolution Applicant and Section 29A Compliance Check</h3>
                                    <p className='ab-text'>IBC Support conducts comprehensive due diligence on potential resolution applicants, assessing their eligibility and financial capacity. Furthermore, we ensure that resolution applicants align with the stringent requirements of Section 29A of the Insolvency and Bankruptcy Code (IBC), 2016, which outlines disqualifications for resolution applicants.</p> 
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Vetting of Resolution Plans</h3>
                                    <p className='ab-text'>We meticulously review and scrutinize resolution plans submitted by applicants to ensure they meet legal and regulatory standards and protect the interests of creditors.</p> 
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Legal Representation Before Various Courts and Adjudicating Authority</h3>
                                    <p className='ab-text'>IBC Support serves as your legal representative in insolvency proceedings, representing the interests of creditors and stakeholders before the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), and other relevant courts and authorities.</p> 
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Advisory Services</h3>
                                    <p className='ab-text'>Our advisory services offer invaluable insights and strategic guidance to assist you in making well-informed decisions at every juncture of the CIRP journey.</p> 
                                </Item>
                            </Grid>
                        </Grid>
                    </div> 
                    <p>&nbsp;</p>
                    <p>At IBC Support, we understand that the success of the insolvency process hinges on meticulous planning, expert execution, and unwavering compliance. Our platform is designed to provide you with the tools, expertise, and support necessary to navigate these challenges effectively. Consider us your partner for success—a partner committed to facilitating your role as an IRP/RP in the resolution of distressed companies under the Insolvency and Bankruptcy Code (IBC), 2016. Welcome to a new era of empowerment and excellence in the Corporate Insolvency Resolution Process (CIRP).</p>
            
                </div>
            </div>
        </>
    )
}

export default Resolution_Professional