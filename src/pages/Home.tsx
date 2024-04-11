import Section from '../components/Section'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Section
                title={'Model 3'}
                description={'Leasing starting at $349/month'}
                bgImg={'Homepage-Model-3-Desktop-LHD.jpeg'}
                LButton={'View Inventory'}
                RButton={'Custom Order'}
            />
               <Section
                title={'Model Y'}
                description={'Provkör gärna'}
                bgImg={'Homepage-Model-Y-Global-Desktop.jpeg'}
                LButton={'View Inventory'}
                RButton={'Custom Order'}
            />
              <Section
                title={'Model S'}
                description={'Provkör gärna'}
                bgImg={'Model-S-homepage-desktop.jpeg'}
                LButton={'View Inventory'}
                RButton={'Custom Order'}
            />
            <Section
                title={'Model X'}
                description={'Provkör gärna den finaste'}
                bgImg={'Homepage-Model-X-Desktop-LHD.jpeg'}
                LButton={'View Inventory'}
                RButton={'Custom Order'}
            />
              <Section
                title={'Solar Panels'}
                description={'Regna inte tack'}
                bgImg={'Homepage-SolarRoof-Desktop-Global.webp'}
                LButton={'View Inventory'}
                RButton={'Custom Order'}
            />
        </Container>
    )
}
export default Home

const Container = styled.div`
    margin-top: -10vh;
`
