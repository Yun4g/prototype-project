// Modal Component
function VideoSourceModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-lg w-[40%] p-6 md:p-10 flex flex-col gap-4 items-center">
        <h2 className="text-xl md:text-3xl font-medium text-gray-900 mb-6 text-center">Select a video source</h2>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-50 transition">
         
            <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="7" width="13" height="10" rx="2" stroke="#2563eb" strokeWidth="2"/>
              <path d="M21 7v10l-4-3V10l4-3z" stroke="#2563eb" strokeWidth="2"/>
            </svg>
            <span className="font-medium text-gray-800">Webcam</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-50 transition">
            {/* Streaming Software Icon */}
           <img src="/public/streaming.png" alt="" />
            <span className="font-medium text-gray-800">Streaming software</span>
          </button>
        </div>
        <button
          className="mt-8 text-gray-500 hover:text-gray-700 text-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default VideoSourceModal;