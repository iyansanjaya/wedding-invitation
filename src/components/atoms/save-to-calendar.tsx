import { CalendarDays } from "lucide-react";
import { ShinyButton } from "@/components/3partys/magicui/shiny-button";

const saveToCalendar = () => {
  const eventTitle = encodeURIComponent("Sangjit & Pemberkatan Enjelika-Tommi");
  const eventDetails = encodeURIComponent(
    "Jangan lupa hadir di acara spesial ini!"
  );
  const location = encodeURIComponent("pondok sentul");
  const startDate = "20250316T100000";
  const endDate = "20250316T120000";

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${location}&dates=${startDate}/${endDate}`;

  window.open(googleCalendarUrl, "_blank");
};

export default function EventPage() {
  return (
    <ShinyButton className="rounded-lg bg-white" onClick={saveToCalendar}>
      <div className="flex items-center gap-2">
        <CalendarDays size={16} />
        Save to Calendar
      </div>
    </ShinyButton>
  );
}
