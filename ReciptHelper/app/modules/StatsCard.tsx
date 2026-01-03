import React from "react";
import CountUp from "~/helpers/CountUp";

type StatsProps = {
  title: string;
  value: number;

};



function StatsCard({ title, value }: StatsProps) {
  return (
    <div className=" bg-gray-900 flex flex-col  justify-center items-center border border-gray-800 rounded-xl p-5  shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="text-gray-400 text-sm font-medium tracking-wide">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-2">
        <CountUp to={value} from={0}delay={0.4} duration={0.4}></CountUp>
      </h2>
    </div>
  );
}

export default StatsCard;