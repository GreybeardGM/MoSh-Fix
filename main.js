Hooks.once("init", async () => {
  const fixedPath = "modules/mosh-template-fix/templates/ship-sheet-fixed.html";
  const originalPath = "systems/mosh/templates/actor/ship-sheet.html";

  const templates = {};
  templates[originalPath] = fixedPath;
  await loadTemplates(templates);

  // Lokalisierung laden
  await fetch(`modules/mosh-template-fix/lang/en-fix.json`)
    .then(res => res.json())
    .then(data => {
      game.i18n.translations = foundry.utils.mergeObject(game.i18n.translations, data);
    });
});
