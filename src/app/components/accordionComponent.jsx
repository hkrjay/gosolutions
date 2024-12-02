import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`h-5 w-5 transition-transform ease-linear rotate-180`}
        >
            {id === open ? (
                // "-" icon (minus)
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            ) : (
                // "+" icon (plus)
                <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </>
            )}
        </svg>

    );
}

export function AccordionComponent() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>What services we can offer?</AccordionHeader>
                <AccordionBody>
                    We provide a wide range of IT services, including web development, mobile app development, cloud solutions, IT consulting, cybersecurity, managed IT support, and digital marketing. Whether you’re looking to build a website or secure your business systems, we’ve got you covered.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    How can your IT services help my business grow?
                </AccordionHeader>
                <AccordionBody>
                    Our services are designed to optimize your business operations, enhance your online presence, and improve efficiency. From creating robust websites to implementing secure and scalable IT infrastructure, we help businesses achieve sustainable growth and stay ahead in the digital era.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    Do you customize your services based on business needs?
                </AccordionHeader>
                <AccordionBody>
                    Absolutely! We understand that every business is unique. We offer tailored solutions to meet your specific goals and challenges, ensuring that our services align perfectly with your business requirements.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    What industries do we specialize in?
                </AccordionHeader>
                <AccordionBody>
                    We prioritize data security by implementing industry-leading practices, including encryption, firewalls, regular audits, and compliance with global standards like GDPR. Your data’s safety is our top priority.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    How can I get started with your services?
                </AccordionHeader>
                <AccordionBody>
                    Getting started is simple! Contact us through our website, email, or phone, and one of our experts will reach out to discuss your needs. We’ll guide you through the process and create a customized plan to achieve your goals.
                </AccordionBody>
            </Accordion>
        </>
    );
}