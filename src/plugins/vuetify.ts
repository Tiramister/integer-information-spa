// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#0d6efd",
          secondary: "#009688",
          accent: "#673ab7",
          error: "#e91e63",
          warning: "#ffc107",
          info: "#cff4fc",
          success: "#8bc34a",
        },
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
