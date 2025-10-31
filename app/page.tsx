import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"

export default function Home() {
  return (
    <section>

      <h1 className="text-center">The Hub For Every Dev <br />
        Event You Dont miss
      </h1>
      <p className="text-center mt-5">HackaThons, Meetups, Conferances, All in one Place</p>
      <ExploreBtn />

      <div id="events" className="mt-20 space-y-7">
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