export default function StatCard({ stat, i, totalStats }) {
  const { number, hasPercentage, description, highlight } = stat;

  return (
    <div
      className={`border-light-soil/50 border-r p-2 px-4 py-6 last:border-r-0 ${i === 1 ? "border-r-0 lg:border-r" : ""} ${i < totalStats - 2 ? "border-b lg:border-b-0" : ""}`}
    >
      <div className="mx-auto max-w-63">
        <div className="flex items-baseline">
          <h2 className="text-4xl leading-none lg:text-[84px] xl:text-[100px]">
            {number}
          </h2>
          {hasPercentage && <span className="text-popping text-xl">%</span>}
        </div>

        <p className="font-neue-haas mt-2.5 text-sm leading-relaxed tracking-widest lg:text-base lg:leading-normal">
          {description}{" "}
          {highlight && <span className="text-light-soil">{highlight}</span>}
        </p>
      </div>
    </div>
  );
}
