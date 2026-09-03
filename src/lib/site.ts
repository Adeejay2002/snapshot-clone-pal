// Central place to update contact details / download links.
export const site = {
  brand: "Jenex Solution",
  short: "JNEX",
  // TODO: replace with the real business WhatsApp number (country code, no +)
  whatsappNumber: "94770000000",
  email: "hello@jenexsolution.lk",
  location: "Colombo, Sri Lanka",
  trialUrl: "#trial",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
