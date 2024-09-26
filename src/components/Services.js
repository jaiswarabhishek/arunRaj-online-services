import { HoverEffect } from "./ui/card-hover-effect";

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-8 md:mt-10">
      <h1 className="md:text-4xl text-3xl md:mt-0 mt-4 font-bold">Our Services</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Pan Card",
    description: [
      "Online applications for new PAN cards",
      "Linking PAN with Aadhaar",
      "Corrections or Updates, Reprints, and e-PAN cards",
    ],
    link: "https://stripe.com",
    img: "/pan_card.jpg",
  },
  {
    title: "Aadhaar Card",
    description: [
      "Apply for a new Aadhaar card or update",
      "Address change, mobile number update, and biometric data correction.",
    ],
    link: "https://netflix.com",
    img: "/aadhaar_card.jpg",
  },
  {
    title: "Voter ID",
    description: [
      "Apply for a new Voter ID or update your existing information",
      "Name correction, and Address updates",
    ],
    link: "https://google.com",
    img: "/voter_id.png",
  },
  {
    title: "EPFO",
    description: [
      "Quick claims processing for EPF withdrawals, loans, and advances",
      "Facilitate UAN (Universal Account Number) generation and activation.",
    ],
    link: "https://google.com",
    img: "/epfo.jpg",
  },
  {
    title: "Ayushman Card",
    description: [
      "Apply for new application",
      "Assistance with documentation and form filling to ensure smooth processing.",
    ],
    link: "https://google.com",
    img: "/Ayushman-Card.png",
  },
  {
    title: "Passport",
    description: [
      "Online application for new passports and renewals.",
      "Assistance with documentation and form filling to ensure smooth processing.",
      "Guidance on passport verification and police clearance procedures",
    ],
    link: "https://google.com",
    img: "/passport.jpg",
  },

  {
    title: "Driving Licence",
    description: [
      "Online application for new learner's or permanent driving licences.",
      "Assistance with updating details like address or name changes",
      "Apply for international driving permits with proper guidance.",
    ],
    link: "https://google.com",
    img: "/driving_licence.jpg",
  },

  {
    title: "E-gazatte",
    description: [
      "Apply for name change publication in the official E-Gazette.",
      "Assistance with corrections or updates in gazette publications.",
    ],
    link: "https://google.com",
    img: "/gazatte.jpg",
  },

  {
    title: "Resume Building",
    description: [
      "Professionally crafted resumes tailored to your industry and role.",
      "Assistance with optimizing your resume for Applicant Tracking Systems (ATS).",
      "Personalized resume templates that highlight your key skills and achievements.",
    ],
    link: "https://google.com",
    img: "/resume.jpg",
  },
];
