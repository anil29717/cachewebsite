import React, { useState } from 'react';
import { CircleArrowRight , BadgeCheck} from 'lucide-react';

const InsightsSection = () => {
  // state for the email input field
  const [email, setEmail] = useState('');
  // New state to manage the button's text and behavior
  const [status, setStatus] = useState('idle'); // can be 'idle', 'subscribing', or 'subscribed'

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Prevent submitting if the email is empty or if already submitting/subscribed
    if (!email || status !== 'idle') {
      return;
    }

    // Set status to 'subscribing' to disable the button and show a loading state
    setStatus('subscribing');

    // Simulate an API call with a 1-second delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update the UI to show 'Subscribed'
    setStatus('subscribed');

    // Reset the field after 3 seconds
    setTimeout(() => {
      setEmail('');
      setStatus('idle');
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Top consultation banner */}
      <div className="bg-white py-4 text-center border-b">
        <div className="flex items-center justify-center pb-4 gap-2 text-gray-800">
          <span className="text-xl sm:text-3xl lg:text-4xl font-glacial font-medium">
            Get a Free Consultation Right now
          </span>
          <CircleArrowRight className="w-6 h-6 sm:w-10 sm:h-10 fill-black text-white" />
        </div>
      </div>

      {/* Main insights section */}
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Left side - Dark section with text */}
        <div className="lg:w-1/2 bg-black text-white p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-glacial">
            Featured Insights
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-300 font-glacial">
            Cache's most inspiring thought leadership on issues shaping the future of business and society
          </p>
        </div>

        {/* Right side - White background with AI Technology Interface */}
        <div className="lg:w-1/2 bg-white relative overflow-hidden flex items-center justify-center min-h-[200px] sm:min-h-[250px] lg:min-h-0">
          <img
            src="/insightsection.jpg"
            alt="Technology Interface"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Subscribe Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none h-full md:top-20 top-10">
          <div className="relative top-10 sm:top-16 md:top-20 backdrop-blur-md flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 rounded-xl p-4 w-[95%] sm:w-[450px] md:w-[650px] lg:w-[850px] text-center shadow-xl pointer-events-auto" style={{ backgroundColor: '#fdf0f1' }}>
            <p className="text-black text-lg sm:text-2xl font-glacial flex items-center text-center h-full py-1 sm:py-0">
              Get the latest Insights Delivered for free
            </p>
            <form onSubmit={handleSubscribe} className="flex sm:flex-row gap-2 border-2 border-white rounded-lg p-2 bg-white w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg border-none min-w-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== 'idle'}
              />
              <button
                type="submit"
                className="px-6 sm:px-10 py-2 bg-red-600 text-white font-semibold rounded-lg transition-colors sm:w-auto mt-2 sm:mt-0"
                disabled={status !== 'idle'}
                style={{
                  backgroundColor: status === 'subscribed' ? '#22c55e' : '#dc2626',
                  cursor: status !== 'idle' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'subscribed' ? 'Subscribed ' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;