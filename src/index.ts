import spacingRules from './builders/spacing';
import typeScaleRules from './builders/typeScale';
import opacityRules from './builders/opacity';
import borderRules from './builders/border';
import semanticColors from './builders/semanticColors';
import colors from './builders/colors';
import height from './builders/height';
import lineHeight from './builders/lineHeight';
import widths from './builders/widths';
import typography from './builders/typography';
import nested from './builders/nested';
import print from './builders/print';
import { renderRules, renderVars } from './modules/rule';

function build(builders, config) {
  const rules = [];
  const vars = {};

  for (const builder of builders) {
    if (builder.rules) {
      rules.push(...builder.rules(config));
    }

    if (builder.vars) {
      const result = builder.vars(config);
      result?.forEach(([k, v]) => (vars[k] = v));
    }
  }

  return { rules, vars };
}

export function main(config) {
  const builders = [
    // spacingRules,
    // typeScaleRules,
    // opacityRules,
    // borderRules,
    // semanticColors,
    // colors,
    // lineHeight,
    // height,
    // widths,
    // typography,
    // nested,
    print,
  ];
  const { rules, vars } = build(builders, config);
  console.log(renderRules(rules));
  console.log(renderVars(vars));
}
