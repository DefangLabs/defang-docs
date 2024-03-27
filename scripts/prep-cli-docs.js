const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const directoryPath = path.join(__dirname, '../docs/cli');

// Rename files
// fs.readdirSync(directoryPath).forEach(file => {
//     if (path.extname(file) === '.md') {
//         const oldPath = path.join(directoryPath, file);
//         const newPath = path.join(directoryPath, file.replace(/_/g, '-'));
//         fs.renameSync(oldPath, newPath);
//     }
// });

// Add frontmatter and update links
fs.readdirSync(directoryPath).forEach(file => {
    if (path.extname(file) === '.md') {
        const filePath = path.join(directoryPath, file);
        let fileContent = fs.readFileSync(filePath, 'utf-8');
        const frontMatter = matter(fileContent);

        if (!frontMatter.data.title) {
            const title = path.basename(file, '.md').replace(/-/g, ' ');
            fileContent = `---\ntitle: ${title}\n---\n${fileContent}`;
        }

        // Replace links
        // fileContent = fileContent.replace(/\(([^)]*\.md)\)/g, (match, p1) => {
        //     return `(${p1.replace(/_/g, '-')})`;
        // });

        const angleBracketRegex = /<\(([^)]*)\)/g;

        console.log('Current filename: ', file);
        console.log('Potential markdown rendering issues: ', fileContent.match(angleBracketRegex));

        // Replace <(arg) with \<(arg) to avoid markdown rendering
        fileContent = fileContent.replace(angleBracketRegex, '\\<($1)');

        const curlyBracketRegex = /{([^}]*)}/g;
        fileContent = fileContent.replace(curlyBracketRegex, '\\{$1\\}');

        fs.writeFileSync(filePath, fileContent);
    }
});