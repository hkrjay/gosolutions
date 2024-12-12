import Image from "next/image";
import Link from "next/link";
import {
    Tooltip,
} from "@material-tailwind/react";

export function ServicesCard({ data: { label, img, desc, value } }) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-7 px-5 shadow-xl text-center w-full transform transition duration-300 hover:-translate-y-2">
            <Image src={`/images/services/${img}`} alt="development" width={100} height={100} />
            <h2 className="lg:text-2xl sm:text-xl font-medium capitalize">{label}</h2>
            <p className="line-clamp-3">{desc}</p>
            <Tooltip content="Learn More" placement="top">
                <Link href={`/services/${value}`}>
                    <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-gray-100 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </div>
                </Link>
            </Tooltip>
        </div>
    );
}