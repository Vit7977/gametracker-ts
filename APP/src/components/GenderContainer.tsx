function GenderContainer({ genders }: { genders: string }) {
  const gender: string[] = genders.split(", ");

  return (
    <div className="flex gap-2 max-w-full flex-wrap min-w-0">
      {genders.trim() ? (
        gender.map((g, i) => {
          return (
            <div
              className="bg-sky-800 rounded-3xl border border-sky-500 shadow-md shadow-sky-500/50"
              key={i}
            >
              <p className="p-2 text-[12px] font-medium text-white wrap-break-word">{g}</p>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GenderContainer;
