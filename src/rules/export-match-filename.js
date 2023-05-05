const path = require('path');

const NO_MATCH_ERROR_MESSAGE = 'Your file should contain at least one exported value that has the same name as the file';

module.exports = {
  meta: {
    docs: {
      description: 'disallow identifiers',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    const filePath = context.getFilename();
    if (typeof filePath !== 'string') {
      return;
    }
    const filename = path.basename(filePath, path.extname(filePath));
    const filenameCompatible = !filename.includes('-');

    const foundNamedExports = [];

    if (!filenameCompatible) {
      return {};
    }
    return {
      ExportNamedDeclaration(node) {
        if (
          node.declaration?.type === 'VariableDeclaration'
          && node?.declaration?.declarations?.[0].id.type === 'Identifier'
        ) {
          const exportedName = node?.declaration?.declarations?.[0].id.name;
          foundNamedExports.push({ node, exportedName });
        }
        if (
          node.declaration?.type === 'FunctionDeclaration'
          && Boolean(node?.declaration?.id?.name)
        ) {
          const exportedName = node?.declaration?.id?.name;
          foundNamedExports.push({ node, exportedName });
        }
      },
      'Program:exit'() {
        const found = foundNamedExports.find((f) => f.exportedName === filename);
        if (found === undefined) {
          const notProperlyNamed = foundNamedExports.find((f) => f.exportedName !== filename);
          if (notProperlyNamed !== undefined) {
            context.report(notProperlyNamed.node, NO_MATCH_ERROR_MESSAGE);
          }
        }
      },
    };
  },
};
