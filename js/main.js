const { createApp } = Vue;

createApp({
  data() {
    return {
      immagine: "",
      nome: "Peter",
      cognome: "Parker",
      coloreTesto: "rosso",
      coloreSfondo: "blu",
    };
  },
  methods: {
    btn() {
      this.coloreSfondo = "";
    },
    aggiungiSrc: function () {
      this.immagine = "./img/01.webp";
      return this.immagine;
    },
  },
}).mount("#app");
