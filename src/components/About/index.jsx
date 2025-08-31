// Reusable Components
const Tagline = ({ children }) => (
  <div className="mb-4">
    <span className="text-brand-green font-founders text-sm font-medium tracking-wider uppercase">
      {children}
    </span>
  </div>
);

const SectionHeading = ({ children }) => (
  <h3 className="font-founders text-2xl md:text-3xl font-medium text-custom-text mb-4">
    {children}
  </h3>
);

const Description = ({ children }) => (
  <p className="font-founders font-light text-base text-custom-textSecondary mb-6 leading-relaxed">
    {children}
  </p>
);

const ImageComponent = ({ imageSrc, altText }) => (
  <div className="bg-brand-darker min-h-[300px] lg:min-h-[400px] overflow-hidden">
    <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
  </div>
);

const ContentBlock = ({
  tagline,
  heading,
  description,
  primaryButton,
  secondaryButton,
}) => (
  <div className="p-8 lg:p-12">
    <Tagline>{tagline}</Tagline>
    <SectionHeading>{heading}</SectionHeading>
    <Description>{description}</Description>
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
      <div className="card bg-brand-dark shadow-sm font-founders">
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

// const HeaderSection = ({ tagline, title, description }) => (
//   <div className="text-center mb-16">
//     <Tagline>{tagline}</Tagline>
//     <h2 className="font-founders text-3xl md:text-4xl font-medium text-base-content mb-6">
//       {title}
//     </h2>
//     <p className="font-founders font-light text-lg text-base-content/70 max-w-2xl mx-auto">
//       {description}
//     </p>
//   </div>
// );

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
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        primaryButton: "Button",
        secondaryButton: "Button",
      },
      imageSrc: "/Videos/Images/privateDining.jpg",
      altText: "Private dining experience",
      imageLeft: false,
    },
    {
      content: {
        tagline: "Catering",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        primaryButton: "Button",
        secondaryButton: "Button",
      },
      imageSrc: "/Videos/Images/catering.jpg",
      altText: "Catering services",
      imageLeft: true,
    },
    {
      content: {
        tagline: "Delivery",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        primaryButton: "Button",
        secondaryButton: "Button",
      },
      imageSrc: "/Videos/Images/delivery.jpg",
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
