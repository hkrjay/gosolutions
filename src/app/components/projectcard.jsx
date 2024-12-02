import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
  } from "@material-tailwind/react";
   
  export function ProjectCard() {
    return (
      <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center group "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/images/demo1.webp')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative bottom-1/4 md:px-12">
          <Button
            variant="p"
            className="mb-6 opacity-0 group-hover:opacity-100 trasition ease-in-outout delay-150 font-medium leading-[1.5] bg-blue-700"
          >
            Preview
          </Button>
        </CardBody>
      </Card>
    );
  }