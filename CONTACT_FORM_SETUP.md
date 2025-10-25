# Contact Form Setup Instructions

To receive form submissions from the contact page, you'll need to set up a form backend service. Here's how to do it with Formspree:

## Step 1: Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Form
1. After logging in, click "Create Form"
2. Select "Connect to your HTML form"
3. Enter your email address where you want to receive submissions
4. Click "Create Form"

## Step 3: Get Your Form ID
1. After creating the form, you'll see a unique form ID (looks like "xxyz123")
2. Copy this ID

## Step 4: Update the Contact Form Code
1. Open `src/components/Contact.tsx`
2. Find the line with `https://formspree.io/f/YOUR_FORM_ID`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID

## Alternative: EmailJS Setup
If you prefer EmailJS:

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Create an email template
4. Install the EmailJS SDK: `npm install @emailjs/browser`
5. Replace the fetch implementation with EmailJS code:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus({type: '', message: ''});
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setSubmitStatus({
      type: 'success',
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  } catch (error) {
    console.error('EmailJS error:', error);
    setSubmitStatus({
      type: 'error',
      message: 'Failed to send message. Please try again later.'
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

## Testing
After implementing either solution:
1. Fill out the contact form with test data
2. Submit the form
3. Check your email for the submission
4. Verify that all fields are properly received

## Security Note
The free tier of Formspree allows 50 submissions per month. For higher volume, consider upgrading or using a custom backend solution.