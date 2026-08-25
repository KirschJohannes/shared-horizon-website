export function HorizonRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent, #BD9A64 22%, #BD9A64 78%, transparent)",
      }}
    />
  );
}

/** Zwei gestapelte, mittig ausgerichtete HorizonRules — volle Breite plus 58 %
 * darüber. Ergebnis: eine Linie, die an den Enden ausläuft und in der Mitte
 * doppelt so kräftig ist. */
export function HorizonRuleWaisted() {
  return (
    <div className="relative flex h-px w-full items-center justify-center">
      <HorizonRule />
      <div className="absolute w-[58%]">
        <HorizonRule />
      </div>
    </div>
  );
}
