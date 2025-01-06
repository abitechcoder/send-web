import { gallery } from "@/src/assets";
import styles from "@/src/styles";
import { TestimonialProps } from "@/src/types";
import { DeleteItemButton, EditTestimonial } from "..";
import React from "react";
import { deleteTestimonial } from "@/src/data";

const SelectedTestimonialView = ({
  testimonial,
  setSelectedTestimonial,
}: {
  testimonial: TestimonialProps;
  setSelectedTestimonial: React.Dispatch<
    React.SetStateAction<null | TestimonialProps>
  >;
}) => {
  return (
    <div className="bg-white w-full h-60 lg:h-full p-4 font-nunito">
      {testimonial ? (
        <div className="w-full grid gap-8">
          <h3 className="font-bold text-xl">Testimonial Detail</h3>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Name</h5>
            <p>{testimonial.name}</p>
          </div>
          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">Image</h5>
            <img
              src={testimonial.image}
              alt=""
              className="h-[100px] w-[100px] object-contain object-center"
            />
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Case Story Title
            </h5>
            <p>{testimonial.title}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Case Story
            </h5>
            <p>{testimonial.text}</p>
          </div>

          <div className="w-full">
            <h5 className="text-sm font-light text-gray-400 mb-2">
              Document Url
            </h5>
            <a href={testimonial.link_url} className="text-blue-600">
              {testimonial.link_url.substring(0, 30)}...
            </a>
          </div>

          <div className="flex gap-4">
            <DeleteItemButton
              itemId={testimonial.id}
              handleSelectedItem={setSelectedTestimonial}
              itemType="Testimonial"
              navigateTo="/admin/testimonial"
              deleteItem={deleteTestimonial}
            />
            <EditTestimonial
              testimonial={testimonial}
              setSelectedTestimonial={setSelectedTestimonial}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
          <p
            className={`${styles.paragraph} text-xs  text-center text-[#849299]`}
          >
            Select a testimonial to get more information
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedTestimonialView;
