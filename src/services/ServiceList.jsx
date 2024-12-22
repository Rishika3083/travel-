import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Get accurate and up-to-date weather forecasts for your location or destination.',
    },
    
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc :  'Discover expert guides who can provide detailed and exciting tours of your chosen area.',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Personalize your travel experience with tailored packages and services that suit your needs.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
