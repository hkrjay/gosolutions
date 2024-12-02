import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { faqsData } from "../dummyData";

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
            {faqsData.map(({ ques, ans }, index) => (
                <Accordion key={index} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
                    <AccordionHeader className="sm:text-lg lg:text-xl" onClick={() => handleOpen(index + 1)}>{ques}</AccordionHeader>
                    <AccordionBody>{ans}</AccordionBody>
                </Accordion>
            ))}
        </>
    );
}