import React from 'react';

const Alert = ({ alert }) => {
  if (!alert.show) return null;

  const getAlertClasses = () => {
    const baseClasses = "glass-effect border-0 rounded-xl shadow-custom-hover backdrop-blur-sm animate-slide-in-down font-poppins font-medium border-l-4";
    
    switch (alert.type) {
      case 'success':
        return `${baseClasses} bg-green-500/95 text-white border-green-500`;
      case 'danger':
        return `${baseClasses} bg-red-500/95 text-white border-red-500`;
      case 'warning':
        return `${baseClasses} bg-yellow-500/95 text-gray-900 border-yellow-500`;
      case 'info':
        return `${baseClasses} bg-blue-500/95 text-white border-blue-500`;
      default:
        return `${baseClasses} bg-primary-500/95 text-white border-primary-500`;
    }
  };

  const getIcon = () => {
    switch (alert.type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'danger':
        return 'fas fa-exclamation-triangle';
      case 'warning':
        return 'fas fa-exclamation-circle';
      case 'info':
        return 'fas fa-info-circle';
      default:
        return 'fas fa-bell';
    }
  };

  return (
    <div className="fixed top-24 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className={`${getAlertClasses()} pointer-events-auto`} role="alert">
              <div className="flex items-center p-4">
                <i className={`${getIcon()} text-xl mr-4 flex-shrink-0`}></i>
                <div className="flex-1">
                  <strong>{alert.message}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
