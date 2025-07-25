import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const submitNote = (event) => {
    event.preventDefault();
    onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    setIsExpanded(false);
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div className="mb-8">
      <div className="glass-effect rounded-xl shadow-custom-hover border-0 card-hover overflow-hidden relative">
        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-400"></div>
        
        <div className="p-6">
          <form onSubmit={submitNote}>
            {isExpanded && (
              <div className="mb-4 animate-fade-in-up">
                <input
                  name="title"
                  onChange={handleChange}
                  value={note.title}
                  placeholder="Enter note title..."
                  className="w-full text-xl font-semibold border-0 bg-gray-50 rounded-lg px-4 py-3 focus:bg-gray-100 focus:outline-none transition-colors duration-300"
                  autoComplete="off"
                />
              </div>
            )}
            
            <div className="mb-4">
              <textarea
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder={isExpanded ? "Write your note content..." : "Take a note..."}
                rows={isExpanded ? 4 : 1}
                onClick={expand}
                className="w-full border-0 bg-gray-50 rounded-lg px-4 py-3 focus:bg-gray-100 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>
            
            {/* Always show buttons, but with different styles based on expanded state */}
            <div className="flex justify-between items-center gap-4 mt-4">
              {isExpanded ? (
                // Expanded state: show both cancel and add buttons
                <>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2"
                    onClick={() => {
                      setIsExpanded(false);
                      setNote({ title: '', content: '' });
                    }}
                  >
                    <i className="fas fa-times"></i>
                    Cancel
                  </button>
                  
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: '#667eea' }}
                  >
                    <i className="fas fa-plus"></i>
                    Add Note
                  </button>
                </>
              ) : (
                // Collapsed state: show a prominent add button that expands the form
                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    onClick={expand}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: '#667eea' }}
                  >
                    <i className="fas fa-plus"></i>
                    Add Note
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateArea;
