"use client";

import { useState, useRef, useEffect } from 'react';

const HealHubChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your HealHub assistant. I can help you book appointments, answer health questions, or guide you through our services. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Book an appointment",
    "Emergency consultation", 
    "Prescription refill",
    "Check symptoms",
    "Insurance questions"
  ];

  const handleQuickReply = (query: string) => {
    handleSendMessage(query);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('appointment') || message.includes('book') || message.includes('schedule')) {
      return "I'd be happy to help you book an appointment! Here's how:\n\n1. Click 'Start Consultation' on our homepage\n2. Choose your specialty (General, Dermatology, Mental Health, etc.)\n3. Select an available time slot\n4. Fill in your basic information\n\nOur doctors are available 24/7, and most appointments can be scheduled within 3 minutes. Would you like me to direct you to our booking page?";
    }
    
    if (message.includes('emergency') || message.includes('urgent') || message.includes('immediate')) {
      return "For urgent medical needs:\n\n🚨 Life-threatening emergencies: Call 911 immediately\n\n⚡ Urgent but not life-threatening: Click 'Start Consultation' for immediate doctor access (average wait < 3 minutes)\n\nOur platform is perfect for urgent issues like:\n• Fever, cold, flu symptoms\n• Minor injuries\n• Skin conditions\n• Prescription needs\n• Mental health support\n\nWould you like to start an urgent consultation now?";
    }
    
    if (message.includes('prescription') || message.includes('refill') || message.includes('medication')) {
      return "Getting prescription refills is easy with HealHub:\n\n💊 For existing prescriptions:\n1. Start a consultation with any of our doctors\n2. Provide your current medication details\n3. Doctor reviews and approves refill\n4. Prescription sent directly to your pharmacy\n\n📋 What you'll need:\n• Current medication name and dosage\n• Pharmacy information\n• Brief health update\n\nMost refill consultations take under 5 minutes. Ready to get started?";
    }
    
    if (message.includes('symptom') || message.includes('pain') || message.includes('sick') || message.includes('hurt')) {
      return "I understand you're experiencing symptoms. While I can't diagnose conditions, our board-certified doctors can help!\n\n🔍 Common symptoms we treat:\n• Fever, cough, cold symptoms\n• Headaches and migraines\n• Skin issues (rash, acne, etc.)\n• Digestive problems\n• Mental health concerns\n• Minor injuries\n\n⚠️ Seek immediate emergency care for:\n• Chest pain or difficulty breathing\n• Severe injuries\n• Signs of stroke\n• Severe allergic reactions\n\nWould you like to consult with a doctor about your symptoms?";
    }
    
    if (message.includes('insurance') || message.includes('cost') || message.includes('price') || message.includes('payment')) {
      return "Great question about costs and insurance!\n\n💳 Payment Options:\n• Most major insurance plans accepted\n• Affordable self-pay options available\n• HSA/FSA compatible\n• Transparent pricing (no surprise bills)\n\n📋 Insurance Coverage:\n• We accept most major providers\n• Verification happens during booking\n• Copay information provided upfront\n\n💰 Cost Benefits:\n• Often less expensive than urgent care\n• No travel costs or time off work\n• Prescription savings through our partners\n\nWould you like to check if your insurance is accepted?";
    }
    
    if (message.includes('how') && (message.includes('work') || message.includes('healhub'))) {
      return "Here's how HealHub works:\n\n🏥 Simple 3-Step Process:\n1. Book: Choose your doctor and time (or get instant care)\n2. Connect: Secure video call from anywhere\n3. Care: Get diagnosis, treatment, and prescriptions\n\n⭐ Key Features:\n• 24/7 doctor availability\n• Average wait time < 3 minutes\n• HIPAA-compliant and secure\n• Prescription delivery\n• Follow-up care included\n\n🩺 Specialties Available:\n• General Medicine\n• Dermatology\n• Mental Health\n• Pediatrics\n• Women's Health\n\nReady to experience healthcare at the speed of life?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to HealHub! 👋\n\nI'm here to help you with:\n• Booking appointments\n• Understanding our services\n• Answering healthcare questions\n• Technical support\n\nWhat can I help you with today?";
    }
    
    if (message.includes('thank') || message.includes('bye') || message.includes('goodbye')) {
      return "You're welcome! Take care of yourself, and remember - we're here 24/7 whenever you need quality healthcare.\n\n🌟 **Quick access**: You can always click 'Start Consultation' for immediate care.\n\nStay healthy! 💙";
    }
    
    return "I'd be happy to help! Here are some things I can assist you with:\n\n🏥 Book an appointment\n💊 Prescription refills\n🚨 Emergency consultations\n❓ General health questions\n💳 Insurance and billing\n\nYou can also try asking me specific questions like:\n• 'How do I book an appointment?'\n• 'What symptoms do you treat?'\n• 'Do you accept my insurance?'\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend) return;

    const userMessage = {
      id: Date.now(),
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(textToSend);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center gap-2 group"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 21l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
          </svg>
          <span className="hidden group-hover:block text-sm font-medium">Chat with AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-[500px] flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">HealHub Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick options:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealHubChatBot; 