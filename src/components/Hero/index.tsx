export default function Hero() {
  return (
    <div className="bg-base-100">
      {/* Full Screen Video Hero Section */}
      <div id="hero" className="relative w-full h-screen">
        {/* Background Container */}
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/Videos/Images/sora-image-2025-08-28T12-37-17-723Z.webp")',
            // 'url("/Videos/Images/heroImageBg2.webp")',
          }}
        >
          {/* Background Video (Commented Out) */}
          {/* <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='100%25' height='100%25' fill='%23666'/%3E%3C/svg%3E"
          >
            <source
              src="/Videos/3338747-uhd_4096_2160_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}

          {/* Black Gradient Overlay */}
          <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

          {/* Transition Gradient to Feature Section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>

          {/* Hero Text Content */}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="text-center text-white px-4 max-w-4xl relative z-50">
              <h1 className="font-founders text-5xl md:text-6xl lg:text-7xl font-medium mb-6 drop-shadow-lg">
                Chef Gabbo
              </h1>
              <p className="font-founders font-light text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md opacity-90">
                Private dining, fresh delivery and weekly meal right at your
                place.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="font-founders btn py-2 rounded-lg btn-outline btn-lg bg-white/20 hover:bg-white/30 border-white/40 text-white font-medium px-8">
                  View Menu
                </button>
              </div> */}
            </div>
          </div>
          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center absolute bottom-4 left-0 right-0">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
            <p className="font-founders text-white/80 text-sm mt-3 font-light">
              Scroll down
            </p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div id="about" className="bg-brand-dark py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* Heading */}
            <h2 className="font-founders text-3xl md:text-4xl font-medium text-custom-text mb-6">
              From tailored private dining to Sicilian street food and fresh
              weekly meals
            </h2>

            {/* Description */}
            <p className="font-founders font-light text-lg text-custom-textSecondary leading-relaxed">
              I create culinary experiences designed around your lifestyle,
              whether it’s an elegant dinner at home, the vibrant flavors of
              Sicily delivered to your table, or stress-free weekly meal plans.
              Every dish blends authenticity, creativity, and care to make
              dining effortless and memorable.
            </p>
            <button className="font-founders mt-4 btn bg-brand-goldDark border-brand-goldDark font-medium shadow-none">
              Ask current menù
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
