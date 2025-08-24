// This is the final, secure version of your function.

export const handler = async (event) => {
  // Only allow POST requests.
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  
  try {
    // Get the booking data from the request body.
    const { service_name, booking_date, customer_name, customer_email, customer_phone } = JSON.parse(event.body);
    
    // Using the secure environment variable provided by Netlify.
    const BREVO_API_KEY = process.env.BREVO_API_KEY; 
    
    // If the key is missing on the server, stop with a clear error.
    if (!BREVO_API_KEY) {
      console.error("Server Error: BREVO_API_KEY is not configured.");
      return { statusCode: 500, body: "Internal Server Error: Email service is not configured." };
    }
    
    const SENDER_EMAIL = "rahim.5123.rk@gmail.com"; 
    const SENDER_NAME = "Blue Flame Booking";
    const RECIPIENT_EMAIL = "rahim.5123.rk@gmail.com";

    // Prepare the data payload for the Brevo API.
    const emailData = {
      sender: {
        name: SENDER_NAME,
        email: SENDER_EMAIL,
      },
      to: [
        {
          email: RECIPIENT_EMAIL,
        },
      ],
      replyTo: {
        email: customer_email,
        name: customer_name,
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
      `,
    };

    // Make the API call to Brevo using fetch.
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    // If the email fails to send, return an error.
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return { statusCode: response.status, body: JSON.stringify({ message: 'Failed to send email.' }) };
    }

    // If the email sends successfully, return a success message.
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };

  } catch (error) {
    console.error('Serverless function error:', error);
    return { statusCode: 500, body: JSON.stringify({ message: 'Internal Server Error.' }) };
  }
};