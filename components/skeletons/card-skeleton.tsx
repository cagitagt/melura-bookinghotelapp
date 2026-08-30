const CardSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center py-10 border-b border-taupe-100 animate-pulse">
      <div className="relative h-80 md:h-105 rounded-sm bg-taupe-200" />

      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-3 w-24 rounded bg-taupe-200" />
          <span className="h-px flex-1 bg-taupe-200" />
          <div className="h-3 w-20 rounded bg-taupe-200" />
        </div>

        <div className="h-10 w-3/4 rounded bg-taupe-200 mb-6" />

        <div className="space-y-2 mb-10 max-w-md">
          <div className="h-4 w-full rounded bg-taupe-200" />
          <div className="h-4 w-full rounded bg-taupe-200" />
          <div className="h-4 w-2/3 rounded bg-taupe-200" />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="h-3 w-10 rounded bg-taupe-200 mb-2" />
            <div className="h-7 w-32 rounded bg-taupe-200" />
          </div>
          <div className="h-4 w-24 rounded bg-taupe-200" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;