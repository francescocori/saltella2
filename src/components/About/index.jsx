// Reusable Components
const Tagline = ({ children }) => (
  <div className="mb-4">
    <span className="text-brand-green font-founders text-md font-medium tracking-wider uppercase">
      {children}
    </span>
  </div>
);

const SectionHeading = ({ children }) => (
  <h3 className="font-founders text-2xl md:text-4xl font-medium text-custom-text mb-4">
    {children}
  </h3>
);

const Description = ({ children }) => (
  <p className="font-founders font-light text-[18px]  text-custom-textSecondary mb-6 leading-relaxed">
    {children}
  </p>
);

const ImageComponent = ({ imageSrc, altText }) => (
  <div className="bg-brand-darker min-h-[300px] lg:min-h-[400px] overflow-hidden rounded-xl">
    <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
  </div>
);

const ContentBlock = ({
  tagline,
  heading,
  description,
  description2,
  primaryButton,
  secondaryButton,
}) => (
  <div
    className={`pl-0 py-8 pr-8 lg:pl-0 lg:py-12 lg:pr-12 ${
      description2 ? "md:pl-8 lg:pl-12" : ""
    } `}
  >
    <Tagline>{tagline}</Tagline>
    <SectionHeading>{heading}</SectionHeading>
    <Description>{description}</Description>
    {description2 && <Description>{description2}</Description>}
  </div>
);

const Section = ({
  content,
  imageSrc,
  altText,
  imageLeft = false,
  isLast = false,
}) => {
  const imageComponent = (
    <ImageComponent imageSrc={imageSrc} altText={altText} />
  );
  const contentComponent = <ContentBlock {...content} />;

  return (
    <div className={`${isLast ? "" : "mb-12"}`}>
      <div className="card bg-brand-dark shadow-sm font-founders ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {imageLeft ? (
            <>
              <div className="lg:order-first order-last">{imageComponent}</div>
              {contentComponent}
            </>
          ) : (
            <>
              {contentComponent}
              {imageComponent}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Data Configuration
const aboutData = {
  header: {
    tagline: "Tagline",
    title: "Short heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  sections: [
    {
      content: {
        tagline: "Private dining",
        heading: "Tailored menus for every occasion",
        description:
          "Whether it’s an intimate dinner or a lively celebration. Each dish is designed around your tastes, blending authentic flavors and refined presentation to create unforgettable memories at your table.",
        primaryButton: "Button",
        secondaryButton: "Button",
      },
      imageSrc: "/Videos/Images/private.jpg",
      altText: "Private dining experience",
      imageLeft: false,
    },
    {
      content: {
        tagline: "Sicilian Gastronomy",
        heading: "A taste of Sicily at your table",
        description:
          "Rooted in my Sicilian heritage, I bring the vibrant spirit of Sicilian street food directly to your home. From arancini to panelle, I offer you the genuine taste of Sicily in the warmth of your own space.",
        description2:
          "Qui mi piace questa immagine più grande, cosa ne pensate? Rompe un pò il flow, ma ovviamente dobbiamo scriverci qualcosa in più per riempire questo spazioo, tipo mmmmh saltellaaaaaaaa ma non mollaaaaaaaaaaaa.",
        primaryButton: "Button",
        secondaryButton: "Button",
      },
      imageSrc: "/Videos/Images/arancini2.jpg",
      altText: "Catering services",
      imageLeft: true,
    },
    {
      content: {
        tagline: "Weekly Meal Plans",
        heading: "Healthy, seasonal meals without the hassle",
        description:
          "No time to cook? Stress-free, delicious and healthy meals Enjoy the comfort of delicious home-cooked meals designed to fit your week. Our weekly plans combine seasonal ingredients, balance, and flavor, accordingly!",
        primaryButton: "Button",
        secondaryButton: "Button",
      },
      imageSrc: "/Videos/Images/delivery2.jpg",
      altText: "Food delivery service",
      imageLeft: false,
    },
  ],
};

// Main Component
export default function About() {
  return (
    <div className="bg-brand-dark py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* <HeaderSection {...aboutData.header} /> */}

        {aboutData.sections.map((section, index) => (
          <Section
            key={index}
            content={section.content}
            imageSrc={section.imageSrc}
            altText={section.altText}
            imageLeft={section.imageLeft}
            isLast={index === aboutData.sections.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
