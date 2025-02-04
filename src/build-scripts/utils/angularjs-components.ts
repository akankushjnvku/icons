/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable sonarjs/no-nested-template-literals */
import { IconsMap } from './create-icons-map';

import { Icon, SvgContentForVariantsAndSizes, GENERATED_CODE_COMMENT, writeFile } from './index';

const getTemplate = (icon: Icon, svgContent: SvgContentForVariantsAndSizes): string => {
  return `
  <span ng-switch="$ctrl.size" class="tw-icon tw-icon-${icon.name}">
    <svg ng-switch-when="24" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      ${svgContent[icon.name].angular}
    </svg>
    <svg ng-switch-default width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      ${svgContent[icon.name].angular}
    </svg>
  </span>
  `;
};

export const createAngularJsIconComponentContent = (
  icon: Icon,
  svgContent: SvgContentForVariantsAndSizes,
): string => {
  return `
${GENERATED_CODE_COMMENT}
export const ${icon.componentName}IconComponent = {
  template: \`${getTemplate(icon, svgContent)}\`,
  bindings: {
    size: "<"
  },
}`;
};

export const generateAngularJsIconModuleContent = (icons: IconsMap, targetDir: string): void => {
  const importStatements = [];
  const moduleComponents = [];

  Object.keys(icons).forEach((key) => {
    const icon = icons[key];
    importStatements.push(
      `import { ${icon.componentName}IconComponent } from "./components/${key}-icon.component"`,
    );
    moduleComponents.push(
      `.component("tw${icon.componentName}Icon", ${icon.componentName}IconComponent)`,
    );
  });

  const angularJsModule = `${GENERATED_CODE_COMMENT}
import angular from "angular";
${importStatements.join('\n')}
import { IconComponent } from "./components/icon.component"
  
export const TwIconsModule = angular
  .module("tw.icons", [])
  ${moduleComponents.join('\n')}
  .component("twIcon", IconComponent)
  .name;  
`;

  writeFile(`${targetDir}/angular/index.js`, angularJsModule);
};

export const generateGeneralIconComponent = (icons: IconsMap, targetDir: string): void => {
  const components = Object.keys(icons).map(
    (key) => `<tw-${key}-icon ng-switch-when="${key}" size="$ctrl.size"></tw-${key}-icon>`,
  );

  const content = `
  export const IconComponent = {
  bindings: {
    name: '<',
    size: '<',
  },
  template: \`
    <ng-switch on="$ctrl.name">
      ${components.join('\n')}
    </ng-switch>\`,
  };`;

  writeFile(`${targetDir}/angular/components/icon.component.js`, content);
};
