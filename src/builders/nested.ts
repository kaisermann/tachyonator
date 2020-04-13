import { createRule } from '../modules/rule';

function rules(config) {
  const rules = [];

  rules.push(
    createRule(
      [
        '.nested-copy-line-height p',
        '.nested-copy-line-height ul',
        '.nested-copy-line-height ol',
      ],
      {
        'line-height': 1.5,
      },
    ),
    createRule(
      [
        '.nested-headline-line-height h1',
        '.nested-headline-line-height h2',
        '.nested-headline-line-height h3',
        '.nested-headline-line-height h4',
        '.nested-headline-line-height h5',
        '.nested-headline-line-height h6',
      ],
      {
        'line-height': 1.25,
      },
    ),
    createRule(['.nested-list-reset ul', '.nested-list-reset ol'], {
      'padding-left': 0,
      'margin-left': 0,
      'list-style-type': 'none',
    }),
    createRule('.nested-copy-indent p+p', {
      'text-indent': '1em',
      'margin-top': 0,
      'margin-bottom': 0,
    }),
    createRule('.nested-copy-separator p+p', {
      'margin-top': '1.5em',
    }),
    createRule('.nested-img img', {
      width: '100%',
      'max-width': '100%',
      display: 'block',
    }),
    createRule('.nested-links a', {
      color: config?.nested?.links?.[0] ?? 'blue',
      transition: 'color .15s ease-in',
    }),
    createRule(['.nested-links a:hover', '.nested-links a:focus'], {
      color: config?.nested?.links?.[1] ?? 'light-blue',
      transition: 'color .15s ease-in',
    }),
  );

  return rules;
}

export default {
  rules,
};
