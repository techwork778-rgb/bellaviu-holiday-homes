import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import { Typography, Rating, Avatar, Box, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const testimonials = [
        {
            rating: 5,
            review: "Bellaviu gave us everything we dreamed of and more. The space, comfort, and attention to detail made our vacation unforgettable. It felt like a home, but better!",
            name: "Sarah M.",
            location: "United Kingdom",
            avatar: "/api/placeholder/64/64"
        },
        {
            rating: 5,
            review: "Our Bellaviu stay was perfect for our family of five. The kids loved the space, and we loved the privacy and local feel. It was way better than any hotel we've stayed in before.",
            name: "Ahmed R.",
            location: "Saudi Arabia",
            avatar: "/api/placeholder/64/64"
        },
        {
            rating: 5,
            review: "I felt completely at ease knowing we were in a gated community with 24/7 security. The home was beautifully designed, and every detail was flawless.",
            name: "Laura T.",
            location: "USA",
            avatar: "/api/placeholder/64/64"
        },
        {
            rating: 5,
            review: "For the price we paid, the experience was incredible. Spacious, clean, and luxurious – everything was beyond our expectations. We’ll be back!",
            name: "Priya L.",
            location: "India",
            avatar: "/api/placeholder/64/64"
        }
    ];

    const CustomPrevArrow = ({ onClick }) => (
        <button onClick={onClick} className="bv-nav-arrow bv-prev" aria-label="Previous">
            <ChevronLeft size={20} strokeWidth={2} />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button onClick={onClick} className="bv-nav-arrow bv-next" aria-label="Next">
            <ChevronRight size={20} strokeWidth={2} />
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        dotsClass: "slick-dots bv-custom-dots",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false, // Cleaner UX for mobile touch
                }
            }
        ]
    };

    return (
        <section className="bv-testimonial-section">
            <Container className="bv-slider-outer-container">
                <Box className="bv-section-header">
                    <Typography component="span" className="bv-subtitle">
                        Guest Experiences
                    </Typography>
                    <Typography variant="h2" className="bv-main-title">
                        What Our Guests <span className="bv-accent-text">Say</span>
                    </Typography>
                </Box>

                <Box className="bv-slider-relative-wrapper">
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="bv-slide-item">
                                <Box className="bv-luxury-card">
                                    <Box className="bv-card-upper">
                                        <Quote className="bv-quote-mark" size={40} strokeWidth={1} />
                                        <Rating 
                                            value={item.rating} 
                                            readOnly 
                                            className="bv-star-rating"
                                        />
                                        <Typography className="bv-review-content">
                                            "{item.review}"
                                        </Typography>
                                    </Box>

                                    <Box className="bv-card-lower">
                                        <Box className="bv-user-info">
                                            <Avatar 
                                                src={item.avatar} 
                                                className="bv-author-avatar"
                                            />
                                            <Box>
                                                <Typography className="bv-author-name">
                                                    {item.name}
                                                </Typography>
                                                <Typography className="bv-author-loc">
                                                    {item.location}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </section>
    );
};

export default TestimonialSlider;