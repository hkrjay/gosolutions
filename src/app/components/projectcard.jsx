import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import Link from "next/link";

export function ProjectCard({ data: { title, img, lnk } }) {
  return (
    <>
      <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[24rem] items-end justify-center overflow-hidden text-center group rounded-lg"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-left-top bg-no-repeat"
          style={{ backgroundImage: `url('/images/${img}')` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative top-1/4 p-0">
          <Link href={lnk} target="_blank">
            <Button
              variant="p"
              className="opacity-0 group-hover:opacity-100 trasition ease-in-outout delay-150 font-medium leading-[1.5] bg-blue-700"
            >
              Preview
            </Button>
          </Link>
        </CardBody>
        <CardFooter className="pt-0 text-gray-200 z-20">
          <Typography variant="paragraph">{title}</Typography>
        </CardFooter>
      </Card>
    </>
  );
}