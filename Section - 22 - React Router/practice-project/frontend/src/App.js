// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements) - DONE
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages - DONE
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components - DONE
// 4. Add properly working links to the MainNavigation - DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active - DONE
// 6. Output a list of dummy events to the EventsPage - DONE
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage - DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import EventDetailPage, {
  loader as eventLoader,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage.";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/events", element: <EventsPage />, loader: eventsLoader },
      {
        path: "/events/:id",
        element: <EventDetailPage />,
        loader: eventLoader,
      },
      { path: "/events/new", element: <NewEventPage /> },
      { path: "/events/:id/edit", element: <EditEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
