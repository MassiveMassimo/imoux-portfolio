export default function TopLeft() {
  return (
    <div className="highlight m-5 min-h-[2.25rem] flex grow flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-xl transition-spacing @md:m-10 @3xl:m-20">
      <div className="flex w-full flex-row space-x-2 border-b-2 border-slate-800/70 py-3 px-5">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-amber-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      
    </div>
  );
}
