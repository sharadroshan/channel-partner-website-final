import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import About from '../../components/about'
import Services from '../../components/Services'
import CounterSection from '../../components/counter'
import PricingPlan from '../../components/PricingPlan'
import TeamSection from '../../components/team'
import ContactSection from '../../components/ContactSection'
import BlogSection from '../../components/BlogSection'
import Client from '../../components/Client'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero/>
            <About/>
            <Services sClass={'hx-service-style-2'}/>
            <CounterSection/>
            <PricingPlan/>
            <TeamSection/>
            <ContactSection/>
            <BlogSection/>
            <Client/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;