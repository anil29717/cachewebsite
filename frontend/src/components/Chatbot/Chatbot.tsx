import React, { useState } from 'react';
import { X, Send, MessageCircle, Bot, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "🚀 AI Chatbot Coming Soon! We're working on something amazing for you. Stay tuned!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    console.log('Chatbot clicked, current state:', isOpen);
    console.log('Toggling to:', !isOpen);
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response with "Coming Soon" message
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thanks for your interest! 🤖 Our AI chatbot is currently under development. For immediate assistance, please contact us at info@cachedigitech.com or call us at +91-XXXXXXXXXX.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ${
          isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
        }`}
        style={{
          zIndex: 9999,
          transformOrigin: 'bottom right',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-2xl flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-lg">AI Assistant</span>
              <div className="flex items-center gap-1 text-xs text-white/80">
                <Sparkles className="w-3 h-3" />
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50/50 to-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {!message.isUser && (
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`px-4 py-3 rounded-2xl text-sm shadow-sm ${
                    message.isUser
                      ? 'bg-gradient-to-br from-red-500 to-red-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-md'
                  }`}
                >
                  {message.text}
                </div>
                {message.isUser && (
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-xs font-semibold">U</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything... (Coming Soon)"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-sm bg-gray-50/50 transition-all duration-200"
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Chatbot Icon */}
      <div className="fixed bottom-6 right-6" style={{ zIndex: 9999 }}>
        <div className="relative group">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Button clicked!');
              toggleChat();
            }}
            className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group-hover:from-red-600 group-hover:to-red-700"
            title="Ask Our AI..!!"
            type="button"
          >
            <div className="relative">
              <Bot className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </button>
          
          {/* Hover Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              <span>Ask Our AI..!!</span>
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
          
          {/* Pulse animation when closed */}
          {!isOpen && (
            <div className="absolute inset-0 w-16 h-16 bg-red-500 rounded-full animate-ping opacity-30"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;