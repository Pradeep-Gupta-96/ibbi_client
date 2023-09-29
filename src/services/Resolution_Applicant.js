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

const Resolution_Applicant = () => {
    return (
        <>
        <div className="banner">
            <div className="bound">
                <div className="page-title">For Resolution Applicant</div>
            </div>
        </div>
        <div className="page-content pb-40">
            <div className="bound">
                <p><img className='page-banner' src={operationalcreditor} alt="banner" /></p>
                <p>A resolution applicant under the Insolvency and Bankruptcy Code (IBC) of India, can be any person or entity who is interested in submitting a resolution plan to resolve the financial difficulties of a company undergoing insolvency proceedings. The person should not be disqualified under Section 29A of the Insolvency and Bankruptcy Code, (IBC) 2016.</p> 
                <p>IBC Support provides services to resolution applicants in the context of the Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code (IBC) of 2016 are comprehensive and tailored to meet the unique needs and challenges faced by resolution applicants. Here's a detailed overview of the services you provide: </p>
                 <div className='services-sec'>
                    <Grid className="services-items" container spacing={2}>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Identifying Investment Opportunities under the Insolvency and Bankruptcy Code (IBC), 2016</h3>
                                <p className='ab-text'>Our team specializes in identifying and evaluating investment opportunities within the framework of the IBC. We meticulously scan the insolvency landscape to pinpoint distressed companies with potential for revival and growth. Our expertise lies in assessing the suitability of these opportunities for resolution applicants, considering factors like market dynamics, industry trends, and the corporate debtor's specific circumstances.</p>   
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Due Diligence of Corporate Debtor</h3>
                                <p className='ab-text'>We conduct comprehensive due diligence on the corporate debtor in question. This process involves a thorough examination of the company's financial records, assets, liabilities, operational capabilities, and contractual obligations. Our due diligence efforts are geared towards providing resolution applicants with a clear understanding of the corporate debtor's condition, challenges, and prospects.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Preparing a Viable Resolution Plan in Compliance with IBC, 2016</h3>
                                <p className='ab-text'>Crafting a viable resolution plan is a cornerstone of our services. We work closely with resolution applicants to develop robust plans that outline a strategic roadmap for the revival of the corporate debtor. These plans are tailored to address the unique needs and challenges of each case, encompassing financial restructuring, operational improvements, and asset management strategies.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Representation before Committee of Creditors (CoC)</h3>
                                <p className='ab-text'>Our experienced team acts as a bridge between resolution applicants and the Committee of Creditors (CoC). We not only assist in presenting the resolution plan but also engage in constructive negotiations with the CoC members. Our goal is to secure the CoC's approval for the plan, and we leverage our expertise to address queries, concerns, and objections effectively.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Legal Representation Before Various Courts and Adjudicating Authority</h3>
                                <p className='ab-text'>Legal complexities often arise during the resolution process. We provide robust legal representation before the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), and other relevant courts and adjudicating authorities. Our legal experts ensure that all aspects of the resolution process adhere to the IBC's legal framework and regulations.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Litigation Support</h3>
                                <p className='ab-text'>In the event of disputes, challenges, or objections to the resolution plan, our team offers unwavering litigation support. We employ a combination of legal acumen and strategic expertise to defend the viability of the plan and resolve disputes efficiently. Our goal is to navigate legal hurdles and ensure the successful execution of the resolution plan.</p>
                                
                            </Item>
                        </Grid>
                    </Grid>
                </div> 
                <p>&nbsp;</p>
                <p>Our services to resolution applicants are designed to guide them through the complex landscape of corporate insolvency, from identifying promising investment opportunities to the meticulous preparation of resolution plans, skillful representation before various stakeholders, and adept management of legal challenges. We are committed to helping resolution applicants maximize their chances of success in revitalizing distressed companies while ensuring compliance with the IBC's stringent requirements.</p>
           
            </div>
        </div>
    </>
    )
}

export default Resolution_Applicant