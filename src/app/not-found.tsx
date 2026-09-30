import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-32 bg-surface min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-serif text-6xl lg:text-8xl font-bold text-brand-text mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
      <p className="text-foreground/70 max-w-md mb-8">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        href="/" 
        className="bg-brand-purple text-white px-8 py-3 rounded-full font-bold hover:bg-brand-purple/90 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
