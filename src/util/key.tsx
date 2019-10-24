
export default (config, index) =>
  (
    config
    && config.attr
    && config.attr.id
      ? config.attr.id
      : index
  );