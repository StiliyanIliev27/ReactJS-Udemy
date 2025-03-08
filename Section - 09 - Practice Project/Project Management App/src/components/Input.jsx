export default function Input({ type, placeholder, label, ref }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      <input ref={ref} type={type} placeholder={placeholder} className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
    </div>
  );
}
