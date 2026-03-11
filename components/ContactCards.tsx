import Image from "next/image";

const contactCards = [
  {
    title: "CALL US DIRECT",
    subtitle: "",
    detail: "80037483",
    buttonLabel: "Call Now",
    href: "tel:80037483",
    icon: "phone",
  },
  {
    title: "WhatsApp Booking",
    subtitle: "",
    detail: "+971502785060",
    buttonLabel: "Chat Now",
    href: "https://wa.me/971502785060",
    icon: "whatsapp",
  },
];

type IconType = "phone" | "whatsapp";

function Icon({ type }: { type: IconType }) {
  if (type === "whatsapp") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 items-center justify-center"
      >
        {/* WhatsApp logo from design */}
        <svg
          className="h-10 w-10"
          viewBox="0 0 54 54"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="filter0_d_whatsapp"
              x="0"
              y="0"
              width="54"
              height="54"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.777922 0 0 0 0 0.956244 0 0 0 0 0.785127 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
          <g filter="url(#filter0_d_whatsapp)">
            <path
              d="M27.0057 0H26.9943C14.3126 0 4 10.3155 4 23C4 28.0312 5.6215 32.6945 8.37862 36.4809L5.51225 45.0254L14.3529 42.1993C17.9897 44.6085 22.3281 46 27.0057 46C39.6874 46 50 35.6816 50 23C50 10.3184 39.6874 0 27.0057 0Z"
              fill="#4CAF50"
            />
          </g>
          <path
            d="M40.3888 32.4789C39.834 34.0458 37.6317 35.3453 35.8751 35.7248C34.6733 35.9807 33.1036 36.1848 27.8193 33.994C21.0602 31.1938 16.7075 24.3254 16.3682 23.8798C16.0433 23.4342 13.637 20.2429 13.637 16.9424C13.637 13.6419 15.3131 12.0348 15.9887 11.3448C16.5436 10.7784 17.4607 10.5197 18.3405 10.5197C18.6251 10.5197 18.881 10.534 19.111 10.5455C19.7866 10.5743 20.1258 10.6145 20.5715 11.6812C21.1263 13.018 22.4776 16.3185 22.6386 16.6578C22.8025 16.997 22.9663 17.457 22.7363 17.9027C22.5207 18.3627 22.331 18.5668 21.9917 18.9578C21.6525 19.3488 21.3305 19.6478 20.9912 20.0675C20.6807 20.4327 20.33 20.8237 20.721 21.4993C21.112 22.1605 22.4632 24.3657 24.4527 26.1367C27.0201 28.4223 29.1016 29.1525 29.8462 29.463C30.4011 29.693 31.0623 29.6384 31.4677 29.2072C31.9823 28.6523 32.6177 27.7323 33.2646 26.8267C33.7246 26.1769 34.3053 26.0964 34.9148 26.3264C35.5358 26.542 38.822 28.1664 39.4976 28.5028C40.1732 28.842 40.6188 29.003 40.7827 29.2877C40.9437 29.5723 40.9437 30.9092 40.3888 32.4789Z"
            fill="#FAFAFA"
          />
        </svg>
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 items-center justify-center"
    >
      {/* Gradient red phone icon from design */}
      <svg
        className="h-8 w-8"
        viewBox="0 0 46 46"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="phoneIconGradient"
            x1="23.0001"
            y1="0"
            x2="23.0001"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF4A4B" />
            <stop offset="1" stopColor="#E18A8A" />
          </linearGradient>
        </defs>
        <path
          d="M42.309 30.1937C39.4927 30.1937 36.7274 29.7533 34.107 28.8873C32.8229 28.4493 31.2444 28.8511 30.4607 29.656L25.2885 33.5605C19.2902 30.3586 15.5953 26.6649 12.4371 20.7116L16.2267 15.6741C17.2113 14.6909 17.5645 13.2546 17.1413 11.9069C16.2717 9.27271 15.8299 6.50876 15.8299 3.69126C15.83 1.65588 14.1741 0 12.1388 0H3.69114C1.65588 0 0 1.65588 0 3.69114C0 27.0206 18.9796 46 42.309 46C44.3442 46 46.0001 44.3441 46.0001 42.3089V33.8848C46 31.8496 44.3441 30.1937 42.309 30.1937Z"
          fill="url(#phoneIconGradient)"
        />
      </svg>
    </span>
  );
}

export function ContactCards() {
  return (
    <section className="mt-6 w-full px-4 pb-8 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-amber-50/80 p-4 shadow-sm ring-1 ring-amber-100 sm:p-5">
        {/* <p className="mb-6 text-center text-[13px] leading-relaxed text-[#D36A08] sm:text-sm"
        >
          Please use the contact numbers below to make or manage your bookings
          directly - we&apos;re here to assist you.
        </p> */}
<p className="mb-6 flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-[#D36A08] sm:text-sm">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l6.516 11.59c.75 1.334-.213 2.99-1.742 2.99H3.483c-1.53 0-2.492-1.656-1.743-2.99l6.517-11.59zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-7a1 1 0 00-.993.883L9 7v3a1 1 0 001.993.117L11 10V7a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>

  <span>
    Please use the contact numbers below to make or manage your bookings
    directly - we&apos;re here to assist you.
  </span>
</p>

        <div className="grid gap-4 md:grid-cols-2">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-md shadow-amber-100 ring-1 ring-amber-100"
            >
              <Icon type={card.icon as IconType} />
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-700">
                {card.title}
              </h3>
              {card.subtitle && (
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {card.subtitle}
                </p>
              )}
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {card.detail}
              </p>
              <a
                href={card.href}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50"
                aria-label={`${card.buttonLabel} via ${card.title}`}
              >
                {card.buttonLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

