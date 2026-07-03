interface comps {
  confirmationbox: (visible: boolean) => void;
  okayToDelete: (deleteReceipt: boolean) => void;
}

const ConformationBox = ({ confirmationbox, okayToDelete }: comps) => {
  function deleteKvit() {
    confirmationbox(false);
    okayToDelete(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/70 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            />
          </svg>
        </div>
        <h1 className="mt-5 text-xl font-black tracking-tight text-slate-950 dark:text-white">
          Slet kvittering?
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Er du sikker på, at du ønsker at slette denne kvittering? Handlingen
          kan ikke fortrydes.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => confirmationbox(false)}
            className="secondary-button"
          >
            Behold
          </button>
          <button
            type="button"
            onClick={() => deleteKvit()}
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600/20 active:scale-[0.98]"
          >
            Slet kvittering
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConformationBox;
