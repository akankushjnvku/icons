/* eslint-disable sonarjs/no-nested-template-literals */
import { IconsMap } from './create-icons-map';

import { Icon, SvgContentForVariantsAndSizes, GENERATED_CODE_COMMENT, writeFile } from './index';

export const createReactIconComponentContent = (
  icon: Icon,
  svgContent: SvgContentForVariantsAndSizes,
  hasFillVariant: boolean,
): string => {
  return `
${GENERATED_CODE_COMMENT}
import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ${icon.componentName}IconProps {
  size?: IconSize;
  filled?: boolean;
  className?: string;
  title?: string;
  ['data-testid']?: string;
}

export const ${icon.componentName}: FunctionComponent<${
    icon.componentName
  }IconProps> = ({ size = 24, className = undefined, title = undefined ${
    hasFillVariant ? `, filled = true` : ', filled = false'
  }, ...restProps }) => {
  
  if (filled) {
    console.warn("this is not how filled variants work anymore. see https://transferwise.atlassian.net/wiki/spaces/DS/pages/2448396427/New+icons#Web for more details");
  }

  return (
    <span
      className={\`tw-icon tw-icon-${icon.name} \${className ? className : ''}\`}
      aria-hidden={!title ? 'true' : undefined}
      role={!title ? 'presentation' : undefined}
      data-testid={restProps['data-testid'] || ${`'${icon.name}-icon'`}}
    >
      <svg width={String(size)} height={String(size)} fill="currentColor" focusable="false"
      viewBox="0 0 24 24"
      >
        { Number(size) === 16 && (
          <>
            ${svgContent[icon.name].react}
          </>
        )}
        { Number(size) === 24 && (
          <>
            ${svgContent[icon.name].react}
          </>
        )}
      </svg>
      { title && <span className="sr-only">{title}</span> }
    </span>
  )
}
`;
};

export const generateAdditionalReactFiles = (icons: IconsMap, targetDir: string): void => {
  // Create index file that exports all the icons in the components folder
  const exportComponents = Object.keys(icons)
    .map((id) => `export * from './${icons[id].name}';`)
    .join('\n');
  writeFile(`${targetDir}/components/index.ts`, exportComponents);

  // Create index file in ./${targetDir} folder for exporting everyhting from ./${targetDir}/components
  writeFile(`${targetDir}/index.ts`, `${GENERATED_CODE_COMMENT}\nexport * from "./components";`);

  // Create types file that exports common types
  writeFile(
    `${targetDir}/types.ts`,
    `${GENERATED_CODE_COMMENT}\nexport type IconSize = "16" | "24" | 16 | 24;`,
  );
};
