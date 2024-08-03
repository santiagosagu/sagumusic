import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
  if (import.meta.env.VITE_APP_MODE !== "development") {
    return;
  }

  try {
    const { worker } = await import("./mocks/browser");

    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
        options: { scope: "/" },
      },
    });

    console.log("Mock Service Worker iniciado correctamente.");
  } catch (error) {
    console.error("Error iniciando el Mock Service Worker:", error);
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
