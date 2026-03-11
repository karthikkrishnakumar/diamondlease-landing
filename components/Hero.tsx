import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center px-4 pt-6 text-center sm:px-8 sm:pt-4">
      <div className="relative mb-4 h-52 w-full max-w-md sm:h-56">
        {/* Mobile hero image */}
        <div className="relative h-full w-full sm:hidden">
          <Image
            src="/images/mobile img.png"
            alt="Diamondlease mobile booking experience"
            fill
            sizes="80vw"
            className="rounded-xl object-contain shadow-sm"
            priority
          />
        </div>
        {/* Desktop / tablet hero image */}
        <div className="relative hidden h-full w-full sm:block">
          <Image
            src="/images/website image.png"
            alt="Diamondlease website experience"
            fill
            sizes="(min-width: 768px) 400px, 80vw"
            className="rounded-xl object-contain shadow-sm"
            priority
          />
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-[40px] font-bold leading-[1.21] tracking-tight text-slate-900 sm:text-[64px]">
          We&apos;ll Be Back
        </h1>
        <h2 className="text-[40px] font-bold leading-[1.21] tracking-tight text-red-600 sm:text-[64px]">
          Very Soon
        </h2>
      </div>
      <p className="mt-6 max-w-2xl text-xs font-semibold leading-relaxed text-red-600 sm:text-sm">
        Our website is currently experiencing a temporary technical issue. Our team is actively working to restore full functionality. In the meantime, our services continue as usual and our team remains available to assist you. We appreciate your patience and understanding
      </p>
    </section>
  );
}

