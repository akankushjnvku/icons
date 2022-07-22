/* eslint-disable fp/no-mutation */
import { optimize, OptimizedSvg } from 'svgo';
import { parseSync, stringify, INode } from 'svgson';

import { Icon, readFile } from './index';

interface SvgContent {
  react: string;
  angular: string;
}

export interface SvgContentForVariantsAndSizes {
  [key: string]: SvgContent;
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
// eslint-disable-next-line @typescript-eslint/require-await
export const readSvgFile = async (path: string): Promise<SvgContent> => {
  const svgBefore = readFile(path);
  const optimizedSvgContent = optimize(svgBefore) as OptimizedSvg;

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
export const getSvgContent = async (icon: Icon): Promise<SvgContentForVariantsAndSizes> => {
  const svgContentForVariantsAndSizes: SvgContentForVariantsAndSizes = {};

  svgContentForVariantsAndSizes[icon.name] = await readSvgFile(icon.svgFiles[icon.name]);

  return svgContentForVariantsAndSizes;
};
