import React from 'react';
import './portofolio.css';
import profileImage from './profile.jpg'; // Ensure you have a profile.jpg in the src folder

const Portfolio = () => {
  return (
    <div className="portfolio fade-in">
      <header className="header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Samson</h1>
        <p>ITB Stikom Bali</p>
        <p>Buruan, Blahbatuh, Gianyar</p>
      </header>
      <section className="about">
        <h2>Tentang Saya</h2>
        <p>Saya adalah seorang pengembang yang bersemangat dengan bakat untuk menciptakan aplikasi web yang indah dan fungsional. Saya suka bekerja dengan teknologi modern dan terus meningkatkan keterampilan saya.</p>
      </section>
    </div>
  );
};

export default Portfolio;
