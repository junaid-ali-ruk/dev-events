export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    date: "2025-12-15",
    time: "09:00"
  },
  {
    title: "Google I/O Extended",
    image: "/images/event2.png",
    slug: "google-io-extended-2025",
    location: "San Francisco, CA",
    date: "2025-11-20",
    time: "10:00"
  },
  {
    title: "DevFest 2025",
    image: "/images/event3.png",
    slug: "devfest-2025",
    location: "Bangalore, India",
    date: "2025-12-02",
    time: "14:00"
  },
  {
    title: "NodeConf EU",
    image: "/images/event4.png",
    slug: "nodeconf-eu-2025",
    location: "Kilkenny, Ireland",
    date: "2025-11-18",
    time: "09:30"
  },
  {
    title: "AWS re:Invent",
    image: "/images/event5.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV",
    date: "2025-12-01",
    time: "08:00"
  },
  {
    title: "TechCrunch Disrupt",
    image: "/images/event6.png",
    slug: "techcrunch-disrupt-2025",
    location: "San Francisco, CA",
    date: "2025-11-05",
    time: "09:00"
  }
];