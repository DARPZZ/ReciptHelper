import CountUp from "~/helpers/CountUp";

type StatsProps = {
  title: string;
  value: number;
  description?: string;
  suffix?: string;
};

function StatsCard({ title, value, description, suffix }: StatsProps) {
  return (
    <div className="panel relative overflow-hidden p-6">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50 dark:bg-blue-500/10" />
      <p className="relative text-sm font-semibold text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <h2 className="relative mt-3 flex items-baseline gap-2 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
        <CountUp
          to={value}
          from={0}
          delay={0.2}
          duration={0.5}
          separator="."
        />
        {suffix && (
          <span className="text-base font-bold text-slate-500 dark:text-slate-400">
            {suffix}
          </span>
        )}
      </h2>
      {description && (
        <p className="relative mt-2 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default StatsCard;
