const PHONE = "351000000000"; // trocar pelo número real, com indicativo 351
const MESSAGE = "Olá! Vi o site DesentopMais.pt e preciso de assistência para um entupimento.";

document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
});

document.querySelectorAll('.phone-link').forEach(link => {
  link.href = `tel:+${PHONE}`;
});
