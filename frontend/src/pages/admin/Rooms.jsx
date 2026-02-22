import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        const fetchRooms = async () => {
            try {
                const response = await fetch('/api/rooms');
                if (response.ok) {
                    const data = await response.json();
                    setRooms(data);
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchRooms();
    }, [navigate]);

    const toggleAvailability = async (id, currentStatus) => {
        // This would be a PATCH request
        alert('This would toggle availability in a real app!');
    };

    if (loading) return <div className="p-8">Loading rooms...</div>;

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Manage Rooms</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
                        <div key={room.id} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h3 className="text-lg font-medium text-gray-900">{room.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{room.type} - ${room.price}/night</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                        {room.available ? 'Available' : 'Booked/Hidden'}
                                    </span>
                                    <button
                                        onClick={() => toggleAvailability(room.id, room.available)}
                                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Toggle Status
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
