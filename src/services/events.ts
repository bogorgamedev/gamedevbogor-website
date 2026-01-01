import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Event } from "../types/event";

export async function getEvents(): Promise<Event[]> {
  const snapshot = await getDocs(collection(db, "events"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Event[];
}
