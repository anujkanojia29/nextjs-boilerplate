import React from "react";
import { TESTIMONAL_HEADER } from "../configs/constant";
import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col gap border border-1 border-border p-20 bg-background text-text-primary">
        <h1>{TESTIMONAL_HEADER}</h1>
        <TestimonialCard/>
    </div>
  );
};
export default TestimonialSection;