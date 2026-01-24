export default function StatCard({ stat }) {
  const { number, hasPercentage, description, highlight } = stat;

  return (
    <div className="border-light-soil/50 border-r py-2">
      <div className="mx-auto max-w-63">
        <div className="flex items-baseline">
          <h2 className="text-[100px] leading-none">{number}</h2>
          {hasPercentage && <span className="text-popping text-xl">%</span>}
        </div>

        <p className="font-neue-haas mt-2.5 tracking-widest">
          {description}{" "}
          {highlight && <span className="text-light-soil">{highlight}</span>}
        </p>
      </div>
    </div>
  );
}
