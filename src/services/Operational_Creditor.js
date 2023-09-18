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


const Operational_Creditor = () => {
    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">For Operational Creditor</div>
                </div>
            </div>
            <div className="page-content pb-40">
                <div className="bound">
                    <p><img className='page-banner' src={operationalcreditor} alt="banner" /></p>
                    <p>An operational creditor is a person to whom ‘operational debt’ is owed, in order to classify as an operational debt the amount should fall under the ambit of 'claim' as defined under section 3 (6) of the Code and such a claim should confine within the definition of debt under the section 3 (11) of the Code and such a debt should confine under the 4 categories laid down by the section 5 (21) of the code which are: </p>
                    <p>Goods, Services, Employment, Government. </p>
                    <p>Our dedicated team specializes in providing comprehensive legal services to operational creditors involved in the Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code (IBC) of 2016. Here's an overview of the services we offer: </p>
                    <div className='services-sec'>
                        <Grid className="services-items" container spacing={2}>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Initiation & Filing of Section 9 Application under IBC, 2016</h3>
                                    <p className='ab-text'>We assist operational creditors in initiating insolvency proceedings by preparing and filing Section 9 applications with the National Company Law Tribunal (NCLT), a crucial step in the CIRP. </p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Assisting in Claims Submission</h3>
                                    <p className='ab-text'>Our team guides operational creditors through the process of preparing and submitting their claims to the Insolvency Resolution Professional (IRP) or the resolution professional, ensuring accuracy and compliance. </p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Representation before CoC (Committee of Creditors)</h3>
                                    <p className='ab-text'>We represent operational creditors in CoC meetings, advocating for their rights and interests, and participating in critical decisions concerning the resolution process. </p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Legal Opinions on Key Matters</h3>
                                    <p className='ab-text'>We offer legal opinions and expert advice on key matters pertaining to insolvency proceedings, ensuring that operational creditors are well-informed and can make strategic decisions. </p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Legal Representation Before Various Courts and Adjudicating Authority</h3>
                                    <p className='ab-text'>Our legal team provides representation before diverse courts and adjudicating authorities, including appearances before the NCLT and other relevant bodies, to protect the interests of operational creditors. </p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Litigation Support</h3>
                                    <p className='ab-text'>We extend full litigation support, assisting operational creditors in navigating legal disputes that may arise during the insolvency process, including disputes over claim admission, rejections, and other contentious issues. </p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Due Diligence of Resolution Applicant</h3>
                                    <p className='ab-text'>Our due diligence process scrutinizes resolution applicants to evaluate their financial capacity and credibility, ensuring the best outcomes for operational creditors. </p>
                                    
                                </Item>
                            </Grid>
                            <Grid item xs={12} md={4} sm={4}>
                                <Item className='service-item'>
                                    <h3>Vetting of Resolution Plan</h3>
                                    <p className='ab-text'>We meticulously review and vet resolution plans to verify compliance with legal requirements and to safeguard the rights of operational creditors. This may also involve negotiating with resolution applicants to secure favorable terms. </p>
                                    
                                </Item>
                            </Grid>
                        </Grid>
                    </div> 
                    <p>&nbsp;</p>
                    <p>Our commitment is to empower operational creditors with comprehensive legal support throughout the insolvency journey. Whether it's initiating proceedings, submitting claims, or navigating complex legal challenges, our team is dedicated to serving the unique needs of operational creditors and maximizing their recovery. </p>
               
                </div>
            </div>
        </>
    )
}

export default Operational_Creditor