// src/pages/Home.jsx  (REPLACE FULL FILE)
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import CategoryTabs from "../components/home/CategoryTabs";
import FoodGrid from "../components/home/FoodGrid";

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryTabs category={category} setCategory={setCategory} />
      <FoodGrid category={category} />
      <Footer />
    </>
  );
}
