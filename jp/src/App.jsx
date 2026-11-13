import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import PropertyTypePage from "./pages/PropertyTypePage";
import LocationDetailsPage from "./pages/LocationDetailsPage";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/property-type/:slug"
        element={<PropertyTypePage />}
      />

      <Route
        path="/location/:slug"
        element={<LocationDetailsPage />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
path="/property/:slug"
element={<PropertyDetails/>}
/>

    </Routes>
  );
}

export default App;