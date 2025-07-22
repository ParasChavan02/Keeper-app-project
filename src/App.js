import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';
import Alert from './components/Alert';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const addNote = (newNote) => {
    if (!newNote.title.trim() || !newNote.content.trim()) {
      showAlert('Please fill in both title and content fields!', 'danger');
      return;
    }
    
    setNotes(prevNotes => [
      ...prevNotes,
      {
        id: Date.now(),
        title: newNote.title,
        content: newNote.content,
        createdAt: new Date().toLocaleDateString()
      }
    ]);
    
    showAlert('Note added successfully!', 'success');
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    showAlert('Note deleted successfully!', 'info');
  };

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: '', type: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Header />
      <Alert alert={alert} />
      <div className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <CreateArea onAdd={addNote} />
          <div className="mt-8">
            {notes.length === 0 ? (
              <div className="text-center py-16 animate-fade-in-up">
                <i className="fas fa-sticky-note text-6xl text-white/60 mb-6"></i>
                <h4 className="text-2xl font-semibold text-white mb-2">No notes yet</h4>
                <p className="text-white/80 text-lg">Create your first note above!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map(note => (
                  <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    createdAt={note.createdAt}
                    onDelete={deleteNote}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
