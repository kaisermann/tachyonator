import { createRule, getVar } from '../modules/rule';

function getOpacityStep(step) {
  if (step === 0) return 0;

  if (step < 0.1) {
    return step
      .toString()
      .split('.')
      .pop();
  }

  return String(step * 100).padStart(2, '0');
}

function rules(config) {
  const opacityValues = config.opacity;
  const rules = [];

  opacityValues.forEach(value => {
    const stepName = getOpacityStep(value);
    rules.push(
      createRule(`.o-${stepName}`, { opacity: getVar('opacity', stepName) }),
    );
  });

  return rules;
}

function vars(config) {
  return config.opacity.map(value => [
    `opacity-${getOpacityStep(value)}`,
    value,
  ]);
}

export default {
  rules,
  vars,
};
