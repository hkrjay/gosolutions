import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function TeamCard({ data: { name, position, img, } }) {
    return (
        <Card className="shadow-lg hover:border-blue-700 border rounded-none">
            <CardHeader floated={false} className="h-48 w-48 shadow-none mx-auto">
                <Image src={img} alt="profile-picture" fill className="bg-cover w-100 h-100" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography color="blue-gray" className="font-medium text-sm" textGradient>
                    {position}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 p-3 bg-gray-50">
                <Tooltip content="Follow">
                    <Link
                        href="#"
                        className="bg-gray-200/60 p-2 text-blue-700 hover:bg-blue-700 hover:text-gray-100"
                    >
                        <FaFacebookF size={15} />
                    </Link>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="black"
                        className="bg-gray-200/50 p-2 hover:bg-gray-900 hover:text-gray-100"
                    >
                        <FaXTwitter size={15} />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        className="bg-gray-200/50 p-2 hover:bg-purple-800 hover:text-gray-100"
                    >
                        <FaInstagram size={15} />
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}