import { builders } from './builders';
import { renderRules, renderVars } from './modules/rule';
import manifest from './manifest';
import { camelToKebab } from './modules/case';

function build(builder, config) {
  const rules = builder.rules(config) ?? [];
  const vars = builder.vars?.(config) ?? [];

  return { rules, vars };
}

function assemble({ css, vars }) {
  return [renderVars(vars), css].join('\n\n');
}

export async function main(config) {
  const output = [];
  const vars = [];

  for (const [entry, { mq }] of Object.entries<any>(manifest)) {
    if (entry in builders) {
      const { rules: builderRules, vars: builderVars } = build(
        builders[entry],
        config,
      );
      output.push(renderRules(builderRules));
      vars.push(...builderVars);
    } else {
      const { default: css } = await import(
        `./static/_${camelToKebab(entry)}.css`
      );
      output.push(css);
    }
  }
  console.log(assemble({ vars, css: output }));
}
