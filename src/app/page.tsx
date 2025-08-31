import {
  Hero,
  Nav,
  About,
  Carousel,
  Contact,
  Contact2,
  Footer,
  Faq,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Nav />
      <Hero />
      <About />
      <Carousel />
      <Faq />
      {/* <Contact /> */}
      <Testimonials />
      <Contact2 />
      <Footer />
    </div>
  );
}
