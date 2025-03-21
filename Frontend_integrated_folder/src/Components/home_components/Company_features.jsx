"use client"; // Enables client-side rendering for Next.js

import Link from "next/link";
import { useState, useEffect } from "react";

// Banner data for the sale section
const banners = [
  {
    id: 1,
    image: "/image 1.png",
    title: "Best Deal",
    heading: "Sale of the Month",
  },
  {
    id: 2,
    image: "/image 2.png",
    title: "85% FAT FREE",
    heading: "Sugar-Free",
    subtext: "Started at:",
    price: "79.99",
  },
  {
    id: 3,
    image: "/Rectangle 54.png",
    title: "Summer Sale",
    heading: "100% Healthy",
    subtext: "Up to:",
    discount: "65%",
  },
];

function SaleBanner() {
  // Function to calculate the remaining time until the sale ends
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5); // Sale ends in 5 days
    const difference = targetDate - new Date(); // Time difference in milliseconds

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    // If sale is still ongoing, calculate actual remaining time
    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  // State to store the countdown timer values
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Effect to update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="w-[90%] md:w-3/4 lg:w-3/4 mx-auto mt-10 flex gap-6 flex-col md:flex-row text-center">
      {/* Loop through banners array to render each sale banner */}
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="w-full md:w-1/3 h-[27rem] bg-cover bg-center text-white flex flex-col items-center justify-center p-6 rounded-lg"
          style={{ backgroundImage: `url('${banner.image}')` }}
        >
          {/* Banner Content */}
          <div className="w-full text-center">
            {/* Title of the banner */}
            <p className="text-lg md:text-[14px] font-semibold">
              {banner.title}
            </p>

            {/* Main heading */}
            <h1 className="text-2xl md:text-2xl font-bold py-2">
              {banner.heading}
            </h1>

            {/* Render price info if available */}
            {banner.subtext && banner.price && (
              <p className="text-xl md:text-base">
                {banner.subtext}{" "}
                <span className="text-2xl md:text-lg text-orange-500 font-bold">
                  &#8377;{banner.price}
                </span>
              </p>
            )}

            {/* Render discount info if available */}
            {banner.subtext && banner.discount && (
              <p className="text-xl md:text-lg flex items-center gap-2 justify-center">
                {banner.subtext}{" "}
                <span className="bg-black text-white px-2 rounded">
                  {banner.discount}
                </span>
              </p>
            )}

            {/* Render countdown timer only for the first banner */}
            {banner.id === 1 && (
              <>
                <div className="text-2xl md:text-xl font-bold flex justify-center text-center mt-2">
                  {/* Days */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.days}</span>
                    <span className="text-lg">Days</span>
                  </div>
                  <span className="mx-2">:</span>

                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.hours}</span>
                    <span className="text-lg">Hours</span>
                  </div>
                  <span className="mx-2">:</span>

                  {/* Minutes */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.minutes}</span>
                    <span className="text-lg">Mins</span>
                  </div>
                  <span className="mx-2">:</span>

                  {/* Seconds */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.seconds}</span>
                    <span className="text-lg">Secs</span>
                  </div>
                </div>
              </>
            )}

            {/* Shop Now button linking to stores page */}
            <Link href="/stores">
              <button className="mt-4 px-6 py-2 bg-white text-green-600 font-bold rounded-[2rem] w-full md:w-auto">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SaleBanner;
