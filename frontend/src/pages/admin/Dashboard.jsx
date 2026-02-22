import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard() {
    const [stats, setStats] = useState({ bookings: 0, rooms: 0, messages: 0 });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        // This would ideally be an API call to get stats
        // For now, we'll just check if the token is valid by fetching bookings
        const fetchData = async () => {
            try {
                const response = await fetch('/api/bookings/admin', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 401 || response.status === 403) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin/login');
                    return;
                }

                const bookings = await response.json();
                setStats(prev => ({ ...prev, bookings: bookings.length }));
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) return <div className="p-8">Loading dashboard...</div>;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-xl font-bold text-blue-600">Hotel Admin</h1>
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                <Link to="/admin/dashboard" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Dashboard
                                </Link>
                                <Link to="/admin/bookings" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Bookings
                                </Link>
                                <Link to="/admin/rooms" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Rooms
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => { localStorage.removeItem('adminToken'); navigate('/admin/login'); }}
                                className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="py-10">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900">Dashboard Overview</h2>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                                <div className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="px-4 py-5 sm:p-6">
                                        <dt className="text-sm font-medium text-gray-500 truncate">Total Bookings</dt>
                                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.bookings}</dd>
                                    </div>
                                </div>
                                {/* Add more stat cards here */}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
