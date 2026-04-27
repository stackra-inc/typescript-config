/**
 * @fileoverview lint-staged configuration for typescript-config
 *
 * JSON-config package — only runs prettier (no eslint).
 */

export default {
  '*.{json,md,mdx,css,html,yml,yaml}': ['prettier --write'],
};
