// import React, { useEffect, useRef } from "react";
// import { DateRangePicker } from "daterangepicker";
// import "daterangepicker/daterangepicker.css";

// export const DateFilterInput = () => {
//   const inputRef = useRef < HTMLInputElement > any;

//   useEffect(() => {
//     if (inputRef.current) {
//       const datepickerOptions = {
//         autoUpdateInput: false,
//         locale: {
//           cancelLabel: "Clear",
//         },
//       };

//       const datepicker = new DateRangePicker(
//         inputRef.current,
//         datepickerOptions
//       );

//       datepickerInput.addEventListener(
//         "apply.daterangepicker",
//         function (ev, picker) {
//           this.value = `${picker.startDate.format(
//             "MM/DD/YYYY"
//           )} - ${picker.endDate.format("MM/DD/YYYY")}`;
//         }
//       );

//       datepickerInput.addEventListener("cancel.daterangepicker", function () {
//         this.value = "";
//       });
//     }
//   }, []);

//   return <input type="text" name="datefilter" ref={inputRef} />;
// };
