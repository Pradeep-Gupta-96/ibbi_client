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

const Liquidator = () => {
  return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">For Liquidator</div>
                </div>
            </div>
            <div className="page-content pb-40">
                <div className="bound">
                    <p><img className='page-banner' src={operationalcreditor} alt="banner" /></p>
                    <p>The liquidator is an insolvency professional on whom all the powers of the Board of Directors, key managerial personnel and the partners, as applicable, of the Corporate Debtor are vested by the Adjudicating Authority upon Liquidation order being passed under section 33 of the Insolvency and Bankruptcy Code, 2016.</p>
                    <p><em>We recognize the pivotal role that Liquidators play in the liquidation process, where every decision holds significant implications for stakeholders. We have been empowering Liquidators with the expertise and support needed to manage the liquidation process with precision and to ensure compliance with the Insolvency and Bankruptcy Code (IBC), 2016 i.e., IBC's stringent regulatory framework.</em></p>
                    <p>Our platform offers a comprehensive array of services, each designed to address a specific aspect of the liquidation journey:</p>
                    <div className='services-sec'>
                        <Grid className="services-items" container spacing={2}>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Drafting of Public Announcements, Notices, and Agenda</h3>
                                    <p className='ab-text'>IBC Support assists in meticulously drafting critical documents such as public announcements, notices, and CoC meeting agendas. These documents serve as essential tools for disseminating important information, ensuring transparency, and facilitating effective communication throughout the liquidation process.</p>   
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Voting Guidelines</h3>
                                    <p className='ab-text'>We establish clear and structured voting guidelines to provide guidance to Committee of Creditors (CoC) members, enabling transparent and informed decision-making, especially during pivotal moments such as the approval of resolution plans.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Notices to Related Parties / other Stakeholders Claiming Set-Off Dues</h3>
                                    <p className='ab-text'>IBC Support effectively manages communication with stakeholders asserting set-off claims, ensuring that these claims are documented accurately and resolved judiciously within the liquidation framework.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Expressions of Interest (EOI) and Information Memorandum</h3>
                                    <p className='ab-text'>We oversee the entire process of soliciting, receiving, and evaluating expressions of interest from potential resolution applicants. Additionally, our team assists in preparing the Information Memorandum, a comprehensive document designed to attract prospective resolution applicants by providing critical insights into the corporate debtor.</p>
                                    
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
                                    <p className='ab-text'>Our team of legal experts offers invaluable legal opinions and guidance on complex legal matters that may arise during the liquidation process, ensuring that actions and decisions are in strict compliance with the Insolvency and Bankruptcy Code (IBC), 2016 and other pertinent laws.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Filing of Progress Reports</h3>
                                    <p className='ab-text'>We manage the preparation and timely filing of progress reports with the Adjudicating Authority, providing comprehensive updates on the status and progress of the liquidation proceedings.</p>
                                    
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
                                    <p className='ab-text'>IBC Support serves as your legal representative in the liquidation process, representing the interests of creditors and stakeholders before the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), and other relevant courts and authorities.</p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Advisory Services</h3>
                                    <p className='ab-text'>Our advisory services offer invaluable insights and strategic guidance to assist Liquidators in making well-informed decisions at every juncture of the liquidation journey.</p>
                                    
                                </Item>
                            </Grid>
                        </Grid>
                    </div> 
                    <p>&nbsp;</p>
                    <p>At IBC Support, we understand that the success of the liquidation process hinges on meticulous planning, expert execution, and unwavering compliance. Our platform is designed to provide you with the tools, expertise, and support necessary to navigate these challenges effectively. Consider IBC Support your partner for success—a partner committed to facilitating your role as a Liquidator in the liquidation of distressed companies under the Insolvency and Bankruptcy Code (IBC), 2016. </p>
            
                </div>
            </div>
        </>
  )
}

export default Liquidator