export default function Carousel() {
  const images = [
    "Videos/Images/arancini3.jpg",
    "Videos/Images/small3.png",
    "Videos/Images/small4.png",
    "Videos/Images/small1.png",
    "Videos/Images/small2.png",
  ];
  const images2 = [
    "Videos/Images/small5.jpg",
    "Videos/Images/small6.jpg",
    "Videos/Images/small7.jpg",
    "Videos/Images/arancini.jpg",
  ];

  return (
    <div id="menu" className="bg-brand-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-founders text-3xl font-medium text-center mb-8 text-brand-goldDark">
          Food Gallery
        </h2>

        {/* First Marquee Container - Right to Left */}
        <div className="relative overflow-hidden rounded-box p-4 bg-brand-dark">
          <div className="flex space-x-4 animate-loop hover:pause-marquee">
            {/* Multiple sets for perfect seamless loop */}
            {Array.from({ length: 3 }, (_, setIndex) =>
              images.map((src, index) => (
                <div
                  key={`rtl-set-${setIndex}-${index}`}
                  className="carousel-item flex-shrink-0"
                >
                  <img
                    src={src}
                    alt={`Pizza ${index + 1}`}
                    className="w-80 h-60 object-cover rounded-lg"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Second Marquee Container - Left to Right */}
        <div className="relative overflow-hidden rounded-box bg-brand-darker">
          <div className="flex space-x-4 animate-loop-reverse hover:pause-marquee">
            {/* Multiple sets for perfect seamless loop */}
            {Array.from({ length: 3 }, (_, setIndex) =>
              images2.map((src, index) => (
                <div
                  key={`ltr-set-${setIndex}-${index}`}
                  className="carousel-item flex-shrink-0"
                >
                  <img
                    src={src}
                    alt={`Pizza ${index + 1}`}
                    className="w-80 h-60 object-cover rounded-lg"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* CSS Animation for seamless loops */}
        <style>{`
          @keyframes infinite-loop {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% / 3));
            }
          }

          @keyframes infinite-loop-reverse {
            from {
              transform: translateX(calc(-100% / 3));
            }
            to {
              transform: translateX(0);
            }
          }

          .animate-loop {
            animation: infinite-loop 20s linear infinite;
            will-change: transform;
          }

          .animate-loop-reverse {
            animation: infinite-loop-reverse 20s linear infinite;
            will-change: transform;
          }

          .hover\\:pause-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
}
