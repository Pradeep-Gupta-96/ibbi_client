import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import financialcreditor from '../utility/financial-creditor-services.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Financial_Creditor = () => {
    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">For Financial Creditor</div>
                </div>
            </div>
            <div className="page-content pb-40">
                <div className="bound">
                <p><img className='page-banner' src={financialcreditor} alt="banner" /></p>
                <p>A financial creditor is defined under Section 5(7) of The Insolvency and Bankruptcy Code, (IBC) 2016 -</p>
                <p><em>"a person to whom a financial debt is owed and includes a person to whom such debt has been legally assigned or transferred".</em></p>
                <p>In order to ascertain whether a person is a financial creditor, the debt owed to such a person must fall within the ambit a 'Financial Debt' as under Section 5(8) of The Insolvency and Bankruptcy Code, (IBC) 2016.</p>
                <p>A financial creditor’s relationship with the entity is a pure financial contract, such as a loan or a debt security.</p>
                <p>We at IBC Support provide comprehensive and specialized services tailored to the unique needs of Financial Creditors embarking on the challenging journey of Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code (IBC), 2016 of India.</p>
                <p>We are specialized in providing services that are crucial for financial creditors under the Insolvency and Bankruptcy Code (IBC), 2016 in India. Areness ensures the protection of the interests of financial creditors and navigate the insolvency proceedings effectively. Comprising skilled and forward-thinking attorneys our team operates seamlessly to ensure optimal efficiency. In cases where recovery efforts prove insufficient to resolve a client's situation, we diligently craft strategies to guide clients through the intricacies of insolvency proceedings.</p>
                <p>Dedicated services for the financial creditors:</p>
                <div className='services-sec'>
                    <Grid className="services-items" container spacing={2}>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Initiation & Filing of Section 7 Application under The Insolvency and Bankruptcy Code, (IBC) 2016:</h3>
                                <p className='ab-text'>Assisting financial creditors in initiating insolvency proceedings against a debtor by filing a Section 7 application with the National Company Law Tribunal (NCLT). This is typically the first step in the insolvency process.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Assisting in Claims Submission:</h3>
                                <p className='ab-text'>Helping financial creditors prepare and submit their claims to the Insolvency Resolution Professional (IRP) or the resolution professional, ensuring that all necessary information and documentation are provided.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Representation Before CoC (Committee of Creditors)</h3>
                                <p className='ab-text'>Representing financial creditors in CoC meetings, where critical decisions regarding the resolution process, such as the approval of resolution plans, are made.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Legal Opinions on Key Matters</h3>
                                <p className='ab-text'>Providing legal opinions and advice on important matters related to the insolvency process, including the interpretation of the Insolvency and Bankruptcy Code, (IBC) 2016 and its implications for financial creditors.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Legal Representation Before Various Courts and Adjudicating Authority:</h3>
                                <p className='ab-text'>Representing financial creditors in legal proceedings related to insolvency matters, which may include appearances before the National Company Law Tribunal (NCLT), National Company Law Appellate Tribunal (NCLAT), and other relevant courts and authorities.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Litigation Support:</h3>
                                <p className='ab-text'>Offering support in legal disputes arising during the insolvency proceedings, such as disputes over the admission or rejection of claims, challenges to the resolution plan, or other contentious issues.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Due Diligence of Resolution Applicant:</h3>
                                <p className='ab-text'>Conducting due diligence on potential resolution applicants to assess their financial capability, viability, and credibility to ensure that the best interests of the financial creditors are served.</p>
                                
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <Item className='service-item'>
                                <h3>Vetting of Resolution Plan</h3>
                                <p className='ab-text'>Reviewing and vetting the terms and conditions of resolution plans to ensure they comply with legal requirements and protect the rights of financial creditors. This may involve negotiating with resolution applicants to secure favorable terms.</p>
                                
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <p>&nbsp;</p>
                <p>Our services collectively help navigate the complexities of the insolvency process, make informed decisions, and protect your financial interests. We are specialized in insolvency and bankruptcy matters ensuring that the rights of financial creditors are upheld and that the insolvency proceedings lead to a fair and equitable resolution.</p>

                </div>
            </div>
        </>
    )
}

export default Financial_Creditor