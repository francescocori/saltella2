"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-base-100">
      {/* Full Screen Video Hero Section */}
      <div id="hero" className="relative w-full h-screen">
        {/* Background Image (optimized) */}
        <Image
          src="/Videos/Images/hero.jpg"
          alt="Chef Gabbo hero background"
          fill
          priority
          quality={70}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PDw8PDw8QDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0fICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAABAgME/8QAGxABAQACAwAAAAAAAAAAAAAAAQIAAxESITH/xAAXAQEBAQEAAAAAAAAAAAAAAAAQAgT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQIC/9oADAMBAAIRAxEAPwD3YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
          className="object-cover object-center z-0"
        />
        {/* Background Container */}
        <div
          className="relative w-full h-full overflow-hidden bg-cover bg-center bg-no-repeat"
          // Optional fallback background-image; keep commented to avoid double-loading
          // style={{
          //   backgroundImage: 'url("/Videos/Images/hero.jpg")',
          // }}
        >
          {/* Black Gradient Overlay */}
          <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

          {/* Transition Gradient to Feature Section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>

          {/* Hero Text Content */}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="text-center text-white px-4 max-w-4xl relative z-50">
              <h1 className=" text-7xl md:text-8xl lg:text-8xl font-medium mb-6 drop-shadow-lg flex flex-col md:flex-row justify-center items-center md:items-baseline">
                <span className="italianno-regular mr-[30px]">Chef </span>
                Gabbo
              </h1>
              <p className="font-founders font-light text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md opacity-90">
                Private dining, fresh delivery and weekly meal right at your
                place.
              </p>
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
              From tailored private dining to
              <span className="italianno-small text-brand-green ">
                {" "}
                Sicilian{" "}
              </span>
              street food and fresh weekly meals
            </h2>

            {/* Description */}
            <p className="font-founders font-light text-lg text-custom-textSecondary leading-relaxed">
              We create culinary experiences designed around your lifestyle,
              whether it’s an elegant dinner at home, the vibrant flavors of
              Sicily delivered to your table, or stress-free weekly meal plans.
              Every dish blends authenticity, creativity, and care to make
              dining effortless and memorable.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/393516959843?text=Hi%20Francesco,%20can%20you%20send%20me%20the%20current%20menu?",
                  "_blank"
                )
              }
              className="font-founders mt-4 btn bg-brand-goldDark border-brand-goldDark font-medium shadow-none"
            >
              Ask current menù
            </button>
            <a
              href="https://wa.me/351912345678?text=Hi%20Francesco,%20can%20you%20send%20me%20the%20current%20menu?"
              target="_blank"
              rel="noopener noreferrer"
              className="font-founders mt-4 btn bg-brand-goldDark border-brand-goldDark font-medium shadow-none"
            >
              Ask current menù
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
