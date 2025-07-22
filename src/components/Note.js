import React from 'react';

const Note = ({ id, title, content, createdAt, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="h-full animate-fade-in-up">
      <div className="glass-effect rounded-xl shadow-custom border-0 card-hover h-full flex flex-col overflow-hidden relative border-l-4 border-primary-500">
        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-400"></div>
        
        {/* Header */}
        <div className="flex justify-between items-start p-4 bg-transparent border-0">
          <div className="opacity-70">
            <small className="text-gray-500 flex items-center text-sm">
              <i className="fas fa-calendar-alt mr-2"></i>
              {createdAt}
            </small>
          </div>
          <button
            onClick={handleDelete}
            className="w-8 h-8 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
            title="Delete note"
          >
            <i className="fas fa-trash-alt text-xs"></i>
          </button>
        </div>
        
        {/* Body */}
        <div className="flex-1 px-4 pb-0">
          <h5 className="text-lg font-bold text-gray-800 mb-3 leading-tight break-words">
            {title}
          </h5>
          <p className="text-gray-600 text-sm leading-relaxed break-words overflow-hidden line-clamp-5">
            {content}
          </p>
        </div>
        
        {/* Footer */}
        <div className="bg-transparent border-0 p-4 pt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <small className="text-gray-500 flex items-center">
              <i className="fas fa-sticky-note mr-2"></i>
              Note
            </small>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button className="px-3 py-1 text-xs border border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-1">
                <i className="fas fa-edit"></i>
                Edit
              </button>
              <button className="px-3 py-1 text-xs border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-1">
                <i className="fas fa-share"></i>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 120px;
        }
      `}</style>
    </div>
  );
};

export default Note;
