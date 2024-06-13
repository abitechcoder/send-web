import ContactFormInput from "./ContactFormInput"
import styles from "../styles"

const ContactUsform = () => {
  return (
    <form action="" className="bg-white w-full p-8 grid gap-8 z-20">
            <ContactFormInput placeholder="Your Name" />
            <ContactFormInput placeholder="Email Address" type="email" />
            <ContactFormInput placeholder="Phone Number" type="tel" />
            <textarea
              className="px-4 py-3 w-full bg-[#f7f7f7]"
              rows={5}
              placeholder="Write Comment"
            ></textarea>
            <div className="flex gap-3">
              <input type="checkbox" name="privacy" id="privacy" />
              <label htmlFor="privacy" className="text-[#849299]">
                I agree to the privacy policy
              </label>
            </div>
            <button
              className={`${styles.flexCenter} gap-2 bg-black py-3 px-6 justify-self-start`}
            >
              <span className="text-white">Submit</span>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.1735 12.5H20.8691" stroke="white" strokeWidth="2" />
                <path
                  d="M20.8691 12.5C16.2588 12.5 12.5213 16.4073 12.5213 21.2273"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M20.8691 12.4997C16.2588 12.4997 12.5213 8.5924 12.5213 3.77246"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </form>
  )
}

export default ContactUsform