Hooks.once("init", async () => {
  const fixedPath = "modules/mosh-template-fix/templates/ship-sheet-fixed.html";
  const originalPath = "systems/mosh/templates/actor/ship-sheet.html";

  const templates = {};
  templates[originalPath] = fixedPath;
  await loadTemplates(templates);

  // Lokalisierung laden
  const lang = game.i18n.lang || "en";
  await fetch(`modules/mosh-template-fix/lang/${lang}-fix.json`)
    .then(res => res.json())
    .then(data => {
      game.i18n.translations = foundry.utils.mergeObject(game.i18n.translations, data);
    });
});
