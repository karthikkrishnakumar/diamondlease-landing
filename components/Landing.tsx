import Image from "next/image";

const contactCards = [
  {
    title: "CALL US DIRECT",
    detail: "80037483",
    buttonLabel: "Call Now",
    href: "tel:80037483",
    icon: "phone",
  },
  {
    title: "WhatsApp Booking",
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
      <span className="inline-flex h-10 w-10 items-center justify-center">
        <svg className="h-10 w-10" viewBox="0 0 54 54">
          <path
            d="M27.0057 0H26.9943C14.3126 0 4 10.3155 4 23C4 28.0312 5.6215 32.6945 8.37862 36.4809L5.51225 45.0254L14.3529 42.1993C17.9897 44.6085 22.3281 46 27.0057 46C39.6874 46 50 35.6816 50 23C50 10.3184 39.6874 0 27.0057 0Z"
            fill="#4CAF50"
          />
          <path
            d="M40.3888 32.4789C39.834 34.0458 37.6317 35.3453 35.8751 35.7248C34.6733 35.9807 33.1036 36.1848 27.8193 33.994C21.0602 31.1938 16.7075 24.3254 16.3682 23.8798C16.0433 23.4342 13.637 20.2429 13.637 16.9424C13.637 13.6419 15.3131 12.0348 15.9887 11.3448C16.5436 10.7784 17.4607 10.5197 18.3405 10.5197C18.6251 10.5197 18.881 10.534 19.111 10.5455C19.7866 10.5743 20.1258 10.6145 20.5715 11.6812C21.1263 13.018 22.4776 16.3185 22.6386 16.6578C22.8025 16.997 22.9663 17.457 22.7363 17.9027C22.5207 18.3627 22.331 18.5668 21.9917 18.9578C21.6525 19.3488 21.3305 19.6478 20.9912 20.0675C20.6807 20.4327 20.33 20.8237 20.721 21.4993C21.112 22.1605 22.4632 24.3657 24.4527 26.1367C27.0201 28.4223 29.1016 29.1525 29.8462 29.463C30.4011 29.693 31.0623 29.6384 31.4677 29.2072C31.9823 28.6523 32.6177 27.7323 33.2646 26.8267C33.7246 26.1769 34.3053 26.0964 34.9148 26.3264C35.5358 26.542 38.822 28.1664 39.4976 28.5028C40.1732 28.842 40.6188 29.003 40.7827 29.2877C40.9437 29.5723 40.9437 30.9092 40.3888 32.4789Z"
            fill="#FAFAFA"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center">
      <svg className="h-8 w-8" viewBox="0 0 46 46">
        <defs>
          <linearGradient
            id="phoneIconGradient"
            x1="23"
            y1="0"
            x2="23"
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

export default function Landing() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-start gap-4 px-4 pt-2 sm:px-8">
<main className="flex min-h-screen flex-col items-center justify-start gap-4 px-4 pt-6 sm:px-8">

      {/* HERO */}
      <section className="flex flex-col items-center text-center">

        <div className="relative mb-1 h-32 w-full max-w-md sm:h-36">

          <div className="relative h-full w-full sm:hidden">
            <Image
              src="/images/mobile img.png"
              alt="Mobile booking"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="relative hidden h-full w-full sm:block">
            <Image
              src="/images/website image.png"
              alt="Website booking"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>

        <h1 className="mt-1 text-[36px] font-bold leading-tight text-slate-900 sm:text-[56px]">
  We'll Be Back
</h1>

<h2 className="text-[36px] font-bold leading-tight text-red-600 sm:text-[56px]">
  Very Soon
</h2>

        {/* <p className="mt-2 max-w-xl text-xs font-semibold text-red-600 sm:text-sm"> */}
        <p className="mt-3 mb-4 max-w-xl text-xs font-semibold text-red-600 sm:text-sm">

          Our website is currently experiencing a temporary technical issue.
          Our team is actively working to restore full functionality. In the
          meantime, our services continue as usual and our team remains
          available to assist you.
        </p>

      </section>

      {/* CONTACT CARDS */}
      <section className="w-full max-w-3xl">

        <div className="rounded-2xl bg-amber-50/80 p-4 shadow-sm ring-1 ring-amber-100">

          <p className="mb-4 flex items-center justify-center gap-2 text-xs text-[#D36A08] sm:text-sm">
            ⚠️ Please use the contact numbers below to make or manage your bookings directly
          </p>

          <div className="grid gap-3 md:grid-cols-2">

            {contactCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col items-center rounded-xl bg-white p-4 text-center shadow-md ring-1 ring-amber-100"
              >

                <Icon type={card.icon as IconType} />

                <h3 className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                  {card.title}
                </h3>

                <p className="mt-1 text-base font-semibold text-slate-900">
                  {card.detail}
                </p>

                <a
                  href={card.href}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-1 text-xs font-semibold text-white transition hover:bg-red-700"
                >
                  {card.buttonLabel}
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
