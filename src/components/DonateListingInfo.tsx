import React from "react";
import { BlueProgress } from "@/components/ui/blue-progress";
import { styles, layout } from "../styles";
import FormInput from "./FormInput";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DonateListingInfo = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section>
      <div className={`${layout.section} bg-graybg grid gap-4 md:gap-8`}>
        <div>
          <h2 className={`${styles.heading3} text-secondary`}>Donate</h2>
          <h2
            className={`${styles.heading1} md:leading-relaxed lg:leading-[70px] text-black uppercase`}
          >
            LITTLE HELP CAN MAKE A BIG DIFFERENCE
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="z-30">
            <h3 className={`font-barlow text-xl md:text-2xl text-secondary`}>
              Our Goal
            </h3>
            <h2
              className={`font-barlow text-2xl md:text-3xl font-bold text-black`}
            >
              $30,000
            </h2>
          </div>
          <div className="z-30">
            <h3 className={`font-barlow text-xl md:text-2xl text-secondary`}>
              Raised
            </h3>
            <h2
              className={`font-barlow text-2xl md:text-3xl text-black font-bold`}
            >
              $25,000
            </h2>
          </div>
          <div className="z-30">
            <h3 className={`font-barlow text-xl md:text-2xl text-secondary`}>
              To Go
            </h3>
            <h2
              className={`font-barlow text-2xl md:text-3xl font-bold text-black`}
            >
              $5,000
            </h2>
          </div>
        </div>

        <BlueProgress
          value={progress}
          className="w-full bg-darkgrey h-2 my-4 lg:my-8"
        />

        <p className={`w-full text-black ${styles.paragraph2}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vulputate vestibulum rhoncus, dolor eget viverra pretium, dolor tellus
          aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo
          consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet
          turpis interd enim. Vivamus faucibus ex sed nibh egestas elementum.
          Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse
          consectetur tristique tortor
        </p>

        <div className="grid gap-4 mt-4">
          <h3 className={`${styles.heading2Barlow}`}>OUR CHALLENGE & GOAL</h3>
          <p className={`w-full text-black ${styles.paragraph2}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vulputate vestibulum rhoncus, dolor eget viverra pretium, dolor
            tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum
            non justo consectetur, cursus ante, tincidunt sapien. Nulla quis
            diam sit amet turpis interd enim. Vivamus faucibus ex sed nibh
            egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar
            luctus. Suspendisse consectetur tristique tortor
          </p>
          <p className={`w-full text-black ${styles.paragraph2}`}>
            We have covered many special events such as fireworks, fairs,
            parades, races, walks, awards ceremonies, fashion shows, sporting
            events, and even a memorial service.
          </p>
          <p className={`w-full text-black ${styles.paragraph2}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium,
            dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus.
            Vestibulum non justo consectetur, cursus ante, tincidunt sapien.
            Nulla quis diam sit amet turpis interdum accumsan quis nec enim.
            Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum
            dui. Aenean consequat pulvinar luctus
          </p>
        </div>
      </div>
      <div className={`${layout.section} bg-white`}>
        <div className="bg-graybg p-6 lg:p-10 grid gap-8">
          <div className="grid gap-6">
            <h3 className={`${styles.heading2Barlow}`}>Your Donate</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <FormInput placeholder="$20" />
              <FormInput placeholder="$40" />
              <FormInput placeholder="$60" />
              <FormInput placeholder="$80" />
              <FormInput placeholder="$100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-8">
              <div className="lg:col-span-2">
                <FormInput placeholder="Custom Amount" />
              </div>
              <div className="lg:col-span-5">
                <FormInput placeholder="Enter Custom Amount" />
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <h3 className={`${styles.heading2Barlow}`}>Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput placeholder="First Name" />
              <FormInput placeholder="Last Name" />
              <FormInput placeholder="Your Email" />
              <FormInput placeholder="Phone Number" />
            </div>
          </div>
          <div className="grid gap-6">
            <h3 className={`${styles.heading2Barlow}`}>Payment</h3>
            <RadioGroup defaultValue="paypal" className="flex gap-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">Paypal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="virtual-account" id="virtual-account" />
                <Label htmlFor="virtual-account">Virtual Account</Label>
              </div>
            </RadioGroup>
          </div>
          <button
            className={`${styles.flexCenter} gap-2 bg-black py-3 px-6 justify-self-start`}
          >
            <span className="text-white">Donate</span>
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
        </div>
      </div>
    </section>
  );
};

export default DonateListingInfo;
