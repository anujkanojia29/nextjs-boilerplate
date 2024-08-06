"use client"

import TestimonialSection from "@/modules/testimonial/components/testimonial-section";
import Footer from "@/shared/components/footer";
import Navbar from "@/shared/components/navbar";
import { logger, withLogger } from "@/shared/utils/logger";
import { useEffect } from "react";

export default function Home() {
  function exampleFunction() {
    logger('exampleFunction', 'This is a log message', { key: 'value' });
    // Your function logic here...
    return "Example function executed";
  }
  useEffect(() => {
    const temp = withLogger(exampleFunction);
    temp();
  }, [])
  
  return (
        <main className="flex min-h-screen flex-col">
        <Navbar/>
        <TestimonialSection/>
        <Footer/>
        </main>
  );
}
