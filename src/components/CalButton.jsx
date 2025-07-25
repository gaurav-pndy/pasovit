import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#001e8a" },
          dark: { "cal-brand": "#3894e5" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="discovery-call"
      data-cal-link="pasovit/discovery-call"
      data-cal-config='{"layout":"month_view"}'
      className=" bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300"
    >
      Book a Free Discovery Call
    </button>
  );
}
