// const locations = [
//   {
//     name: "Main Outlet / HQ",
//     address: "123 Gourmet Way, Brooklyn, NY 11211",
//     hours: "Open daily: 9AM-8PM",
//     maps: "https://maps.google.com",
//   },
//   {
//     name: "Manhattan Retail",
//     address: "456 Market St, New York, NY 10012",
//     hours: "Open daily: 9AM-9PM",
//     maps: "https://maps.google.com",
//   },
//   {
//     name: "Queens Retail",
//     address: "789 Plaza Blvd, Queens, NY 11106",
//     hours: "Open daily: 9AM-7PM",
//     maps: "https://maps.google.com",
//   },
//   {
//     name: "Flushing Distribution",
//     address: "134-16 Food Court Rd, Flushing, NY 11354",
//     hours: "Open daily: 9AM-7PM",
//     maps: "https://maps.google.com",
//   },
// ];

// export default function Locations() {
//   return (
//     <section className="bg-green px-5 pt-40 desktop:px-10" id="locations">
//       <div className="mx-auto max-w-[1200px]">
//         <h2 className="mb-16 text-center font-display text-[32px] text-beige-light desktop:mb-20 desktop:text-6xl tablet:text-[56px]">
//           Where to Find Us
//         </h2>

//         <div className="grid gap-6 desktop:grid-cols-4 tablet:grid-cols-2">
//           {locations.map((loc) => (
//             <div
//               key={loc.name}
//               className="rounded-card bg-container p-6"
//             >
//               <h3 className="font-display text-xl text-green">
//                 {loc.name}
//               </h3>
//               <p className="mt-3 font-body text-base text-green-muted">
//                 {loc.address}
//               </p>
//               <p className="mt-2 font-body text-sm text-green-muted">
//                 {loc.hours}
//               </p>
//               <a
//                 href={loc.maps}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block rounded-pill border border-green px-6 py-2 font-body text-sm text-green transition-colors hover:bg-green hover:text-beige-light"
//               >
//                 Get Directions
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Contact info */}
//         <div className="mt-24 border-t border-beige-light/20 py-16 text-center">
//           <h3 className="font-display text-[32px] text-beige-light tablet:text-[32px]">
//             Need Help?
//           </h3>
//           <div className="mt-10 grid gap-8 font-body text-base text-beige-light/80 desktop:grid-cols-4 tablet:grid-cols-2">
//             <div className="flex flex-col items-center">
//               <p className="font-bold text-beige-light text-lg mb-2">General Inquiries</p>
//               <a
//                 href="tel:+12125550198"
//                 className="hover:text-beige-hover transition-colors"
//               >
//                 +1 (212) 555-0198
//               </a>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="font-bold text-beige-light text-lg mb-2">Customer Support</p>
//               <a
//                 href="tel:+17185550243"
//                 className="hover:text-beige-hover transition-colors"
//               >
//                 +1 (718) 555-0243
//               </a>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="font-bold text-beige-light text-lg mb-2">General Email</p>
//               <a
//                 href="mailto:hello@fadisbites.com"
//                 className="hover:text-beige-hover transition-colors"
//               >
//                 hello@fadisbites.com
//               </a>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="font-bold text-beige-light text-lg mb-2">Support Email</p>
//               <a
//                 href="mailto:support@fadisbites.com"
//                 className="hover:text-beige-hover transition-colors"
//               >
//                 support@fadisbites.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
