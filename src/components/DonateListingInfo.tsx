import React from "react";
import { BlueProgress } from "@/components/ui/blue-progress";
import { styles, layout } from "../styles";
import FormInput from "./FormInput";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const DonateListingInfo = () => {
  const [progress, setProgress] = React.useState<number>(0);
  const [selectedDonation, setSelectedDonation] = React.useState<string>("");
  const [selectedDonationIndex, setSelectedDonationIndex] = React.useState<
    null | number
  >(null);
  const donations = ["20", "40", "60", "80", "100"];
  const [customAmount, setCustomAmount] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");

  const handleDonationSelection = (
    donation: string,
    position: null | number
  ) => {
    setSelectedDonation(donation);
    setSelectedDonationIndex(position);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500);
    return () => clearTimeout(timer);
  }, []);

  const makeDonation = () => {
    let amount = 0;
    if (customAmount == "") {
      if (selectedDonation == "") {
        alert("Select your donation amount");
        return;
      } else {
        amount = Number(selectedDonation);
      }
    } else {
      if (customAmount == "") {
        alert("Enter your donation amount");
        return;
      } else {
        amount = Number(customAmount);
      }
    }

    if(!firstName || !lastName || !email || !phoneNumber) {
      alert("Enter your personal information");
      return;
    }

    const config = {
      public_key: "FLWPUBK_TEST-edb96e87c83963dd56001427a970f30b-X",
      tx_ref: Date.now(),
      amount: amount,
      currency: "USD",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: email,
        phone_number: phoneNumber,
        name: `${firstName} ${lastName}`,
      },
      customizations: {
        title: "my Payment Title",
        description: "Payment for items in cart",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const handleFlutterPayment = useFlutterwave(config);

    handleFlutterPayment({
      callback: (response) => {
        closePaymentModal(); // this will close the modal programmatically
        setCustomAmount("");
        setEmail("");
        setSelectedDonation("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setSelectedDonationIndex(null);
      },
      onClose: () => {
        setCustomAmount("");
        setEmail("");
        setSelectedDonation("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setSelectedDonationIndex(null);
      },
    });
  };

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
              {donations.map((donation, index) => (
                <div
                  onClick={() => handleDonationSelection(donation, index)}
                  className={`cursor-pointer px-4 py-3 w-full hover:border-secondary hover:text-secondary bg-[#F9FBFC] border font-bold ${
                    selectedDonationIndex === index
                      ? "border-secondary text-secondary"
                      : "border-[#E3E3E3] text-darkgrey"
                  }`}
                >
                  ${donation}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-8">
              <div className="lg:col-span-2">
                <FormInput
                  placeholder="Select Donation Amount"
                  value={`${selectedDonation === "" ? "Select donation amount" : "$"+selectedDonation}`}
                  disabled={true}
                />
              </div>
              <div className="lg:col-span-5">
                <FormInput
                  placeholder="Enter Custom Amount"
                  type="number"
                  value={customAmount}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setCustomAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <h3 className={`${styles.heading2Barlow}`}>Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput value={firstName} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setFirstName(e.target.value)} placeholder="First Name"  required={true}/>
              <FormInput value={lastName} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLastName(e.target.value)} placeholder="Last Name" required={true} />
              <FormInput type="email" value={email} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)} placeholder="Your Email" required={true} />
              <FormInput type="tel" value={phoneNumber} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required={true} />
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
            onClick={() => {
              makeDonation();
            }}
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
