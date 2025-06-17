Hooks.once("init", async () => {
  const fixedPath = "modules/mosh-template-fix/templates/ship-sheet-fixed.html";
  const originalPath = "systems/mosh/templates/actor/ship-sheet.html";

  const templates = {};
  templates[originalPath] = fixedPath;
  await loadTemplates(templates);

  // Lokalisierung laden
  const lang = game.i18n.lang || "en";
  const response = await fetch(`modules/mosh-template-fix/lang/${lang}-fix.json`);
  const translations = await response.json();

  console.log("🧪 Lokalisierungsdaten geladen:", translations);

  foundry.utils.mergeObject(
    game.i18n.translations,
    translations,
    { insertKeys: true, inplace: true }
  );
});
