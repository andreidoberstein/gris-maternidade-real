
import React from 'react';
import Navbar from '@/components/Navbar';
import BlogHeader from '@/components/BlogHeader';
import ArticlesList from '@/components/ArticlesList';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHeader />
      <ArticlesList />
      <Footer />
    </div>
  );
};

export default Blog;
