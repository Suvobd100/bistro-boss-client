import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import AppRoute from "./assets/Routes/AppRoute.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";

// Create a SINGLE instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="max-w-screen-xl mx-auto">
              <AppRoute />
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
