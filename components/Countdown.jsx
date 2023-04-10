import { useState, useEffect } from "react";

const CountdownTimer = ({ endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setExpired(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setExpired(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return (
    <div className="wrapper my-20 flex flex-col gap-10 items-center">
      <h2 className="section-title text-center">April Sale Ends in</h2>
      <div className="text-center text-3xl md:text-6xl font-bold bg-rose-700 p-7 text-rose-100 px-10 w-full md:w-[40rem]">
        {expired ? (
          <CountdownTimer
            endDate={new Date().getTime() + 48 * 60 * 60 * 1000}
          />
        ) : (
          timeRemaining
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
