// src/constants/index.js

import { Hammer, Ruler, Paintbrush, Layers, Wrench, ShieldCheck } from "lucide-react";
import { Instagram, Globe, Music2 } from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// export const testimonials = [
//   {
//     user: "Mark R.",
//     company: "Homeowner, Scotch Plains NJ",
//     image: user1,
//     text: "Jersey Wood Flooring did an amazing job refinishing our old oak floors. The dust-free sanding was a game changer — our home stayed clean, and the floors look brand new!",
//   },
//   {
//     user: "Lisa M.",
//     company: "Union County NJ",
//     image: user2,
//     text: "Professional, reliable, and detail-oriented. They installed new laminate flooring throughout our living room and it looks perfect. Highly recommend their work.",
//   },
//   {
//     user: "Anthony G.",
//     company: "Westfield NJ",
//     image: user3,
//     text: "Great craftsmanship and communication from start to finish. The team repaired damaged hardwood boards seamlessly — you can’t even tell which ones were replaced!",
//   },
// ];

export const businessServices = [
  {
    icon: <Hammer />,
    text: "Hardwood Floor Installation",
    description:
      "Expert installation of solid and engineered hardwood floors, ensuring a flawless, long-lasting finish for your home or business.",
  },
  {
    icon: <Layers />,
    text: "Laminate Floor Installation",
    description:
      "Durable, cost-effective laminate flooring options installed with precision — perfect for modern homes and high-traffic areas.",
  },
  {
    icon: <Paintbrush />,
    text: "Hardwood Floor Refinishing (Dust-Free)",
    description:
      "Breathe new life into your old floors with our dust-free sanding and refinishing service, leaving your floors smooth, glossy, and clean.",
  },
  {
    icon: <Wrench />,
    text: "Floor Repairs",
    description:
      "We repair scratches, cracks, and water-damaged boards — restoring your floors to their original beauty and strength.",
  },
  {
    icon: <Ruler />,
    text: "Screen and Recoat (Refinishing)",
    description:
      "A quick and effective way to refresh your existing finish without sanding down to bare wood — ideal for light wear and tear.",
  },
  {
    icon: <ShieldCheck />,
    text: "Base & Shoe Molding Installation",
    description:
      "Clean, seamless trim and molding installation to give your flooring a polished and professional look.",
  },
  {
    icon: <Layers />,
    text: "VCT and LVP Installation",
    description:
      "Vinyl Composition Tile (VCT) and Luxury Vinyl Plank (LVP) installed with precision for commercial and residential spaces.",
  },
];

export const checklistItems = [
  {
    title: "Licensed & Insured",
    description: "We’re a fully insured local business providing professional flooring services across Union County and surrounding areas.",
  },
  {
    title: "Dust-Free Sanding",
    description: "Our refinishing process minimizes dust and cleanup — safe for your home and family.",
  },
  {
    title: "High-Quality Materials",
    description: "We use only trusted brands and durable finishes to ensure your floors last for years.",
  },
  {
    title: "Customer Satisfaction",
    description: "We take pride in our customer-first service on every project.",
  },
];

export const pricingOptions = [
  {
    title: "Free Estimate",
    price: "$0",
    features: [
      "On-site inspection",
      "Expert consultation",
      "Transparent quote",
      "No hidden fees",
    ],
  },
  {
    title: "Custom Projects",
    price: "Quote-based",
    features: [
      "Tailored flooring solutions",
      "Material sourcing",
      "Professional installation",
      "Warranty on workmanship",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://www.instagram.com/jerseywoodflooring", text: "Instagram" },
  { href: "https://www.google.com/search?q=Jersey+Wood+Flooring", text: "Google Business" },
  { href: "https://www.tiktok.com/@jerseywoodflooring", text: "TikTok" },
];

export const socialLinks = [
  { icon: <Instagram size={22} />, href: "https://www.instagram.com/jerseywoodflooring" },
  { icon: <Globe size={22} />, href: "https://www.google.com/search?q=Jersey+Wood+Flooring" },
  { icon: <Music2 size={22} />, href: "https://www.tiktok.com/@jerseywoodfloorin" },
];