Hooks.once("init", async () => {
  const fixedPath = "modules/mosh-template-fix/templates/ship-sheet-fixed.html";
  const originalPath = "systems/mosh/templates/actor/ship-sheet.html";

  const templates = {};
  templates[originalPath] = fixedPath;
  await loadTemplates(templates);
});
