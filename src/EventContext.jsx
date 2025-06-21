import React, { createContext, useContext } from "react";

const MyEvents = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
    title: "CONFIG Watch Party, PH Chapter",
    date: "Today",
    attendees: "99+ registered",
    location: "Onsite & Virtual",
    fullDate: "5th May, 2025",
    tag: "Tech Events"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
    title: "CONFIG Watch Party, PH Chapter",
    date: "Today",
    attendees: "99+ registered",
    location: "Onsite & Virtual",
    fullDate: "5th May, 2025",
    tag: "Tech Events"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop",
    title: "CONFIG Watch Party, PH Chapter",
    date: "Today",
    attendees: "99+ registered",
    location: "Onsite & Virtual",
    fullDate: "5th May, 2025",
    tag: "Tech Events"
  }
];

const EventContext = createContext([]);

export function useEventContext() {
  return useContext(EventContext);
}

export function EventProvider({ children }) {
  return (
    <EventContext.Provider value={MyEvents}>
      {children}
    </EventContext.Provider>
  );
}
