import {
  AddTestimonial,
  NavHeader,
  SelectedTestimonialView,
  TopStoriesCard,
} from "@/src/components";
import { getTestimonials } from "@/src/data";

import { TestimonialProps } from "@/src/types";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const testimonials = await getTestimonials();
  return { testimonials };
}

const Testimonial = () => {
  const { testimonials }: any = useLoaderData();
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  return (
    <div className="w-full bg-[#FAFAFA] h-full grid grid-rows-[240px_1fr] lg:grid-rows-[160px_1fr]">
      <div className="p-3 lg:px-8 lg:py-4 bg-white mb-5">
        <NavHeader title="Testimonial" />
        <div className="flex py-4">
          <AddTestimonial />
        </div>
      </div>

      <div className="p-3 lg:px-8 lg:py-4 overflow-y-scroll ">
        <div className="grid lg:grid-cols-4 gap-3 ">
          <div className="lg:col-span-3 ">
            {testimonials.length > 0 ? (
              <div className="grid grid-cols-2 p-5 gap-4 bg-white ">
                {testimonials.map((testimonial: TestimonialProps) => (
                  <div
                    key={testimonial.id}
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="cursor-pointer"
                  >
                    <TopStoriesCard
                      name={testimonial.name}
                      text={testimonial.text}
                      image={testimonial.image}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 grid place-items-center p-8">
                <p className="font-bold mb-3">No annual testimonials found</p>
                <p>
                  Click on <strong>add testimonial</strong> above to create a
                  testimonial
                </p>
              </div>
            )}
          </div>
          <SelectedTestimonialView
            testimonial={selectedTestimonial}
            setSelectedTestimonial={setSelectedTestimonial}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
