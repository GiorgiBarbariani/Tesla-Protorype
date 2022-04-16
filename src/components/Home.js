import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container> 
        <Section 
        title = "Model S"
        description= "Order Online for Touchless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText= "Custom order"
        rightBtnText = "EXISTING INVENTORY"
        />
        <Section 
         title = "Model Y"
         description= "Order Online for Touchless Delivery"
         backgroundImg = "model-y.jpg"
         leftBtnText= "Custom order"
         rightBtnText = "EXISTING INVENTORY"
         />
        <Section 
         title = "Model X"
         description= "Order Online for Touchless Delivery"
         backgroundImg = "model-x.jpg"
         leftBtnText= "Custom order"
         rightBtnText = "EXISTING INVENTORY"
        />

        <Section 
        title = "Solar Panels"
        description= "Order Online for Touchless Delivery"
        backgroundImg = "solar-panel.jpg"
        leftBtnText= "Custom order"
        rightBtnText = "EXISTING INVENTORY"
        
        />

<Section 
        title = "Solar Roof"
        description= "Produce Clean Energy From Your Roof"
        backgroundImg = "solar-roof.jpg"
        leftBtnText= "Order Now"
        rightBtnText = "Learn More"
        
        />
        <Section 
        title = "Accessories"
        backgroundImg = "accessories.jpg"
        leftBtnText= "Shop now"
        
        />
    </Container>
  )
}

export default Home


const Container = styled.div `
height: 100vh;
`