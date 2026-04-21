const partnerModules = import.meta.glob<string>("../assets/partner/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

const partnerImages = Object.entries(partnerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

const Partners = () => {
  const list = partnerImages.length > 0 ? [...partnerImages, ...partnerImages] : [];

  return (
    <section className="py-14 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto container-px text-center mb-8">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">Ils nous font confiance</p>
      </div>

      {list.length > 0 ? (
        <div className="marquee">
          <div className="marquee-track items-center">
            {list.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex h-16 md:h-20 shrink-0 items-center justify-center px-8 opacity-80 transition-opacity hover:opacity-100"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 md:max-h-16 w-auto max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Partners;
