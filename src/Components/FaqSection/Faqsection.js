import React, { useState } from "react";
import "./Faqsection.css"; // Create this CSS file for styling

const faqData = [
  {
    question: 'What does "custom branded" or "white labeled" mean?',
    answer:
      "When we refer to “custom branding” or “white labeling” ... specifically created for you and your users.",
  },
  {
    question:
      'Why should we "custom brand" or "white label" as opposed to building an app from scratch?',
    answer:
      "With our “custom branded” or “white labeled” solutions we are able to take fully developed apps, ideas and back end access and skin it to reflect your corporate identity and brand(s). With our solutions you are getting a completely turn-key, cross platform (iOS and Android) solution that works, right out of the box. No testing, no bugs, no lost users, no worrying about obtaining a following. It’s all already done for you.",
  },
  {
    question: "How does it work? Do I own the application?",
    answer:
      "By licensing any of our mobile apps you are guaranteeing that you will have a stable, custom branded, fully customizable solution right out of the box. You own all of the content and all of the data you obtain from your users (pursuant to the AppStore and Google Play terms of service and our own terms of use). We will always be compliant with the most recent versions of the mobile operating systems and deploy fully tested versions for your users with your own custom skin(s).",
  },
  {
    question:
      "Do my users need a WiFi or Mobile Data connection to use the applications?",
    answer:
      "Your users will need to have a stable 3G, HSPA or HSPA+, 4G or LTE connection to access the content of all of these apps. Data charges are the responsibility of the end user. Cellular or WiFi is required.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Costs are calculated on an individual basis depending on an organizations specific app and backend needs. We have annual and month to month plans for most of the services we offer. Please contact us for a quote and more details regarding a custom solution for your organization. 1.888.868.2386 or info@amazingappventures.com.",
  },
  // ... Add more questions and answers
];

function Faqsection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqsection">
      <h2>FAQ</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.question}</h3>
              <span
                className={`arrow ${activeIndex === index ? "active" : ""}`}
              ></span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqsection;
