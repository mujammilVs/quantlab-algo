import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  {
    id: 1,
    title: " What is Algo Trading?",
  },
  { id: 2, title: "How does Quantlab-Algo help with Trading?" },
  { id: 3, title: " Can i Create my own Trading algorithms on the platform?" },
  { id: 4, title: " Is my Data Secure on Quantlab Algo?" },
];

const Faqs = () => {
  const [active, setActive] = useState(faqsData[0].id);
  return (
    <div id="tab1" className="tab_content">
      <Accordion
        defaultActiveKey={faqsData[0].id}
        as={"ul"}
        className="accordion"
      >
        {faqsData.map((faq) => (
          <li key={faq.id}>
            <Accordion.Toggle
              as="a"
              eventKey={faq.id}
              onClick={() => setActive(faq.id == active ? null : faq.id)}
              className={faq.id == active ? "active" : ""}
            >
              <span> {faq.title} </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.id}>
              <p>
                Algorithmic trading involves using automated, pre-programmed
                trading instructions to execute trades at the optimal time based
                on specific market conditions.
              </p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};
export default Faqs;
