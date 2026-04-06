import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Loader2 } from 'lucide-react';
import { auth, googleProvider, signInWithPopup } from '../firebase';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError('');
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (err) {
            console.error("Firebase Auth Error:", err);
            setError(err.message || 'Failed to sign in. Please check your configuration.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
            <div className="max-w-md w-full border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                
                <div className="flex flex-col items-center mb-8">
                    <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-3xl shadow-inner border border-white/5">
                        🤖
                    </div>
                    <h1 className="text-3xl font-bold text-white text-center">Life Admin Agent</h1>
                    <p className="text-white/50 text-center mt-2 text-sm">
                        Your intelligent personal assistant for autonomous subscription management and task tracking.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-xl mb-6 text-center">
                        {error}
                        <div className="text-xs text-red-400/70 mt-1">
                            (Did you configure Firebase keys in .env?)
                        </div>
                    </div>
                )}

                <button
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                >
                    {loading ? (
                        <Loader2 className="animate-spin text-gray-900" size={20} />
                    ) : (
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                            <path fill="none" d="M1 1h22v22H1z" />
                        </svg>
                    )}
                    Sign in with Google
                </button>
                
                <div className="mt-8 pt-6 border-t border-white/10 pb-2">
                    <p className="text-center text-xs text-white/40">
                        For presentation purposes. Please ask the reviewer for credentials or review the repository guidelines to run locally.
                    </p>
                </div>
            </div>
        </div>
    );
}
