import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Helmet>
        {/* Default meta tags for all pages */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Body Fat Calculator - Calculate your body fat percentage accurately. Get personalized health insights, BMI calculation, and wellness tips." />
        <meta name="keywords" content="body fat calculator, BMI calculator, health calculator, fitness tools, wellness guide, healthy living" />
        <meta name="author" content="Health and Wellness Hub" />
        
        {/* Default title (will be overridden by specific pages) */}
        <title>Body Fat Calculator | Health and Wellness Hub</title>
        
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Body Fat Calculator" />
        <meta property="og:title" content="Body Fat Calculator | Health and Wellness Hub" />
        <meta property="og:description" content="Calculate your body fat percentage accurately. Get personalized health insights and wellness tips." />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Body Fat Calculator | Health and Wellness Hub" />
        <meta name="twitter:description" content="Calculate your body fat percentage accurately. Get personalized health insights and wellness tips." />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://bodyfat-calculator.com" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;