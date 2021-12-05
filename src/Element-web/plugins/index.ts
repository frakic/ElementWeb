/// <reference types="cypress" />

import * as path from "path";
import merge from "ts-deepmerge";

export default async (
  _on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> => {
  const configPath = config.configFile.toString();
  const configJson = await import(configPath);
  let resolvedConfig = config;

  if (configJson.extends) {
    const baseConfigFilename = path.join(
      config.projectRoot,
      "configuration",
      configJson.extends
    );

    const baseConfig = await import(baseConfigFilename);
    resolvedConfig = merge(baseConfig, configJson);
  }

  return resolvedConfig;
};
