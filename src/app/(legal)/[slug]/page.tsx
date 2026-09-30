import { getLegalContent } from "@/lib/markdown";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const legalDir = path.join(process.cwd(), 'content', 'legal');
  const files = fs.readdirSync(legalDir);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, ''),
    }));
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const data = getLegalContent(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-32 pb-40 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="mb-20 border-b border-foreground/[0.08] pb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-brand-text mb-6">
            {data.metadata.title}
          </h1>
          <p className="text-sm tracking-widest uppercase font-light text-foreground/50">
            Version {data.metadata.version} &nbsp;|&nbsp; Updated {data.metadata.lastUpdated}
          </p>
        </div>
        
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-text prose-a:text-brand-text hover:prose-a:text-brand-text/80 prose-p:font-light prose-p:leading-relaxed prose-li:font-light">
            {/* Simple component to highlight [CONFIRM:...] tags in development */}
            <ReactMarkdown
              components={{
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                p: ({node, ...props}) => {
                  if (typeof props.children === 'string' && props.children.includes('[CONFIRM:')) {
                    const parts = props.children.split(/(\[CONFIRM:.*?\])/g);
                    return (
                      <p>
                        {parts.map((part, i) => 
                          part.startsWith('[CONFIRM:') ? (
                            <span key={i} className="bg-yellow-200 text-yellow-900 font-bold px-1 rounded">{part}</span>
                          ) : part
                        )}
                      </p>
                    );
                  }
                  return <p {...props} />;
                }
              }}
            >
              {data.content}
            </ReactMarkdown>
          </div>
      </div>
    </div>
  );
}
