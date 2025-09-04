import Image from "next/image";

export default function Contact2() {
  return (
    <section id="contact" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-founders text-4xl  mb-6 text-brand-goldDark">
                Contact us
              </h2>
              <p className="font-founders font-light text-base-content/70 mb-8 text-custom-textSecondary">
                We recommend booking at least 48 hours in adavance for Sicilian
                gastronomy, one week in advance for private dining to ensure
                availability.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/351920416301?text=Hi%20I%27d%20like%20to%20see%20the%20current%20menu."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-90"
              >
                <div className=" rounded-full flex items-center justify-center">
                  <Image
                    src="/Videos/Images/whatsapp.png"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                    className="w-8 h-8"
                  />
                </div>
                <span className="font-founders font-light text-custom-text">
                  +351 920 416 301
                </span>
              </a>

              <div className="flex items-center gap-3">
                <div className=" rounded-full flex items-center justify-center">
                  <Image
                    src="/Videos/Images/map.png"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-custom-textSecondary font-founders font-light mt-2">
                  Lisbon
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-brand-dark shadow-xl">
            <div className="card-body">
              <form className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="font-founders label-text font-medium mb-2 text-brand-goldDark">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered w-full border-custom-border bg-brand-dark text-custom-textSecondary focus:outline-none focus:border-brand-goldDark focus:ring-1 focus:ring-brand-goldDark"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="font-founders label-text font-medium mb-2 text-brand-goldDark">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered w-full border-custom-border bg-brand-dark text-custom-textSecondary focus:outline-none focus:border-brand-goldDark focus:ring-1 focus:ring-brand-goldDark"
                  />
                </div>

                <div className="form-control flex flex-col gap-2">
                  <label className="label">
                    <span className="font-founders label-text font-medium text-brand-goldDark">
                      Message
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 w-full border-custom-border bg-brand-dark text-custom-textSecondary focus:outline-none focus:border-brand-goldDark focus:ring-1 focus:ring-brand-goldDark"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span className="font-founders font-light label-text text-custom-textSecondary">
                      Accept the terms
                    </span>
                  </label>
                </div> */}

                <div className="form-control">
                  <button className="font-founders btn bg-brand-goldDark border-brand-goldDark font-medium  shadow-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
