import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const socials = [
    {
      label: "WhatsApp",
      href: "https://api.whatsapp.com/message/RRN5XSTCXBCBK1?autoload=1&app_absent=0",
      icon: MessageCircle,
    },
    {
      label: "Email",
      href: "mailto:comercial.viniciusugc@gmail.com",
      icon: Mail,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/_oviniciusaraujo/",
      icon: Instagram,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@viniviews_",
      icon: TikTokIcon,
    },
  ];

  return (
    <footer id="contato" className="bg-[#2f2f2f] py-16 max-[767px]:py-12">
      <div className="mx-auto w-[1240px] max-w-full px-6 text-center">
        <p className="font-display text-[14px] max-[767px]:text-[15px] font-bold tracking-[0.3em] text-[#7efe11] mb-8">
          ENTRAR EM CONTATO
        </p>

        <div className="flex items-center justify-center gap-8 max-[767px]:gap-6 mb-10">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="group flex h-14 w-14 max-[767px]:h-12 max-[767px]:w-12 items-center justify-center rounded-full border border-[#7efe11]/30 text-[#7efe11] transition-all duration-300 hover:bg-[#7efe11] hover:text-[#252525] hover:border-[#7efe11] hover:scale-110"
              >
                <Icon size={26} className="max-[767px]:h-[22px] max-[767px]:w-[22px]" />
              </a>
            );
          })}
        </div>

        <p className="text-[13px] max-[767px]:text-[14px] text-white/40 font-medium tracking-wide">
          Vinícius Araújo · UGC Creator
        </p>
      </div>
    </footer>
  );
}

function TikTokIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4c.5.6 1.5 1.5 3 1.5" />
    </svg>
  );
}
