export default function Toast({message, onClose}) {
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className="bg-black text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-4 animate-fade-in-out">
                <span>{message}</span>
                <button onClick={onClose} className="text-white font-bold">×</button>
            </div>
        </div>
    );
}