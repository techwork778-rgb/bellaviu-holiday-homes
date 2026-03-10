"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import {
  PlaceOutlined,
  PhoneOutlined,
  EmailOutlined,
  AccessTimeOutlined,
} from "@mui/icons-material";
import Breadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import Career from "@/components/Career/Career";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact-us/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    { icon: <PlaceOutlined />, label: "Address", value: "B2B Tower, Office 1515, Business Bay, Dubai" },
    { icon: <PhoneOutlined />, label: "Phone", value: "+971 4570 1618" },
    { icon: <EmailOutlined />, label: "Email", value: "reservation@bellaviuholidayhomes.com" },
    // { icon: <AccessTimeOutlined />, label: "Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
  ];

  const sxStyles = {
    sectionBg: { bgcolor: "#f8fafc", py: { xs: 8, md: 12 } },
    headerText: { color: "#1e293b", fontWeight: 700, mb: 2 },
    bodyText: { color: "#64748b", mb: 4 },
    card: { p: { xs: 3, md: 5 }, borderRadius: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.04)", height: "100%" },
    input: {
      "& .MuiOutlinedInput-root": {
        borderRadius: 3,
        "&.Mui-focused fieldset": { borderColor: "#9c6c69" },
      },
      "& .MuiInputLabel-root.Mui-focused": { color: "#9c6c69" },
    },
    submitBtn: {
      bgcolor: "#9c6c69",
      py: 1.5,
      borderRadius: 3,
      fontSize: "1rem",
      textTransform: "none",
      "&:hover": { bgcolor: "#7d5654" },
    },
    iconBox: { color: "#9c6c69", mr: 2, display: "flex", alignItems: "center" }
  };

  return (
    <>
      <Breadcrumbs title="Contact Us" image={"/skyline.jpg"} />

      {/* 1️⃣ Intro Section */}
      <Box sx={{ py: 8, textAlign: "center", px: 2 }}>
        <Typography variant="h3" sx={sxStyles.headerText} data-aos="fade-down">
          Let's Start the Conversation
        </Typography>
        <Typography variant="body1" sx={{ ...sxStyles.bodyText, maxWidth: 600, mx: "auto" }}>
          Whether you're looking for a luxury getaway or professional property management, our team is here to assist you 24/7.
        </Typography>
        <Box sx={{ width: 60, height: 3, bgcolor: "#9c6c69", mx: "auto", borderRadius: 2 }} />
      </Box>

      {/* 2️⃣ Contact Grid */}
      <Box sx={sxStyles.sectionBg}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left: Form */}
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Paper sx={sxStyles.card}>
                <Typography variant="h5" sx={{ ...sxStyles.headerText, mb: 4 }}>Send us a Message</Typography>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField 
                        fullWidth label="Full Name" name="name" 
                        value={formData.name} onChange={handleChange} 
                        required sx={sxStyles.input} 
                    />
                    <TextField 
                        fullWidth label="Email Address" name="email" type="email" 
                        value={formData.email} onChange={handleChange} 
                        required sx={sxStyles.input} 
                    />
                    <TextField 
                        fullWidth label="How can we help?" name="message" multiline rows={4} 
                        value={formData.message} onChange={handleChange} 
                        required sx={sxStyles.input} 
                    />
                    <Box>
                        <Button
                            fullWidth variant="contained" type="submit"
                            disabled={loading} sx={sxStyles.submitBtn}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                        </Button>
                        <Typography variant="caption" sx={{ display: "block", mt: 2, color: "#94a3b8", textAlign: "center" }}>
                            We usually respond within 24 hours.
                        </Typography>
                    </Box>
                  </Stack>
                </form>
              </Paper>
            </Grid>

            {/* Right: Info & Map */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Stack spacing={4}>
                {/* Contact Details Card */}
                <Paper sx={{ ...sxStyles.card, p: 4 }}>
                  <Grid container spacing={3}>
                    {contactDetails.map((item, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                          <Box sx={sxStyles.iconBox}>{item.icon}</Box>
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1e293b" }}>{item.label}</Typography>
                            <Typography variant="body2" sx={{ color: "#64748b" }}>{item.value}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>

                {/* Map Container */}
                <Box sx={{ 
                    borderRadius: 4, overflow: "hidden", 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)", 
                    border: "1px solid #e2e8f0", height: 350 
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3647776541243!2d55.284774899999995!3d25.190918099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6824f0311909%3A0x65950f712e2bef2!2sB2B%20Office%20Tower%20-%20Marasi%20Dr%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1773145270627!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Toaster position="top-center" toastOptions={{ duration: 5000, style: { borderRadius: '10px', background: '#333', color: '#fff' } }} />
      <Box sx={{ mt: -1 }}> <Career /> </Box>
    </>
  );
};

export default ContactPage;