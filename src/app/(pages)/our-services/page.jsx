"use client";
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  Box,
  Fade,
  Slide,
  Zoom,
  alpha,
  Stack
} from '@mui/material';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ListSection from "@/components/ListSection/listsection";
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function OurServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const accentColor = "rgb(175, 127, 127)";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: ApartmentIcon,
      title: "Luxury Apartments",
      description: "Premium high-rise apartments with stunning city views, modern amenities, and 24/7 concierge services.",
      features: ["Smart Home Technology", "Infinity Pool", "Gym & Spa"],
      gradient: `linear-gradient(135deg, ${accentColor} 0%, #4a3333 100%)`,
      delay: 400
    },
    {
      icon: MapsHomeWorkIcon,
      title: "Designer Studios",
      description: "Thoughtfully designed compact spaces that maximize comfort and style for the modern professional.",
      features: ["Flexible Layouts", "Premium Finishes", "Co-working Spaces"],
      gradient: `linear-gradient(135deg, ${alpha(accentColor, 0.8)} 0%, ${accentColor} 100%)`,
      delay: 600
    },
    {
      icon: VillaIcon,
      title: "Executive Villas",
      description: "Exclusive family estates with private pools, landscaped gardens, and unparalleled privacy.",
      features: ["Private Pool", "Landscaped Gardens", "Multi-car Garage"],
      gradient: `linear-gradient(135deg, #2d2d2d 0%, ${accentColor} 100%)`,
      delay: 800
    }
  ];

  return (
    <Box sx={{ bgcolor: '#fff' }}>
      <Breadcrumb image={"/listproperty.jpeg"} title={"Our Services"} />

      {/* 1️⃣ SERVICES CARDS SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(180deg, #fdfbfb 0%, #fff 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Fade in={isVisible} timeout={800}>
              <Typography variant="overline" sx={{ color: accentColor, fontWeight: 700, letterSpacing: 2 }}>
                Our Portfolio
              </Typography>
            </Fade>
            <Fade in={isVisible} timeout={1000}>
              <Typography variant="h2" sx={{ 
                fontWeight: 800, 
                mt: 1, 
                mb: 3, 
                fontSize: { xs: '2.2rem', md: '3rem' },
                color: '#1a1a1a'
              }}>
                Exclusive Property Collections
              </Typography>
            </Fade>
            <Fade in={isVisible} timeout={1200}>
              <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary', fontSize: '1.1rem' }}>
                Each category is carefully curated to offer unmatched quality, prime locations, and world-class amenities that define luxury living in Dubai.
              </Typography>
            </Fade>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom in={isVisible} style={{ transitionDelay: `${service.delay}ms` }}>
                  <Card sx={styles.serviceCard}>
                    <Box sx={{ ...styles.iconContainer, background: service.gradient }}>
                      <service.icon sx={{ fontSize: 40, color: '#fff' }} />
                    </Box>
                    
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
                      {service.title}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7, minHeight: '80px' }}>
                      {service.description}
                    </Typography>

                    <Box component="ul" sx={styles.featureList}>
                      {service.features.map((feature, i) => (
                        <Stack component="li" direction="row" spacing={1.5} key={i} sx={{ mb: 1.5, alignItems: 'center' }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: accentColor }} />
                          <Typography variant="body2" sx={{ fontWeight: 500, color: '#444' }}>{feature}</Typography>
                        </Stack>
                      ))}
                    </Box>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 2️⃣ LIST SECTION (Visual Integration) */}
      <Box sx={{ py: 4, borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <ListSection />
      </Box>

      {/* 3️⃣ HERO / FINAL CTA SECTION */}
      {/* <Box sx={styles.heroWrapper}>
        <Box sx={styles.heroOverlay} />
        
        <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Typography variant="h3" sx={styles.heroMainTitle}>
                Redefine Your
              </Typography>
              <Typography variant="h" component="span" sx={{ ...styles.heroMainTitle, color: accentColor, display: 'block', mb: 3 }}>
                Living Experience
              </Typography>
            </Box>
          </Fade>

          <Slide in={isVisible} direction="up" timeout={1200}>
            <Typography variant="h5" sx={styles.heroSubtitle}>
              Discover extraordinary properties that blend luxury, comfort, and innovation in the heart of Dubai's most prestigious locations.
            </Typography>
          </Slide>

          <Zoom in={isVisible} timeout={1500}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              justifyContent="center" 
              sx={{ mt: 5 }}
            >
              <Link href="/hotel-filter" passHref style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" sx={styles.btnPrimary}>
                  Explore Premium Properties
                </Button>
              </Link>
              <Link href="/contact-us" passHref style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="large" sx={styles.btnSecondary}>
                  Schedule Consultation
                </Button>
              </Link>
            </Stack>
          </Zoom>
        </Container>
      </Box> */}
    </Box>
  );
}

/** * UI Styles Object for cleaner component readability
 */
const styles = {
  serviceCard: {
    height: '100%',
    borderRadius: '20px',
    p: 5,
    bgcolor: '#fff',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-12px)',
      boxShadow: '0 20px 60px rgba(175, 127, 127, 0.15)',
      borderColor: alpha('rgb(175, 127, 127)', 0.2),
    }
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 4,
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
  featureList: {
    listStyle: 'none',
    p: 0,
    m: 0,
    mt: 'auto',
    pt: 3,
    borderTop: '1px solid #f0f0f0'
  },
  heroWrapper: {
    position: 'relative',
    background: `url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: { md: 'fixed' },
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    py: 10,
    overflow: 'hidden'
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
    zIndex: 1
  },
  heroMainTitle: {
    fontWeight: 900,
    fontSize: { xs: '2.8rem', md: '4.5rem', lg: '5.5rem' },
    color: '#fff',
    lineHeight: 1.1,
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  heroSubtitle: {
    color: alpha('#fff', 0.85),
    maxWidth: 650,
    mx: 'auto',
    fontWeight: 300,
    fontSize: { xs: '1.1rem', md: '1.3rem' },
    lineHeight: 1.8,
    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
  },
  btnPrimary: {
    bgcolor: 'rgb(175, 127, 127)',
    color: '#fff',
    px: 5,
    py: 2,
    fontSize: '1rem',
    fontWeight: 700,
    borderRadius: '50px',
    textTransform: 'none',
    boxShadow: '0 10px 25px rgba(175, 127, 127, 0.4)',
    '&:hover': {
      bgcolor: '#4a3333',
      transform: 'scale(1.05)'
    }
  },
  btnSecondary: {
    borderColor: 'rgb(175, 127, 127)',
    color: '#fff',
    borderWidth: '2px',
    px: 5,
    py: 2,
    fontSize: '1rem',
    fontWeight: 700,
    borderRadius: '50px',
    textTransform: 'none',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      borderColor: '#fff',
      bgcolor: 'rgba(255,255,255,0.1)',
      borderWidth: '2px',
    }
  }
};