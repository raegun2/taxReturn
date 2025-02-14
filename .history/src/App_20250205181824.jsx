import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

import ContactMe from "./pages/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainPage /> }, // Default route inside Layout
      { path: "/pages/ContactMe", element: <ContactMe /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;