import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import AppRoute from "./assets/Routes/AppRoute.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

// Create a SINGLE instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <div className="max-w-screen-xl mx-auto">
          <AppRoute />
        </div>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);
