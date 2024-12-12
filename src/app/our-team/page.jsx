'use client'

import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function TeamCard({ img, name, title }) {
    return (
        <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
            <CardBody className="text-center">
                <Avatar
                    src={img}
                    alt={name}
                    variant="circular"
                    size="xxl"
                    className="mx-auto mb-6 object-top"
                />
                <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
                    {name}
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mb-2 !text-base !font-semibold text-gray-600"
                >
                    {title}
                </Typography>
                <div className="flex items-center justify-center gap-1.5">
                    <IconButton variant="text" color="gray">
                        <FaXTwitter size={20} />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <FaLinkedinIn size={20} />
                    </IconButton>
                    <IconButton variant="text" color="gray">
                        <FaInstagram size={20} />
                    </IconButton>
                </div>
            </CardBody>
        </Card>
    );
}


const members = [
    {
        img: `https://www.material-tailwind.com/img/avatar1.jpg`,
        name: "Ryan Samuel",
        title: "Co-Founder",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar2.jpg`,
        name: "Ryan Samuel",
        title: "Co-Founder",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar5.jpg`,
        name: "Nora Hazel",
        title: "UI/UX Designer",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar4.jpg`,
        name: "Otto Gonzalez",
        title: "Marketing Specialist",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar6.jpg`,
        name: "Emma Roberts",
        title: "UI Designer",
    },
    {
        img: `https://www.material-tailwind.com/img/avatar3.jpg`,
        name: "William Pearce",
        title: "Web Developer",
    },
    {
        img: "https://www.material-tailwind.com/image/avatar7.svg",
        name: "Bruce Mars",
        title: "UI/UX Designer",
    },
    {
        img: "https://www.material-tailwind.com/image/avatar8.svg",
        name: "Annie Sprrat",
        title: "Marketing Specialist",
    },
];

export function TeamSection12() {
    return (
        <section className="min-h-screen lg:py-28 relative bg-black/90 pt-20 pb-16 bg-[url('/images/home/herobanner2.jpg')]">
            <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
            <div className="lg:max-w-screen-lg sm:max-w-screen-sm mx-auto z-10 relative">
                <div className="mb-16 text-center lg:mb-28">
                    <Typography
                        variant="h6"
                        className="text-lg text-gray-100"
                    >
                        Meet the Team
                    </Typography>
                    <Typography
                        variant="h1"
                        className="my-2 !text-2xl lg:!text-4xl text-gray-100"
                    >
                        Behind the Success: Our Dedicated Team
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full !text-gray-500 max-w-4xl"
                    >
                        From visionary leadership to creative talent, and technical wizards,
                        each team member plays a pivotal role in delivering the exceptional
                        service and innovative solutions.
                    </Typography>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {members.map((props, key) => (
                        <TeamCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection12;