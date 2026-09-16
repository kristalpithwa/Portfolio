"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiCopy,
  FiMail,
  FiX,
  FiExternalLink,
} from "react-icons/fi";

export interface ToastOptions {
  title?: string;
  message?: string;
  type?: "success" | "info" | "mail";
  duration?: number;
  actionText?: string;
  actionHref?: string;
}

interface ToastContextType {
  showToast: (options: ToastOptions | string) => void;
  copyEmailWithToast: (email?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastOptions | null>(null);

  const showToast = useCallback((options: ToastOptions | string) => {
    if (typeof options === "string") {
      setToast({
        title: "Notification",
        message: options,
        type: "success",
        duration: 2000,
      });
    } else {
      setToast({
        title: options.title || "Notification",
        message: options.message,
        type: options.type || "success",
        duration: options.duration || 3500,
        actionText: options.actionText,
        actionHref: options.actionHref,
      });
    }
  }, []);

  const copyEmailWithToast = useCallback(
    (email: string = "crystalpithwa@gmail.com") => {
      try {
        navigator.clipboard.writeText(email);
      } catch {
        // fallback
      }

      setToast({
        title: "Email Copied to Clipboard!",
        message: email,
        type: "mail",
        duration: 4000,
      });
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ showToast, copyEmailWithToast }}>
      {children}

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <ToastItem
            key={toast.message || toast.title}
            toast={toast}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

const ToastItem: React.FC<{
  toast: ToastOptions;
  onClose: () => void;
}> = ({ toast, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, toast.duration || 3500);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-[999] max-w-sm w-[calc(100vw-3rem)] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.92 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="pointer-events-auto relative overflow-hidden rounded-2xl p-4 bg-[#0a1124]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 text-white"
        role="status"
        aria-live="polite"
      >
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start gap-3.5 relative z-10">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
            {toast.type === "mail" ? (
              <FiMail size={18} className="text-cyan-300" />
            ) : toast.type === "info" ? (
              <FiCopy size={18} className="text-blue-300" />
            ) : (
              <FiCheckCircle size={18} className="text-emerald-300" />
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0 pr-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-sm font-bold text-white tracking-tight">
                {toast.title}
              </h4>
            </div>

            {toast.message && (
              <p className="text-xs text-slate-300 font-mono mt-1 break-all bg-white/[0.04] px-2 py-1 rounded-md border border-white/[0.06]">
                {toast.message}
              </p>
            )}

            {toast.actionHref && toast.actionText && (
              <div className="mt-2.5">
                <a
                  href={toast.actionHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{toast.actionText}</span>
                  <FiExternalLink size={12} />
                </a>
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close notification"
          >
            <FiX size={15} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
