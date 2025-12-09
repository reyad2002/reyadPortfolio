import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+201003472237"; // Replace with your WhatsApp number with country code
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20" />

        {/* Main button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Hover tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-slate-700">
          Chat with us
        </div>
      </div>
    </a>
  );
}
