"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Paper,
  Stack,
  Button,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./career.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

function Page() {
  const [loading, setLoading] = useState(false);

  const jobDetails = [
    { title: "Business Development Manager", description: "Seeking a passionate manager to drive growth and property acquisitions in the Dubai market." },
    { title: "Guest Relation Executive", description: "Ensure five-star guest experiences, managing check-ins and on-site requirements with excellence." },
    { title: "Property Onboarding Manager", description: "Streamline the transition of new properties into our luxury portfolio with meticulous attention to detail." },
    { title: "Sales Manager", description: "Lead our high-performing sales team to exceed targets and expand our global client base." },
    { title: "Reservation Manager", description: "Oversee the booking ecosystem, optimizing occupancy and maintaining premium service standards." },
  ];

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", position: "", resume: null },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      position: Yup.string().required("Please select a position"),
      resume: Yup.mixed().required("Please upload your resume"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.keys(values).forEach(key => formData.append(key, values[key]));

      setLoading(true);
      try {
        const response = await fetch("/api/career", { method: "POST", body: formData });
        if (response.ok) {
          toast.success("Application submitted successfully!");
          resetForm();
        } else {
          toast.error("Submission failed. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box className="career-page-wrapper">
      <Toaster position="top-center" />
      
      {/* 1️⃣ HERO SECTION */}
      <Box className="career-hero">
        <Container maxWidth="md">
          <Typography variant="h2" className="hero-title">Join Our Team</Typography>
          {/* <Typography variant="body1" className="hero-subtitle">
            Experience the pinnacle of hospitality. We are looking for extraordinary talent 
            to redefine luxury holiday homes in Dubai.
          </Typography> */}
          <Box className="accent-line" />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={6}>
          {/* 2️⃣ LEFT SIDE: JOB OPENINGS */}
          <Grid item xs={12} md={6}>
            <Box className="section-header">
              <Typography variant="h4" className="section-title">Current Openings</Typography>
              <Typography variant="body2" className="section-desc">
                Explore our available roles or send your resume to <span className="brand-link">reservation@bellaviuholidayhomes.com</span>
              </Typography>
            </Box>
            
            <Stack spacing={2} sx={{ mt: 4 }}>
              {jobDetails.map((job, index) => (
                <Accordion key={index} className="custom-accordion">
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#9c6c69' }} />}>
                    <WorkOutlineIcon sx={{ mr: 2, fontSize: 20, color: '#9c6c69' }} />
                    <Typography className="job-title-text">{job.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="job-description">{job.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Grid>

          {/* 3️⃣ RIGHT SIDE: APPLICATION FORM */}
          <Grid item xs={12} md={6}>
            <Paper className="form-card" elevation={0}>
              <Typography variant="h5" className="form-title">Apply For A Job</Typography>
              <Typography variant="body2" className="form-subtitle">Submit your details and our HR team will review your profile.</Typography>
              
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3} sx={{ mt: 3 }}>
                  <TextField
                    fullWidth label="Full Name" name="name" variant="outlined"
                    value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    className="custom-input"
                  />

                  <TextField
                    fullWidth label="Email Address" name="email" variant="outlined"
                    value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    className="custom-input"
                  />

                  <Box>
                    <PhoneInput
                      country={"ae"}
                      value={formik.values.phone}
                      onChange={(value) => formik.setFieldValue("phone", value)}
                      containerClass="custom-phone-container"
                      inputClass="custom-phone-input"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <Typography className="error-text">{formik.errors.phone}</Typography>
                    )}
                  </Box>

                  <FormControl fullWidth variant="outlined" className="custom-input" error={formik.touched.position && Boolean(formik.errors.position)}>
                    <InputLabel>Position Applying For</InputLabel>
                    <Select
                      name="position" label="Position Applying For"
                      value={formik.values.position} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    >
                      {jobDetails.map((job, i) => (
                        <MenuItem key={i} value={job.title}>{job.title}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Box className="file-upload-wrapper">
                    <Button
                      variant="outlined" component="label" fullWidth
                      startIcon={<CloudUploadIcon />} className="file-btn"
                    >
                      {formik.values.resume ? formik.values.resume.name : "Upload Resume (PDF/DOC)"}
                      <input
                        type="file" hidden accept=".pdf,.doc,.docx"
                        onChange={(event) => formik.setFieldValue("resume", event.currentTarget.files[0])}
                      />
                    </Button>
                    {formik.touched.resume && formik.errors.resume && (
                      <Typography className="error-text">{formik.errors.resume}</Typography>
                    )}
                  </Box>

                  <Button
                    type="submit" variant="contained" className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Apply Now"}
                  </Button>
                  
                  <Typography className="helper-footer">
                    We will contact shortlisted candidates within 48 hours.
                  </Typography>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Page;