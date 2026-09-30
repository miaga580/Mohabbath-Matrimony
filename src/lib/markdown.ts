import fs from 'fs';
import path from 'path';

export function getLegalContent(slug: string) {
  const fullPath = path.join(process.cwd(), 'content', 'legal', `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Basic frontmatter parser
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(fileContents);
  
  let content = fileContents;
  const metadata: Record<string, string> = {};
  
  if (match) {
    content = fileContents.replace(match[0], '');
    const frontmatter = match[1];
    frontmatter.split('\n').forEach(line => {
      const [key, ...value] = line.split(':');
      if (key && value.length) {
        metadata[key.trim()] = value.join(':').trim().replace(/^"|"$/g, '');
      }
    });
  }

  // Production check for [CONFIRM:...] tags
  if (process.env.NODE_ENV === 'production' && content.includes('[CONFIRM:')) {
    throw new Error(`Unresolved [CONFIRM:...] tag found in ${slug}.md. Cannot build for production.`);
  }

  return {
    content,
    metadata
  };
}
