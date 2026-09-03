// Central place to update contact details / download links.
export const site = {
  brand: "Jenex Solution",
  short: "JNEX",
  whatsappNumber: "94764026876",
  phoneDisplay: "076 402 6876",
  phoneTel: "+94764026876",
  email: "jnexlk@gmail.com",
  location: "Wakwella Road, Galle",
  // TODO: confirm these against your actual working hours
  supportHours: "Mon – Sat, 8.00 AM – 8.00 PM",
  trialUrl: "#trial",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
