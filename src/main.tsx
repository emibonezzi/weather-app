import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SearchBar from "./components/SearchBar.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <header className="h-[50vh] flex justify-center items-center">
        <SearchBar />
      </header>
      <main className="grid grid-cols-2">
        <App />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
