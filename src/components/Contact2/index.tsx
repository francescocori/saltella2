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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore. sss
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-darker rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-custom-text"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="font-founders font-light text-custom-text">
                  +1 (555) 000-0000
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-darker rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-content"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-custom-textSecondary font-founders font-light">
                  123 Street St, Sydney NSW 2000 AU
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
                    className="input input-bordered w-full focus:input-primary border-custom-border bg-brand-dark text-custom-textSecondary"
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
                    className="input input-bordered w-full focus:input-primary border-custom-border bg-brand-dark text-custom-textSecondary"
                  />
                </div>

                <div className="form-control flex flex-col gap-2">
                  <label className="label">
                    <span className="font-founders label-text font-medium text-brand-goldDark">
                      Message
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 focus:textarea-primary w-full border-custom-border bg-brand-dark text-custom-textSecondary"
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
