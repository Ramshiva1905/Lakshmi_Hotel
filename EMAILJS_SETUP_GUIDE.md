# EmailJS Setup Guide for Hotel Rajahamsa

This guide will help you set up EmailJS to receive booking enquiries directly to your email: **shiv1590319@gmail.com**

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click **"Sign Up Free"**
3. Sign up using your email (or Gmail)
4. Verify your email

## Step 2: Get Your Public Key

1. After login, go to **Account Settings** (top-right)
2. Find **Public Key** section
3. Copy your Public Key (looks like: `abcdef123456...`)
4. Open `components/ContactForm.tsx` and replace:
   ```
   'YOUR_PUBLIC_KEY_HERE'
   ```
   with your actual Public Key

Example:
```javascript
emailjs.init('abcdef123456xyz789')
```

## Step 3: Add Gmail Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **"Add Service"**
3. Select **Gmail**
4. Click **"Connect Account"** and authorize your Gmail
5. The Service ID will be auto-generated (looks like: `gmail_service`)
6. Click **"Create Service"**

## Step 4: Create Email Template

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `hotel_booking_enquiry`

**Email Subject:**
```
New Hotel Booking Enquiry from {{from_name}}
```

**Email Content:**
```
Hello,

You have received a new booking enquiry for Hotel Rajahamsa!

Customer Details:
- Name: {{from_name}}
- Phone: {{phone}}
- Check-in Date: {{check_in_date}}
- Room Type: {{room_type}}
- Special Requests: {{message}}

Please contact the customer as soon as possible to confirm the booking.

Thank you,
Hotel Rajahamsa Booking System
```

4. Click **"Save Template"**
5. Copy the **Template ID** (looks like: `template_abc123`)

## Step 5: Update ContactForm.tsx

Open `components/ContactForm.tsx` and find this section:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',     // Replace with Gmail Service ID
  'YOUR_TEMPLATE_ID_HERE',    // Replace with Template ID
  {
    to_email: 'shiv1590319@gmail.com',
    // ... rest of the fields
  }
)
```

Replace the placeholders:
- `YOUR_SERVICE_ID_HERE` → Your Gmail Service ID (e.g., `gmail_service`)
- `YOUR_TEMPLATE_ID_HERE` → Your Template ID (e.g., `template_abc123`)

## Step 6: Test It!

1. Run your development server: `npm run dev`
2. Go to your website
3. Click **"Book Now"** button
4. Fill out the form and submit
5. Check your Gmail inbox for the enquiry!

## Troubleshooting

**Problem:** Emails not being sent
- ✅ Check if Public Key is correct
- ✅ Check if Service ID is correct
- ✅ Check if Template ID is correct
- ✅ Make sure Gmail service is connected in EmailJS

**Problem:** Getting CORS error
- ✅ Your Public Key might be wrong
- ✅ Check browser console for exact error

**Problem:** Emails going to spam
- ✅ This is normal for first-time senders
- ✅ Mark email as "Not Spam" in Gmail to fix

## Free Plan Limits

- **200 emails/month** (free tier)
- **5 email templates**
- Perfect for a hotel booking website!

## Questions?

Visit: https://www.emailjs.com/docs/

---

**Your Email:** shiv1590319@gmail.com
**Setup Status:** Ready to configure ✅
