import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function ServicesCard({ data: { service, icon, desc, price }, handleOpen }) {
    return (
        <Card className="bg-gray-900 text-white hover:scale-105 transition-all ease-linear">
            <CardHeader shadow={false} floated={false} className="bg-transparent text-blue-700">
                <div>{icon}</div>
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography variant="h5" className="capitalize">
                        {service}
                    </Typography>
                    <Typography className="font-medium">
                        ₹{price}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    className="font-normal opacity-75"
                >
                    {desc}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    onClick={handleOpen}
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/20 text-blue-700 border border-blue-700 text-center hover:shadow-none hover:bg-blue-700 hover:text-gray-200"
                >
                    Get Started
                </Button>
            </CardFooter>
        </Card>
    );
}