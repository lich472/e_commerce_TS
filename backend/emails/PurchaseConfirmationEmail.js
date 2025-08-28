// // backend/emails/PurchaseConfirmationEmail.js
// import { render } from "@react-email/render";
// import React from "react";
// import { Html, Head, Preview, Body, Container, Section, Heading, Text, Hr, Img } from "@react-email/components";

// export function generatePurchaseEmail({ customerName, productName, productImage, totalAmount }) {
//   const EmailJSX = React.createElement(
//     Html,
//     null,
//     React.createElement(Head),
//     React.createElement(Preview, null, `Thank you for your purchase: ${productName}`),
//     React.createElement(
//       Body,
//       { style: { fontFamily: "sans-serif", backgroundColor: "#f6f9fc" } },
//       React.createElement(
//         Container,
//         { style: { padding: "20px", backgroundColor: "#fff", borderRadius: "8px" } },
//         React.createElement(
//           Section,
//           null,
//           React.createElement(Heading, null, "Purchase Confirmed!"),
//           React.createElement(Text, null, `Hi ${customerName},`),
//           React.createElement(Text, null, `Thank you for your purchase of ${productName}.`),
//           React.createElement(Img, { src: productImage, width: 500, height: 250 }),
//           React.createElement(Text, null, `Amount paid: $${totalAmount.toFixed(2)}`),
//           React.createElement(Hr),
//           React.createElement(Text, null, "If you have any questions, reply to this email.")
//         )
//       )
//     )
//   );

//   return render(EmailJSX); // JSX → HTML string
// }

// backend/emails/PurchaseConfirmationEmail.js
import React from "react";
import { Html, Head, Body, Container, Text } from "@react-email/components";

export const PurchaseConfirmationEmail = ({ order }) => {
  return React.createElement(
    Html,
    null,
    React.createElement(
      Head,
      null
    ),
    React.createElement(
      Body,
      { style: { backgroundColor: "#fff", fontFamily: "Arial" } },
      React.createElement(
        Container,
        null,
        React.createElement(Text, null, `Thanks for your purchase, ${order.customerName}`),
        React.createElement(Text, null, `Order ID: ${order.id}`),
        React.createElement(Text, null, `Total: $${order.total}`)
      )
    )
  );
};
