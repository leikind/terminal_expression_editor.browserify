
requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app'
  },
  name: "main",
  out: "main-built.js"
});

requirejs(['app/ui'],
  function (ui) {
  }
);