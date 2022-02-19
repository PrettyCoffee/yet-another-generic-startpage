export const getMiniYagsFile = (file: string) =>
  require(`!!raw-loader!../../../yags-mini/${file}`).default
