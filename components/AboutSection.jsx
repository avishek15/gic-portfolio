'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import AboutTabButton from '@/components/AboutTabButton';

const AboutSection = () => {
  const TAB_DATA = [
    {
      title: 'Comprehensive IT Solutions',
      id: 'Comprehensive IT Solutions',
      content: (
        <ul className="list-disc pl-2">
          <li>IT Strategy & Consulting</li>
          <li>Cybersecurity Services</li>
          <li>Managed IT Services</li>
          <li>Cloud Solutions</li>
          <li>Network Design & Implementation</li>
          <li>Software Development</li>
          <li>Data Backup & Recovery</li>
          <li>IT Support & Helpdesk</li>
          <li>Hardware Procurement & Management</li>
          <li>Training & Development</li>
        </ul>
      ),
    },
    {
      title: 'Complete Cloud Product Suite',
      id: 'Complete Cloud Product Suite',
      content: (
        <ul className="list-disc pl-2">
          <li>Cloud Guardian Storage</li>
          <li>Guardian Cloud Compute</li>
          <li>Cloud Sync Backup</li>
          <li>Insight Cloud Analytics</li>
          <li>Guardian Cloud Database</li>
          <li>Cloud Guard Security Suite</li>
          <li>Custom Cloud Solutions</li>
          <li>Guardian Cloud Management Suite</li>
          <li>Cloud Collab Suite</li>
          <li>Secure Cloud VPN</li>
        </ul>
      ),
    },
    {
      title: 'AI Consultation and Deployment',
      id: 'AI Consultation and Deployment',
      content: (
        <ul className="list-disc pl-2">
          <li>AI Strategy & Consulting</li>
          <li>Machine Learning Model Development</li>
          <li>Deep Learning Solutions</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Computer Vision Technologies</li>
          <li>AI-Driven Data Analytics</li>
          <li>Predictive Analytics</li>
          <li>AI Integration & Deployment</li>
          <li>AI Training & Workshops</li>
          <li>Custom AI Solutions</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState('Comprehensive IT Solutions');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-4 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/futuristic_3D_ARVR.jpg"
          width={500}
          height={500}
          alt="3D_ARVR"
          className="rounded-3xl"
        />
        <div className="mt-2 md:mt-0 flex flex-col h-full text-justify">
          <h2 className="text-4xl font-bold text-white-100 mb-4 mt-4">
            About Us
          </h2>
          <p className="text-base md:text-lg">
            Guardian Info Consultants is a dynamic and innovative software
            development company committed to providing cutting-edge solutions
            tailored to meet the unique needs of its clients.
          </p>
          <div className="flex flex-row mt-8">
            <AboutTabButton
              selectTab={() => handleTabChange('Comprehensive IT Solutions')}
              active={tab === 'Comprehensive IT Solutions'}
            >
              Comprehensive IT Solutions
            </AboutTabButton>
            <AboutTabButton
              selectTab={() => handleTabChange('Complete Cloud Product Suite')}
              active={tab === 'Complete Cloud Product Suite'}
            >
              Complete Cloud Product Suite
            </AboutTabButton>
            <AboutTabButton
              selectTab={() =>
                handleTabChange('AI Consultation and Deployment')
              }
              active={tab === 'AI Consultation and Deployment'}
            >
              AI Consultation and Deployment
            </AboutTabButton>
            {/* <span className='mr-3 font-semibold hover:text-white text-white-100 border-b border-white-300'>Comprehensive IT Solutions</span>
                  <span className='mr-3 font-semibold hover:text-white text-white-100'>Complete Cloud Product Suite</span>
                  <span className='mr-3 font-semibold hover:text-white text-white-100'>AI Consultation and Deployment</span> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
