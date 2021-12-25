import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import AboutSection from '../components/AboutSection/AboutSection';

function About() {
    return (
        <main className="main-content about-page">
            <PageHeader title="About us" />
            <AboutSection />
        </main>
    )
}

export default About;
