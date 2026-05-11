import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5493584314853?text=Hola%20AnubisTattoo%2C%20quiero%20reservar%20una%20sesi%C3%B3n"
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-deep hover:scale-105 transition-transform animate-float"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}
