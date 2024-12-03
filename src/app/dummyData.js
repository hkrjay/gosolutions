import { RiTailwindCssFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { SiSwiper } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { MdDataUsage } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { PiNetworkDuotone } from "react-icons/pi";

export const features = [
    {
        title: 'tailwindcss framework',
        desc: 'gosolutions using latest tailwind framework. The most camplete and flexible framework for website development.',
        icon: <RiTailwindCssFill size={40} />
    },
    {
        title: 'Blazing Speed',
        desc: 'Say goodbye to frustrating load times and hello to a seamless online experience. Explore, engage, and enjoy without the wait!',
        icon: <AiFillThunderbolt size={40} />
    },
    {
        title: 'Responsive Layouts',
        desc: 'UpTech layouts can fit to all screens sizes so it looks great on any kind of devices. One website for all devices.',
        icon: <GrPersonalComputer size={40} />
    },
    {
        title: 'react library',
        desc: 'gosolutions using latest tailwind framework. The most camplete and flexible framework for website development.',
        icon: <RiReactjsLine size={40} />
    },
    {
        title: 'Swiper Slider',
        desc: 'Swiper is the most modern free and open source slider with hardware accelerated transitions and amazing native behavior.',
        icon: <SiSwiper size={40} />
    },
    {
        title: 'Node.js',
        desc: 'Swiper is the most modern free and open source slider with hardware accelerated transitions and amazing native behavior.',
        icon: <RiNodejsLine size={40} />
    }
]

export const headerMenu = [
    {
        id: 1,
        item: 'services',
        link: '/services'
    },
    {
        id: 2,
        item: 'our team',
        link: '/our-team'
    },
    {
        id: 3,
        item: 'about',
        link: '/about'
    },
    {
        id: 4,
        item: 'contact us',
        link: '/contact-us'
    },
]

export const footerMenus = [
    {
        title: "Company",
        items: [{
            item: 'home',
            link: "/"
        },
        {
            item: 'services',
            link: '/services'
        },
        {
            item: 'about',
            link: '/about'
        },
        {
            item: 'contact us',
            link: '/contact-us'
        }
        ]
    },
    {
        title: "Services",
        items: [{
            item: 'Website Development',
            link: '/services'
        },
        {
            item: 'Landing Pages',
            link: '/services'
        },
        {
            item: 'Managed It Services',
            link: '/services'
        },
        {
            item: 'database management',
            link: '/services'
        },
        {
            item: 'help desk support',
            link: '/services'
        },
        ],
    },
    {
        title: "get in touch",
        items: [
            {
                item: 'phone',
                sub: '+918439202910',
                icon: ''
            },
            {
                item: 'Email',
                sub: 'jaigupta1042@gmail.com',
                icon: ''
            },
            {
                item: 'address',
                sub: '100 S Main St, Los Angeles, CA',
                icon: ''
            },
        ],
    },
];

export const servicesData = [
    {
        id: 1,
        service: 'Managed IT Services',
        desc: 'Provide management and maintenance of IT infrastructure, including servers, networks, and software.',
        price: 1000,
        icon: <MdDataUsage size={45} />
    },
    {
        id: 2,
        service: 'software development',
        desc: 'Provide management and maintenance of IT infrastructure, including servers, networks, and software.',
        price: 1000,
        icon: <GrServices size={45} />
    },
    {
        id: 4,
        service: 'database management',
        desc: 'Provide management and maintenance of IT infrastructure, including servers, networks, and software.',
        price: 1000,
        icon: <FiDatabase size={45} />
    },
    {
        id: 5,
        service: 'network services',
        desc: 'Provide management and maintenance of IT infrastructure, including servers, networks, and software.',
        price: 1000,
        icon: <PiNetworkDuotone size={45} />
    },
    {
        id: 6,
        service: 'website development',
        desc: 'Provide management and maintenance of IT infrastructure, including servers, networks, and software.',
        price: 1000,
        icon: <FaCode size={45} />
    },
    {
        id: 7,
        service: 'UI/UX design',
        desc: 'Provide management and maintenance of IT infrastructure, including servers, networks, and software.',
        price: 1000,
        icon: <GrServices size={45} />
    },
    {
        id: 8,
        service: 'Landing Pages',
        desc: 'Provide management and maintenance of IT infrastructure, including servers, networks, and software.',
        price: 1000,
        icon: <GrServices size={45} />
    },
]

export const teamData = [
    {
        id: 101,
        name: 'Jigyanshu',
        position: 'CEO/ Founder',
        img: '/images/user-profile.png'
    },
    {
        id: 102,
        name: 'Archit',
        position: 'Specialist Frontend Developer',
        img: '/images/user-profile.png'
    },
    {
        id: 103,
        name: 'Manan',
        position: 'Frontend Developer',
        img: '/images/user-profile.png'
    },
    {
        id: 104,
        name: 'Piyush',
        position: 'Tester',
        img: '/images/user-profile.png'
    },
    {
        id: 105,
        name: 'Rohit',
        position: 'Specialist Automated Tester',
        img: '/images/user-profile.png'
    },
    {
        id: 106,
        name: 'Tanishq',
        position: 'Specialist Backend Developer',
        img: '/images/user-profile.png'
    },
    {
        id: 107,
        name: 'XYZ',
        position: 'Developer',
        img: '/images/user-profile.png'
    },
    {
        id: 108,
        name: 'XYZ',
        position: 'Developer',
        img: '/images/user-profile.png'
    }
]

export const faqsData = [
    {
        ques: 'What services we can offer?',
        ans: 'We provide a wide range of IT services, including web development, mobile app development, cloud solutions, IT consulting, cybersecurity, managed IT support, and digital marketing. Whether you’re looking to build a website or secure your business systems, we’ve got you covered.'
    },
    {
        ques: 'How can your IT services help my business grow?',
        ans: 'Our services are designed to optimize your business operations, enhance your online presence, and improve efficiency. From creating robust websites to implementing secure and scalable IT infrastructure, we help businesses achieve sustainable growth and stay ahead in the digital era.'
    },
    {
        ques: 'Do you customize your services based on business needs?',
        ans: ' Absolutely! We understand that every business is unique. We offer tailored solutions to meet your specific goals and challenges, ensuring that our services align perfectly with your business requirements.'
    },
    {
        ques: 'What industries do we specialize in?',
        ans: ' We prioritize data security by implementing industry-leading practices, including encryption, firewalls, regular audits, and compliance with global standards like GDPR. Your data’s safety is our top priority.'
    },
    {
        ques: 'How can I get started with your services?',
        ans: 'We provide a wide range of IT services, including web development, mobile app development, cloud solutions, IT consulting, cybersecurity, managed IT support, and digital marketing. Whether you’re looking to build a website or secure your business systems, we’ve got you covered.'
    },
]

export const projectData = [
    {
        title: 'SaveMax (next.js)',
        img: 'savemaxweb.png',
        lnk: 'https://savemax.com/'
    },
    {
        title: 'Platinum Visionaries (wordpress)',
        img: 'platinumv.png',
        lnk: 'https://platinumvisionaries.com/'
    },
]