"use client";

import { useEffect, useState } from "react";

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === "accepted") setShow(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    setDeferredPrompt(null);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-border bg-surface p-5 shadow-2xl backdrop-blur-lg sm:left-auto sm:right-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
          <svg className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-text">Instalar Trep</h3>
          <p className="mt-1 text-sm text-text-muted">
            Instalá la app en tu dispositivo para generar imágenes más rápido.
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleDismiss}
          className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-card"
        >
          Ahora no
        </button>
        <button
          onClick={handleInstall}
          className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          Instalar
        </button>
      </div>
    </div>
  );
}
