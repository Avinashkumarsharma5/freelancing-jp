import emailjs from "@emailjs/browser";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export const sendEnquiry = async (data) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        property: data.property,
        city: data.city,
        budget: data.budget,
        message: data.message,
      },
      PUBLIC_KEY
    );

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error,
    };
  }
};