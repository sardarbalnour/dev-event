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
    title: "AWS re:Invent 2026",
    image: "/images/event1.png",
    slug: "aws-reinvent-2026",
    location: "Las Vegas, Nevada, USA",
    date: "November 30 - December 4, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "KubeCon + CloudNativeCon 2026",
    image: "/images/event2.png",
    slug: "kubecon-cloudnativecon-2026",
    location: "Los Angeles, California, USA",
    date: "November 9 - 12, 2026",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "Web Summit 2026",
    image: "/images/event3.png",
    slug: "web-summit-2026",
    location: "Lisbon, Portugal",
    date: "November 9 - 12, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "FOSDEM",
    image: "/images/event4.png",
    slug: "fosdem",
    location: "Brussels, Belgium",
    date: "February 7 - 8, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "React Conf",
    image: "/images/event5.png",
    slug: "react-conf",
    location: "Las Vegas, Nevada, USA",
    date: "October 7 - 8, 2025",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "Google I/O",
    image: "/images/event6.png",
    slug: "google-io",
    location: "Mountain View, California, USA",
    date: "May 20 - 21, 2025",
    time: "10:00 AM - 5:00 PM",
  },
];
