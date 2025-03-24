import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-violet-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-full hover:opacity-90 transition-opacity"
      >
        Go Back Home
      </Link>
    </div>
  );
} 