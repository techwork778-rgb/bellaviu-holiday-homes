import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Box,
  Avatar,
  Container as MuiContainer
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

// Components
import ListForm from "@/components/ListForm/ListForm";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import ListSection from "@/components/ListSection/listsection";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrustedHolidayHome.css";

const faqs = [
  { question: "What makes Bellaviu’s Dubai holiday homes unique?", answer: "Our vacation rentals in Dubai offer spacious living, luxurious interiors, and prime locations at affordable prices. Unlike hotels, our homes provide a personalized experience with the comfort and privacy of a real home." },
  { question: "Are Bellaviu vacation rentals in Dubai safe?", answer: "Yes, all our vacation rentals are located in private, gated communities with 24/7 security surveillance, ensuring a secure and worry-free stay for you and your family." },
  { question: "What is included in Bellaviu’s Dubai holiday homes?", answer: "Our homes are fully furnished with modern amenities, including high-speed Wi-Fi, fully equipped kitchens, and cozy living spaces. Additional services like housekeeping and concierge are also available." },
  { question: "How do I book a vacation rental in Dubai with Bellaviu?", answer: "Booking is simple! Browse our collection of Dubai holiday homes, select your preferred property, choose your dates, and book instantly through our secure online platform." },
  { question: "Can I cancel or modify my reservation?", answer: "Yes, we offer flexible cancellation policies. Please refer to the specific property’s terms and conditions during the booking process for details." },
  { question: "Are Bellaviu vacation rentals in Dubai family-friendly?", answer: "Absolutely! Our holiday homes are designed with families in mind, offering spacious layouts, safe environments, and proximity to family-friendly attractions in Dubai." },
  { question: "Do you provide special deals for longer stays?", answer: "Yes, we offer exclusive discounts for extended stays in our Dubai vacation rentals. Contact our team or check our 'Special Offers' section for details." },
  { question: "What attractions are close to Bellaviu holiday homes?", answer: "Our properties for vacation rentals are strategically located near Dubai’s top attractions, such as Burj Khalifa, Palm Jumeirah, Dubai Marina, and major shopping and dining hubs." },
  { question: "Can I request additional services during my stay?", answer: "Yes, we provide add-on services like private chefs, car rentals, and personalized concierge assistance to make your stay even more special." },
  { question: "Why should I choose Bellaviu over a hotel?", answer: "With Bellaviu, you get the comfort of spacious, beautifully designed homes, the privacy of secure communities, and the experience of living like a local – all at a fraction of the cost of luxury hotels." }
];

const steps = [
  { number: 1, title: "Property Check", description: "We inspect your property and ensure it meets our standards for quality and safety." },
  { number: 2, title: "Revenue Insights", description: "Estimate potential earnings based on market trends agreement and begin our partnership." },
  { number: 3, title: "Contract", description: "Sign the agreement and begin our partnership appeal with expert interior design." },
  { number: 4, title: "Design", description: "Boost your property's appeal with expert interior design and preparation services." },
  { number: 5, title: "Photos & Pricing", description: "List your property on top platforms with professional photos and optimized pricing." },
  { number: 6, title: "Guest Support", description: "Ensure smooth check-ins and provide 24/7 guest assistance with ease and convenience." },
  { number: 7, title: "Portals & Payouts", description: "Track performance and receive monthly payouts with ease and convenience." },
];

const logos = ["/Bagyut.png", "/Expedia.png", "/booking.com_.png", "/extral.png", "/airbnb.png"];

const HolidayHomeOperator = () => {
  const [counters, setCounters] = useState({ properties: 0, clients: 0, years: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        properties: Math.min(prev.properties + 10, 1000),
        clients: Math.min(prev.clients + 5, 500),
        years: Math.min(prev.years + 1, 10),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="holiday-operator-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <MuiContainer maxWidth="lg" className="hero-inner">
          <Typography variant="h1" className="hero-title">
            Property Management <br /> <span>Services in Dubai</span>
          </Typography>
          <Typography className="hero-subtitle">
            Maximize your rental potential with Dubai's most trusted holiday home partner. 
            Showcase your property to millions of premium travelers worldwide.
          </Typography>
          <Button href="#listForm" className="hero-cta">
            List Your Property
          </Button>
        </MuiContainer>
      </section>

      {/* 2. LOGO SLIDER (Unmodified logic/style as per Rule 5) */}
      <div style={{ backgroundColor: "#fff", padding: "40px 0" }}>
        <Slider {...logoSettings}>
          {logos.map((logo, index) => (
            <div key={index} style={{ padding: "0 10px", display: "flex", justifyContent: "center" }}>
              <img src={logo} alt={`Logo ${index + 1}`} style={{ width: "150px", height: "150px", objectFit: "contain", margin: "0 auto", display: "block" }} />
            </div>
          ))}
        </Slider>
      </div>

      {/* 3. TRUSTED OPERATOR SECTION */}
      <section className="trusted-operator-section">
        <MuiContainer maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" className="section-heading">
                Trusted Holiday Home <br /> Operator in Dubai
              </Typography>
              <Typography variant="body1" className="section-description">
                BellaViu Holiday Homes Dubai offers comprehensive property management solutions designed to optimize value, streamline operations, and enhance guest experiences. From individual apartments to expansive portfolios.
              </Typography>
              
              <Grid container spacing={2} className="checkmark-grid">
                {[
                  ["High-Rise Towers", "Multi-Floor Portfolios", "Single Apartments", "Single Luxury Villas", "Townhouses"],
                  ["Hotels & Resorts", "Prime Location Properties", "Real Estate Developers", "Family Offices"],
                  ["REITs", "Vacation Home Investors"]
                ].map((list, idx) => (
                  <Grid item xs={12} sm={4} key={idx}>
                    <ul className="luxury-list">
                      {list.map((item, i) => (
                        <li key={i}><CheckCircleOutlineIcon className="check-icon" /> {item}</li>
                      ))}
                    </ul>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="image-frame">
                <img src="/Dubai.jpg" alt="Dubai skyline" className="trusted-image-modern" />
              </div>
            </Grid>
          </Grid>
        </MuiContainer>
      </section>

      {/* 4. CTA BAR */}
      <section className="premium-cta-bar">
        <MuiContainer maxWidth="lg">
          <Box className="cta-flex-container">
            <Box>
              <Typography variant="h4" className="cta-title">Ready to maximize your earnings?</Typography>
              <Typography variant="body1" className="cta-subtitle">Your property, our expertise—profit with peace of mind.</Typography>
            </Box>
            <Button href="#listForm" className="cta-btn-outline">List with us</Button>
          </Box>
        </MuiContainer>
      </section>

      {/* 5. WHAT MAKES US BEST SECTION */}
     <section className="premium-choice-section">
  <Container>
    <Grid container spacing={6} alignItems="center">
      {/* Visual Column */}
      <Grid item xs={12} md={6}>
        <div className="luxury-video-wrapper">
          <div className="image-container">
            <img
              src="https://www.deluxehomes.com/wp-content/uploads/2024/01/Deluxe-Holiday-Homes-Property-Management-Video-Thumbnail-1024x550.png"
              alt="Management Preview"
              className="premium-image"
            />
            <div className="play-button-overlay">
              <div className="play-icon-pulse">
                <PlayCircleOutlineIcon sx={{ fontSize: 80 }} />
              </div>
            </div>
          </div>
          {/* Subtle decorative element for luxury feel */}
          <div className="decorative-accent"></div>
        </div>
      </Grid>

      {/* Content Column */}
      <Grid item xs={12} md={6}>
        <div className="content-wrapper">
          <Typography variant="overline" className="section-label">
            Our Philosophy
          </Typography>
          <Typography variant="h2" className="luxury-heading">
            What Makes Us <br />
            <span className="accent-text">The Best Choice</span>
          </Typography>
          
          <Typography className="luxury-description">
            BellaViu Holiday Homes' top-tier property management can easily
            be defined in two words:
          </Typography>

          <div className="feature-grid">
            <div className="feature-pill">
              <span className="check-mark">✔</span> Transparent
            </div>
            <div className="feature-pill">
              <span className="check-mark">✔</span> Simple
            </div>
          </div>

          <Typography className="luxury-description-secondary">
            We exemplify a commitment to honesty, clarity, and
            straightforwardness in all interactions while ensuring a
            hassle-free experience for property owners.
          </Typography>

          <Link href="/contact-us" passHref>
            <button className="premium-cta-btn">
              Contact Us
            </button>
          </Link>
        </div>
      </Grid>
    </Grid>
  </Container>
</section>

      <ListSection />

      {/* 6. COUNTER SECTION */}
      <section className="modern-stats-section">
        <MuiContainer maxWidth="lg">
          <Row>
            {[
              { val: counters.properties, label: "Properties Managed" },
              { val: counters.clients, label: "Happy Clients" },
              { val: counters.years, label: "Years of Experience" }
            ].map((stat, i) => (
              <Col md={4} key={i}>
                <div className="stat-card">
                  <Typography variant="h2" className="stat-number">{stat.val}+</Typography>
                  <Typography variant="subtitle1" className="stat-label">{stat.label}</Typography>
                </div>
              </Col>
            ))}
          </Row>
        </MuiContainer>
      </section>

      {/* 7. 7-STEPS PROCESS SECTION */}
      <section className="steps-process-section">
        <MuiContainer maxWidth="lg">
          <Box textAlign="center" mb={10}>
            <Typography variant="overline" className="text-accent">The Journey</Typography>
            <Typography variant="h2" className="section-heading">Your Seamless Journey</Typography>
          </Box>

          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div key={step.number} className="step-card">
                <div className="step-header">
                  <Avatar className="step-circle">{step.number}</Avatar>
                  {index < steps.length - 1 && <div className="step-connector"></div>}
                </div>
                <Typography variant="h6" className="step-title">{step.title}</Typography>
                <Typography variant="body2" className="step-desc">{step.description}</Typography>
              </div>
            ))}
          </div>
        </MuiContainer>
      </section>

      {/* 8. LIST FORM SECTION */}
      <section id="listForm" className="form-section-wrapper">
        <MuiContainer maxWidth="md">
          <div className="glass-form-container">
            <ListForm />
          </div>
        </MuiContainer>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="modern-faq-section">
        <MuiContainer maxWidth="md">
          <Typography variant="h2" className="section-heading text-center mb-5">Frequently Asked Questions</Typography>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Accordion key={index} className="custom-accordion">
                <AccordionSummary expandIcon={<ExpandMoreIcon className="accent-icon" />}>
                  <Typography className="faq-question">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </MuiContainer>
      </section>
    </div>
  );
};

export default HolidayHomeOperator;