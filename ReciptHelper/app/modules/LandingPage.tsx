import { Link } from "@remix-run/react";

const features = [
  {
    title: "Hurtig registrering",
    description:
      "Gem køb, pris, butik og kvitteringslink i en fokuseret arbejdsgang.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 5v14m7-7H5"
      />
    ),
  },
  {
    title: "Overblik på få sekunder",
    description:
      "Find produkter, totalværdi og aktive kvitteringer uden at lede i mailen.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4 7h16M4 12h10M4 17h7"
      />
    ),
  },
  {
    title: "Automatisk oprydning",
    description:
      "Hold arkivet aktuelt med indstillinger for gamle kvitteringer.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 12l2 2 4-5m5 3a8 8 0 11-16 0 8 8 0 0116 0z"
      />
    ),
  },
];

function LandingPage() {
  return (
    <div className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section
        className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-cover bg-center pt-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_42%,rgba(2,6,23,0.18)_100%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
              Kvitteringer samlet, søgbart og klar til reklamation
            </p>
            <h1 className="max-w-2xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Recipt Helper
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Et roligt digitalt arkiv til dine kvitteringer, så du hurtigt kan
              finde køb, garantidatoer og dokumentation, når du får brug for det.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/signup" className="primary-button bg-white text-slate-950 hover:bg-slate-100">
                Opret bruger
              </Link>
              <Link
                to="/Login"
                className="secondary-button border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/15"
              >
                Log på
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="Features" className="px-4 py-20 sm:px-6">
        <div className="app-container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Funktioner
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Bygget til hverdagskøb og reklamationer
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Recipt Helper holder informationen tæt på det, du faktisk skal
              bruge: produkt, pris, butik, købsdato og et direkte link til
              kvitteringen.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="panel p-6">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 pb-20 sm:px-6">
        <div className="app-container">
          <div
            id="About"
            className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_0.8fr] md:p-10 dark:border-slate-800 dark:bg-slate-900"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                Om Recipt Helper
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                Mindre rod. Mere kontrol.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                Platformen er designet til at gøre kvitteringer nemme at gemme,
                søge i og slette igen. Det giver et enkelt overblik over dine
                køb uden tunge mapper eller manuelle regneark.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
                <p className="text-3xl font-black text-slate-950 dark:text-white">
                  2 år
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Standard reklamationsperiode
                </p>
              </div>
              <div className="rounded-2xl bg-blue-50 p-5 dark:bg-blue-500/10">
                <p className="text-3xl font-black text-blue-700 dark:text-blue-300">
                  1 sted
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Samlet arkiv for dine køb
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 dark:border-slate-800 dark:bg-slate-950 sm:px-6">
        <div className="app-container flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Recipt Helper.</p>
          <p>Gem kvitteringerne før du får brug for dem.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
