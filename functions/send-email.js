// This is a Node.js function that will run on Netlify's servers.
// It acts as a secure intermediary between your website and the Brevo API.

export async function onRequest(context) {
  const { request, env } = context;

  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    // Get the data from the request body
    const body = await request.json();
    const { service_name, customer_name, customer_email, customer_phone, contact_preference, message } = body;
    
    // Cloudflare accesses variables via the 'env' object
    const BREVO_API_KEY = env.BREVO_API_KEY; 
    
    if (!BREVO_API_KEY) {
      return new Response("Email service is not configured.", { status: 500 });
    }
    
    const RECIPIENT_EMAIL = "rahim.5123.rk@gmail.com";

    const emailData = {
      sender: { name: "Blue Flame Booking", email: "rahim.5123.rk@gmail.com" },
      to: [{ email: RECIPIENT_EMAIL }],
      replyTo: { email: customer_email, name: customer_name },
      subject: `New Request: ${service_name} from ${customer_name}`,
      htmlContent: `
        <html>
          <body>
            <h1>New Lead Received</h1>
            <ul>
              <li><strong>Service:</strong> ${service_name}</li>
              <li><strong>Name:</strong> ${customer_name}</li>
              <li><strong>Phone:</strong> ${customer_phone}</li>
              <li><strong>Message/Details:</strong> ${message || 'No extra details'}</li>
            </ul>
          </body>
        </html>
      `,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ message: 'Failed to send' }), { status: response.status });
    }

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server Error' }), { status: 500 });
  }
}