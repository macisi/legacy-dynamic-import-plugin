class LegacyDynamicImportPlugin {
  constructor(list) {
    this.legecyImportList = list;
  }
  apply(Compiler) {
    Compiler.hooks.compilation.tap('LegacyDynamicImportPlugin', (compilation) => {
      compilation.hooks.afterOptimizeDependencies.tap('LegacyDynamicImportPlugin', modules => {
        modules.forEach(module => {
          if (module.request && this.legecyImportList.some(name => module.request.includes(name))) {
            Object.assign(module.buildMeta, {
              exportsType: 'namespace',
            });
          }
        });
      });
    })
  }
}

module.exports = LegacyDynamicImportPlugin;