import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { LayoutDashboard, CreditCard, BarChart3, Play, Loader2, LogOut } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import Subscriptions from './pages/Subscriptions'
import Insights from './pages/Insights'
import Login from './pages/Login'
import ChatBot from './components/ChatBot'
import { auth, signOut } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

const API = 'http://localhost:8000'

function Navbar({ onStartDemo, demoRunning }) {
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur bg-white/3">
            <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-xl">🤖</span>
                    <span className="font-bold text-white">Life Admin Agent</span>
                    {/* <span className="text-xs text-white/30 hidden md:inline">Powered by Claude + ReAct</span> */}
                </div>

                <div className="flex items-center gap-1">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${isActive ? 'bg-blue-600/30 text-blue-300' : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`
                        }
                    >
                        <LayoutDashboard size={14} />
                        <span className="hidden md:inline">Dashboard</span>
                    </NavLink>
                    <NavLink
                        to="/subscriptions"
                        className={({ isActive }) =>
                            `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${isActive ? 'bg-blue-600/30 text-blue-300' : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`
                        }
                    >
                        <CreditCard size={14} />
                        <span className="hidden md:inline">Subscriptions</span>
                    </NavLink>
                    <NavLink
                        to="/insights"
                        className={({ isActive }) =>
                            `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${isActive ? 'bg-blue-600/30 text-blue-300' : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`
                        }
                    >
                        <BarChart3 size={14} />
                        <span className="hidden md:inline">Insights</span>
                    </NavLink>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-all"
                >
                    <LogOut size={14} />
                    <span className="hidden md:inline">Sign Out</span>
                </button>
            </div>
        </nav>
    )
}

export default function App() {
    const [demoRunning, setDemoRunning] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleStartDemo = async () => {
        if (demoRunning) return
        setDemoRunning(true)
        try {
            // Trigger email processing which feeds into SSE stream
            await fetch(`${API}/api/process-emails`, { method: 'POST' })
        } catch (e) {
            console.error(e)
        } finally {
            setTimeout(() => setDemoRunning(false), 10000)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <Loader2 className="animate-spin text-blue-500 w-8 h-8" />
            </div>
        );
    }

    return (
        <BrowserRouter>
            <div className="min-h-screen">
                {user && <Navbar onStartDemo={handleStartDemo} demoRunning={demoRunning} />}
                <main className={user ? "max-w-6xl mx-auto px-4 py-6" : ""}>
                    <Routes>
                        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                        <Route path="/subscriptions" element={user ? <Subscriptions /> : <Navigate to="/login" />} />
                        <Route path="/insights" element={user ? <Insights /> : <Navigate to="/login" />} />
                    </Routes>
                </main>
                {user && <ChatBot />}
            </div>
        </BrowserRouter>
    )
}
