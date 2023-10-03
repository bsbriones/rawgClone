import { createBrowserRouter } from "react-router-dom";
import RootApp from "./routes/RootApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootApp />,
  },
]);

export default router;
