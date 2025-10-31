import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string,
    image: string,
    slug:string,
    location:string,
    date:string,
    time:string
}

export default function EventCard({ title, image }: Props) {
    return (
       <Link href={"/events"} id="event-card">
         <Image src={image} alt="event-card-image" width={410} height={300} className="poster"/>
         <p className="title">{title}</p>
       </Link>
    );
}