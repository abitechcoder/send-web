import { CustomerServiceIcon, MapIcon, ProgramCardArt } from "../assets";
import { styles, layout } from "../styles";
import ContactFormInput from "./ContactFormInput";

const TalkToUs = () => {
  return (
    <section className={`${layout.section} bg-white bg-center`}>
      <div className="grid gap-4">
        <div>
          <h2 className={`${styles.heading3} text-secondary text-center`}>
            Contact Us
          </h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-center text-black uppercase`}
          >
            TALK TO US
          </h2>
        </div>
        <p
          className={`w-full text-center mx-auto text-black ${styles.paragraph2}`}
        >
          Explore all our amazing project Images & Videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 mt-8">
        <div className="bg-graybg p-4 md:p-6 lg:p-[50px]">
          <h3 className={`font-barlow text-black text-3xl font-bold mb-6`}>
            Contact Us
          </h3>
          <form action="" className="w-full grid gap-6">
            <ContactFormInput
              placeholder="Your Name"
              style="px-4 py-3 w-full bg-white border border-[#E3E3E3]"
            />
            <ContactFormInput
              placeholder="Email Address"
              type="email"
              style="px-4 py-3 w-full bg-white border border-[#E3E3E3]"
            />
            <ContactFormInput
              placeholder="Phone Number"
              type="tel"
              style="px-4 py-3 w-full bg-white border border-[#E3E3E3]"
            />
            <textarea
              className="px-4 py-3 w-full bg-white border border-[#E3E3E3]"
              rows={5}
              placeholder="Write Comment"
            ></textarea>
            <div className="flex gap-3">
              <input type="checkbox" name="privacy" id="privacy" />
              <label htmlFor="privacy" className="text-[#849299]">
                I agree to the privacy policy
              </label>
            </div>
            <button className="bg-secondary py-4 px-8 text-white font-bold">
              Submit
            </button>
          </form>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020767.9078672472!2d-13.157167735985412!3d8.420084944816328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183aabf343%3A0x5369e9cdc72cf719!2sSierra%20Leone!5e0!3m2!1sen!2sng!4v1718715828248!5m2!1sen!2sng"
            className="w-full h-[400px] md:h-full"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 mt-8">
        <div className="p-4 md:p-8 lg:px-[50px] lg:py-[30px] relative">
          <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
            <img
              src={ProgramCardArt}
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`${styles.paragraph3} text-secondary`}>
                Information
              </h3>
              <h2 className={`${styles.paragraph} text-black font-bold`}>
                Our Location
              </h2>
            </div>
            <div>
              <img
                src={MapIcon}
                className="w-[50px] h-[50px] z-30"
                alt="Map icon"
              />
            </div>
          </div>
          <p className="pt-4">
            3 Amie-Jay Drive, Reservation Road,
            <br /> Kenema Sierra Leone
          </p>
        </div>

        <div className="p-4 md:p-8 lg:px-[50px] lg:py-[30px] relative">
          <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
            <img
              src={ProgramCardArt}
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`${styles.paragraph3} text-secondary`}>
                Information
              </h3>
              <h2 className={`${styles.paragraph} text-black font-bold`}>
                Our Contact
              </h2>
            </div>
            <div>
              <img
                src={CustomerServiceIcon}
                className="w-[50px] h-[50px] z-30"
                alt="Customer Support icon"
              />
            </div>
          </div>
          <p className="pt-4">
            Phone: +232 7280 6853 <br />
            Email: info@sendsierraleone.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;
