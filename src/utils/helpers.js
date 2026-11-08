/**
 * Helper utility functions for Sayyad Yameen's portfolio
 */

// Generate WhatsApp click-to-chat URL with prefilled professional greeting
export function getWhatsAppUrl(phone, customText) {
  const cleanPhone = (phone || "919876543210").replace(/[^0-9]/g, '');
  const message = customText || "Hello Sayyad Yameen, I visited your portfolio and would love to connect with you regarding an opportunity / project.";
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

// Generate Mailto link
export function getMailtoUrl(email, subject, body) {
  const targetEmail = email || "sayyadyameen.dev@gmail.com";
  const sub = subject ? encodeURIComponent(subject) : encodeURIComponent("Portfolio Inquiry for Sayyad Yameen");
  const bod = body ? encodeURIComponent(body) : encodeURIComponent("Hi Sayyad,\n\nI came across your portfolio website and would like to discuss a project.");
  return `mailto:${targetEmail}?subject=${sub}&body=${bod}`;
}

// Format date helper
export function getCurrentYear() {
  return new Date().getFullYear();
}
