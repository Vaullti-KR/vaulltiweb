import React from 'react'
import Icon1 from '../../images/img8.svg'
import Icon2 from '../../images/img11.svg'
import Icon3 from '../../images/img10.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Blockchain</ServicesH2>
                    <ServicesP>Write physical objects to established blockchains</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Object Custodian</ServicesH2>
                    <ServicesP>Tracking and secuirty for manufacturable digital objects</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Vaullti Platform</ServicesH2>
                    <ServicesP>Bidding driven marketplace for production of digital/physical objects</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
