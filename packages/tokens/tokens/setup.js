module.exports = (theo) => {
  theo.registerFormat(
    "prefix.scss",
    `{{#each props as |prop|}}
  {{#if prop.comment~}}
  {{{trimLeft (indent (comment (trim prop.comment)))}}}
  {{/if~}}
  \${{prop.type}}-{{kebabcase prop.name}}: {{#eq prop.type "string"}}"{{/eq}}{{{prop.value}}}{{#eq prop.type "string"}}"{{/eq}} !default;
{{/each}}
  `
  );
};
