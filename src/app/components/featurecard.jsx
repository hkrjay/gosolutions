import {
    Card,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

export function FeatureCard({ title, desc, icon }) {
    return (
        <Card className="p-8 bg-gray-900 text-gray-200 transition-all delay-100 hover:bg-gray-200 hover:text-gray-900 cursor-pointer">
            <CardBody>
                <div className="text-blue-800">
                    {icon}
                </div>
                <Typography variant="h5" className="my-2 capitalize">
                    {title}
                </Typography>
                <Typography as={'p'} className="text-sm leading-6">
                    {desc}
                </Typography>
            </CardBody>
        </Card>
    );
}