import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import PropertyTypePage from "./pages/PropertyTypePage";
import LocationDetailsPage from "./pages/LocationDetailsPage";

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

    </Routes>
  );
}

export default App;