import browserSync from "browser-sync";

browserSync.init({
  proxy: "http://localhost:8000",
  files: ["src/**/*.ts", "views/**/*.pug", "public/**/*.*"], // à adapter selon vos fichiers à surveiller
  ui: false,
  notify: false,
  port: 4000, // port où BrowserSync sera accessible
  open: false, // ne pas ouvrir automatiquement le navigateur
});
