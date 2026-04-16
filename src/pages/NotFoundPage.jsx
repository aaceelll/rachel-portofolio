import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-bg-dark flex flex-col items-center justify-center text-white px-6 text-center">
            <p className="text-orange text-sm font-bold uppercase tracking-widest mb-4">404 — Page Not Found</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white font-heading mb-4">Oops!</h1>
            <p className="text-text-secondary text-base max-w-sm mb-8">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="btn-primary"
            >
                ← Back to Homepage
            </Link>
        </div>
    );
}