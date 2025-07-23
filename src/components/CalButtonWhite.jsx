import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CalButtonWhite = ({
  namespace = "strategy-call",
  link = "pasovit/strategy-call",
  layout = "month_view",
  buttonText = "Book a Free Discovery Call",
}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout,
      });
    })();
  }, [namespace, layout]);

  return (
    <button
      data-cal-namespace={namespace}
      data-cal-link={link}
      data-cal-config={JSON.stringify({ layout })}
      className="mt-6 bg-white text-[#001e8a]  rounded font-medium hover:bg-[#001e8a] border border-[#001e8a] hover:text-white hover:border-white cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300"
    >
      {buttonText}
    </button>
  );
};

export default CalButtonWhite;
