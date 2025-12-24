import prisma from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import EventForm from "./EventForm";
import DeleteEventButton from "./DeleteEventButton";

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "asc" },
  });

  const holidays = events.filter((e) => e.isHoliday);
  const upcomingEvents = events.filter((e) => !e.isHoliday);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Tədbirlər & Bayramlar</h1>
        <p className="text-slate-400 text-sm mt-1">Təqvim tədbirlərini və rəsmi bayramları idarə edin</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Add New Event */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Yeni tədbir/bayram</h2>
          <EventForm />
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {/* Holidays */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <span>🇦🇿</span>
              </div>
              <h2 className="text-lg font-semibold text-white">
                Rəsmi bayramlar ({holidays.length})
              </h2>
            </div>

            {holidays.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">Bayram əlavə olunmayıb</p>
            ) : (
              <div className="space-y-2">
                {holidays.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{event.icon}</span>
                      <div>
                        <h3 className="font-medium text-white text-sm">{event.title}</h3>
                        <p className="text-xs text-slate-500">{formatDate(event.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {event.recurring && (
                        <span className="text-[10px] px-2 py-0.5 bg-sky-500/20 text-sky-400 rounded-full">
                          Hər il
                        </span>
                      )}
                      <DeleteEventButton id={event.id} title={event.title} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming Events */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-white">
                Tədbirlər ({upcomingEvents.length})
              </h2>
            </div>

            {upcomingEvents.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">Tədbir əlavə olunmayıb</p>
            ) : (
              <div className="space-y-2">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{event.icon}</span>
                      <div>
                        <h3 className="font-medium text-white text-sm">{event.title}</h3>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-slate-500">{formatDate(event.date)}</p>
                          <span className="text-[10px] px-2 py-0.5 bg-slate-700 text-slate-300 rounded-full">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <DeleteEventButton id={event.id} title={event.title} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
