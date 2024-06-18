const cron = require("node-cron");
const { sendTextMessage } = require("./twilioConfig");

/**notification sending at 9.00 am using node-cron
commented for avoid sending messages due to live server**/

const sendMessage = () => {
//   cron.schedule(
//     "0 9 * * *",
//     async () => {
//       try {
//         console.log("Running a job at 01:00 at Asia/Kolkata timezone");
//         console.log("Notification called!");

//         const date = new Date();
//         console.log(date);

//         const data = await Businfo.find({
//           next_service: {
//             $gte: date,
//             $lte: new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000), // Next service due within 5 days
//           },
//         });

//         if (data.length > 0) {
//           const servingData = data.map((element) => {
//             const message = `Hello ${element.driver_name}. We hope you are doing well. Here is your reminder for service. Your next service is due soon ${element.next_service}. Thank you.`;
//             return { message: message };
//           });

//           await Promise.all(
//             servingData.map((data) => {
//               return sendTextMessage(
//                 "mobile number to send message(for eg: your mobile number)",
//                 data.message
//               );
//             })
//           );

//           console.log("Messages Sent");
//         } else {
//           console.log("No upcoming services within 5 days.");
//         }
//       } catch (err) {
//         console.error("Error in cron job:", err);
//       }
//     },
//     {
//       scheduled: true,
//       timezone: "Asia/Kolkata", // Set timezone to Asia/Kolkata (IST)
//     }
//   );
};
module.exports = sendMessage;
