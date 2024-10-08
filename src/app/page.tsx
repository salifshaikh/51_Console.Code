"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Brands from "@/components/Brands";

export default function Home() {
  // const [data, setData] = useState('');

  // const getData = async () => {
  //   const response = await Axios.get('http://localhost:4000/signup');
  //   setData(response.data);
  // };
  
  return (
    <>
      <ScrollUp />
      <Hero/>
      <AboutSectionTwo />
      <Features />
      <AboutSectionOne />
      <Video />
      <Brands />
      <Testimonials />
     
    </>
  );
}
