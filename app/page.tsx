import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"

const events = [
  {
    image: "/images/event1.png",
    title: "Event One",
    slug: "event-1",
    location: "location-1",
    date: "Date-1",
    time: "Time-1"
  },
  {
    image: "/images/event2.png",
    title: "Event two",
    slug: "event-2",
    location: "location-2",
    date: "Date-2",
    time: "Time-2"
  },

]

export default function Home() {
  return (
    <section>

      <h1 className="text-center">The Hub For Every Dev <br />
        Event You Dont miss
      </h1>
      <p className="text-center mt-5">HackaThons, Meetups, Conferances, All in one Place</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title} >
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}