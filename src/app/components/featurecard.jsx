import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { motion } from "motion/react"

export function FeatureCard({ title, desc, img, index }) {
    return (
        <motion.Card
            className="p-7 bg-gray-900 text-gray-100 transition-all delay-10 cursor-pointer rounded-lg hover:shadow-2xl"
        >
            <CardBody>
                <Image src={`/images/features/${img}`} alt={title} width={70} height={70} />
                <Typography variant="h6" className="my-2 text-lg capitalize">
                    {title}
                </Typography>
                <Typography as={'p'} className="text-sm leading-6">
                    {desc}
                </Typography>
            </CardBody>
        </motion.Card>
    );
}