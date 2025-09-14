import HolidayCard from "../components/HolidayCard/HolidayCard";

export default function HolidaysPage({ items }) {
  return (
    <main className="page">
      <h1>All Holidays</h1>
      <div className="holidays-grid">
        {items.map((h) => (
          <HolidayCard key={h.id} holiday={h} />
        ))}
      </div>
    </main>
  );
}
