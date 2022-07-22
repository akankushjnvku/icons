import glob from 'glob';

import {
  createIconsMap,
  writeFile,
  getSvgContent,
  createReactIconComponentContent,
  createAngularJsIconComponentContent,
  generateAdditionalReactFiles,
  generateAngularJsIconModuleContent,
  generateGeneralIconComponent,
} from './utils';

const ICONS_DIR_NEW = 'node_modules/wise-atoms/icons';
const TARGET_DIR = 'build';

const allIconsPaths = glob.sync(`${ICONS_DIR_NEW}/*.svg`);
const icons = createIconsMap(allIconsPaths);

const generateIconComponentFiles = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  Object.keys(icons).forEach(async (id) => {
    const icon = icons[id];
    const svgContent = await getSvgContent(icon);
    const hasFillVariant = Object.keys(icons).includes(icon.name + '-fill');
    const reactComponentContent = createReactIconComponentContent(icon, svgContent, hasFillVariant);
    writeFile(`${TARGET_DIR}/components/${icon.name}.tsx`, reactComponentContent);

    const angularComponentContent = createAngularJsIconComponentContent(icon, svgContent);
    writeFile(
      `${TARGET_DIR}/angular/components/${icon.name}-icon.component.js`,
      angularComponentContent,
    );

    // eslint-disable-next-line no-console
    console.info(`Components created for: ${icon.componentName}`);
  });
};

generateIconComponentFiles();
generateAdditionalReactFiles(icons, TARGET_DIR);
generateAngularJsIconModuleContent(icons, TARGET_DIR);
generateGeneralIconComponent(icons, TARGET_DIR);
