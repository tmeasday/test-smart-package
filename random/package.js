Package.describe({
  summary: "A package that does nothing"
});


Package.on_use(function (api) {
  api.add_files('test-smart-package.js', 'server');
});
