import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export function FeatureCard({ title, desc, img }) {
    return (
        <Card className="p-7 bg-gray-900 text-gray-100 transition-all delay-100 hover:bg-gray-200 hover:text-gray-900 cursor-pointer rounded-lg">
            <CardBody>
                <Image src={`/images/features/${img}`} alt={title} width={70} height={70} />
                <Typography variant="h6" className="my-2 text-lg capitalize">
                    {title}
                </Typography>
                <Typography as={'p'} className="text-sm leading-6">
                    {desc}
                </Typography>
            </CardBody>
        </Card>
    );
}