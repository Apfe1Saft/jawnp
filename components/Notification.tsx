import React from 'react';

interface NotificationProps {
    message: string;
  }

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div className="notification">
      {message}
      <style jsx>{`
        .notification {
          position: fixed;
          top: 10px;
          right: 10px;
          background-color: #f8d7da;
          color: #721c24;
          padding: 10px 20px;
          border-radius: 5px;
          border: 1px solid #f5c6cb;
        }
      `}</style>
    </div>
  );
};

export default Notification;