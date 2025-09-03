"use client";
import { useEffect, useRef } from "react";

const FAQ_DATA = [
  {
    id: 1,
    question: "What types of events do you cater for?",
    answer:
      "We design menus for private dinners, birthdays, and family gatherings.",
  },
  {
    id: 2,
    question: "How does the private chef service work?",
    answer:
      "We plan the menu with you, we bring the ingredients, cook at your home or chosen location, and provide a seamless dining experience for you and your guests.",
  },
  {
    id: 3,
    question: " What is included in the service?",
    answer:
      "For private events, Each service includes menu planning, shopping for high-quality ingredients, cooking, plating, and cleaning up the kitchen afterward.",
  },
  {
    id: 4,
    question: "How does pricing work for your services?",
    answer:
      "Pricing depends on the number of guests, menu complexity, and any additional services required. After an initial consultation, I provide a tailored quote.",
  },
  {
    id: 5,
    question: "How far in advance should I book a private dining experience?",
    answer:
      "We recommend booking at least 1 week in advance to ensure availability, especially for weekends and special occasions.",
  },
  {
    id: 6,
    question: "How do the weekly meal plans work?",
    answer:
      "You’ll receive a personalized menu each week, designed according to your tastes and dietary needs. Meals are delivered ready to enjoy or easy to reheat.",
  },
  {
    id: 7,
    question: "How are the meals delivered?",
    answer:
      "Meals are delivered in containers ready to refrigerate, freeze, or heat up at your convenience.",
  },
  {
    id: 8,
    question: "What types of Sicilian dishes do you offer?",
    answer:
      "I specialize in authentic Sicilian street food such as arancini, panelle, calzoni, and other traditional flavors prepared fresh for your event.",
  },
  {
    id: 9,
    question: "Is there a minimum order for Sicilian street food delivery?",
    answer:
      "Yes, minimum order requirements may apply depending on the menu and number of guests. We’ll define the details together during planning.",
  },
];

const FaqItem = ({ question, answer, name }) => (
  <div className="collapse rounded-none border-b border-custom-border mb-4 bg-brand-dark">
    <input type="radio" name={name} />
    <div className="collapse-title font-founders font-medium text-white">
      {question}
    </div>
    <div className="collapse-content font-founders font-light text-sm text-custom-textSecondary">
      {answer}
    </div>
  </div>
);

export default function Faq() {
  const accordionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        // Uncheck all radio inputs to close accordion
        const radioInputs = accordionRef.current.querySelectorAll(
          'input[type="radio"]'
        );
        radioInputs.forEach((input) => (input.checked = false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id="faq"
      className="container mx-auto px-4 py-12 max-w-6xl bg-brand-dark"
    >
      <h2 className="font-founders text-2xl font-medium text-center mb-8 text-brand-goldDark">
        Frequently Asked Questions
      </h2>
      <div ref={accordionRef}>
        {FAQ_DATA.map((faq) => (
          <FaqItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            name="my-accordion-1"
          />
        ))}
      </div>
    </div>
  );
}
