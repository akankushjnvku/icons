import { optimize, OptimizedSvg } from 'svgo';
import { parseSync, stringify, INode } from 'svgson';

import { Icon, readFile } from './index';

interface SvgContent {
  react: string;
  angular: string;
}

export interface SvgContentForVariantsAndSizes {
  [key: string]: {
    [key: number]: SvgContent;
  };
}

/**
 * Transform function that is applied for each node in the AST
 * Removes hardocded fill attributes to clean SVG paths
 * @param node
 */
const transformNode = (node: INode): INode => {
  const newNode = node;
  delete newNode.attributes.fill;

  return newNode;
};

// Read SVG file with svgson by parsing it into AST
export const readSvgFile = async (path: string): Promise<SvgContent> => {
  const svgBefore = readFile(path);
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const optimizedSvgContent = (await optimize(svgBefore)) as OptimizedSvg;

  // Convert attributes to camelCase for React
  const ASTforReact = parseSync(optimizedSvgContent.data, { transformNode, camelcase: true });
  const ASTforAngular = parseSync(optimizedSvgContent.data, { transformNode });

  // FIXME: stringify type expects INode not INode[], this still works
  const ASTforReactChildren = ASTforReact.children as unknown as INode;
  const ASTforAngularChildren = ASTforAngular.children as unknown as INode;

  return {
    react: stringify(ASTforReactChildren),
    angular: stringify(ASTforAngularChildren),
  };
};

// get content for each variant and size
/* eslint-disable @typescript-eslint/await-thenable */
export const getSvgContent = async (icon: Icon): Promise<SvgContentForVariantsAndSizes> => {
  const variants = Object.keys(icon.svgFiles);
  const svgContentForVariantsAndSizes: SvgContentForVariantsAndSizes = {};

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  await variants.forEach(async (variant) => {
    const sizes = Object.keys(icon.svgFiles[variant]);
    // eslint-disable-next-line fp/no-mutation
    svgContentForVariantsAndSizes[variant] = {};

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    await sizes.forEach(async (size) => {
      // eslint-disable-next-line fp/no-mutation
      svgContentForVariantsAndSizes[variant][size] = await readSvgFile(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        icon.svgFiles[variant][size],
      );
    });
  });

  return svgContentForVariantsAndSizes;
};
/* eslint-enable @typescript-eslint/await-thenable */
