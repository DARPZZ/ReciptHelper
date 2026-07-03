type Props = {
  text: string;
  description?: string;
  oncClickEvent: () => void;
  activeText: boolean;
};

function SettingComp({ text, description, activeText, oncClickEvent }: Props) {
  return (
    <div className="panel flex items-start justify-between gap-5 p-6">
      <div>
        <h2 className="text-base font-bold text-slate-950 dark:text-white">
          {text}
        </h2>
        {description && (
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        )}
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          {activeText ? "Aktiv" : "Inaktiv"}
        </p>
      </div>

      <button
        type="button"
        onClick={oncClickEvent}
        aria-pressed={activeText}
        className={`relative h-7 w-12 shrink-0 rounded-full transition focus:outline-none focus:ring-4 focus:ring-blue-500/10 ${
          activeText
            ? "bg-blue-600 dark:bg-blue-500"
            : "bg-slate-300 dark:bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${
            activeText ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

export default SettingComp;
