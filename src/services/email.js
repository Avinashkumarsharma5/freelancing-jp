import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_iqy7euk";
const TEMPLATE_ID = "template_f6pw4e9";
const PUBLIC_KEY = "d7BYcSdGORMNW6tBf"; // Regenerate karke yahan paste karo

export const sendEnquiry = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        property: formData.property,
        city: formData.city,
        budget: formData.budget,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error("EmailJS Error:", error);

    return {
      success: false,
      error,
    };
  }
};