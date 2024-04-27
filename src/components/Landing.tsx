import React from "react";
import Button from "./Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-2 space-y-2">
      <h1 className="text-xl font-bold text-gray-800">
        Welcome to our Hair Salon!
      </h1>
      <p className="text-gray-600 text-sm">
        Discover the latest hair trends and book an appointment with our
        talented stylists.
      </p>
      <Button onClick={() => (window.location.href = "/schedule-appointment")}>
        Book an appointment
      </Button>
    </div>
  );
};

export default Landing;
