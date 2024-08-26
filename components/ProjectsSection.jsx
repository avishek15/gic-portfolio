import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection = () => {
  const ProjectsData = [
    {
      id: 1,
      title: 'Sentiment Analysis',
      description:
        'Our Sentiment Analysis service uses advanced natural language processing techniques to determine the emotional tone behind text data. It helps businesses understand customer feedback, social media sentiment, and market trends, enabling data-driven decisions.',
      image: '/images/Sentiment-analysis.jpg',
      tag: ['AI', 'NLP', 'Data Analytics', 'Customer Insights'],
      gitUrl: 'https://github.com/avishek15/Sentiment-with-Neural-network',
    },
    {
      id: 2,
      title: 'RAG-based Document Question Answering',
      description:
        "Our RAG-based Document Question Answering system leverages Retrieval-Augmented Generation (RAG) to provide accurate and context-aware answers to queries based on document content. It's ideal for knowledge bases and customer support.",
      image: '/images/RAG-document-text.png',
      tag: ['AI', 'NLP', 'Document Processing', 'Customer Support'],
      gitUrl: 'https://github.com/avishek15/AI_document',
    },
    {
      id: 3,
      title: 'Stock Analysis Dashboard',
      description:
        'Our Stock Analysis Dashboard offers historical data analysis for financial markets. It uses advanced algorithms to predict market trends and help investors make informed decisions.',
      image: '/images/stock-dashboard.jpg',
      tag: ['FinTech', 'Data Analytics', 'Investment', 'Market Insights'],
      gitUrl: 'https://github.com/avishek15/StockDashboard',
    },
    {
      id: 4,
      title: 'Recommendation Engine with Vectors',
      description:
        'Our Recommendation Engine uses vector-based machine learning models to provide personalized recommendations. It analyzes user behavior and preferences to suggest products, services, or content that match individual interests.',
      image: '/images/vector_database.jpg',
      tag: [
        'AI',
        'Machine Learning',
        'Recommendation Systems',
        'Personalization',
      ],
      gitUrl: 'https://github.com/avishek15/ChromaDB_test',
    },
  ];

  return (
    <>
      <h2 className="text-3xl text-white-100 font-bold mb-4" id="projects">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={project.tag}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
