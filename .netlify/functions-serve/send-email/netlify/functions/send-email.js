var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/send-email.mjs
var send_email_exports = {};
__export(send_email_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(send_email_exports);
var handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const { service_name, booking_date, customer_name, customer_email, customer_phone } = JSON.parse(event.body);
    const BREVO_API_KEY = "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";
    const SENDER_EMAIL = "rahim.5123.rk@gmail.com";
    const SENDER_NAME = "Blue Flame Booking";
    const RECIPIENT_EMAIL = "rahim.5123.rk@gmail.com";
    const emailData = {
      sender: {
        name: SENDER_NAME,
        email: SENDER_EMAIL
      },
      to: [
        {
          email: RECIPIENT_EMAIL
        }
      ],
      replyTo: {
        email: customer_email,
        name: customer_name
      },
      subject: `New Booking Request: ${service_name} from ${customer_name}`,
      htmlContent: `
        <html>
          <body>
            <h1>New Booking Request Received</h1>
            <h2>Customer Details:</h2>
            <ul>
              <li><strong>Name:</strong> ${customer_name}</li>
              <li><strong>Email:</strong> ${customer_email}</li>
              <li><strong>Phone:</strong> ${customer_phone}</li>
            </ul>
            <hr>
            <h2>Booking Details:</h2>
            <ul>
              <li><strong>Service:</strong> ${service_name}</li>
              <li><strong>Requested Date:</strong> ${booking_date}</li>
            </ul>
            <p>Please contact the customer to confirm the appointment.</p>
          </body>
        </html>
      `
    };
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify(emailData)
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return { statusCode: response.status, body: JSON.stringify({ message: "Failed to send email." }) };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" })
    };
  } catch (error) {
    console.error("Serverless function error:", error);
    return { statusCode: 500, body: JSON.stringify({ message: "Internal Server Error." }) };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=send-email.js.map
