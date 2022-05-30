import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div
        class="hero min-h-screen "
        style={{
          background: `url(https://c7.alamy.com/comp/3/a0b845b6fd4c47b8ae67a7222a7f0a3c/bhp4hc.jpg)`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Cool Bikes</h1>
            <p class="mb-5">
              Welcome to Bike er Dunia , Order AS much As you Can.
            </p>
            <button class="btn btn-primary">Let's Ride</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
