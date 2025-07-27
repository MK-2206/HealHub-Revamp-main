"use client";
import React, { useEffect, useState, useRef } from "react";
import { Dialog } from "primereact/dialog";
import dynamic from "next/dynamic";
const AgoraUIKit = dynamic(() => import("agora-react-uikit"), { ssr: false });
import { layout } from "agora-react-uikit";
import "agora-react-uikit/dist/index.css";

interface VideoCallDialogProps {
  isOpen: boolean;
  onHide: () => void;
  onError?: (error: string) => void;
}

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isVoiceNote?: boolean;
  isHFGenerated?: boolean;
  hfType?: 'summary' | 'analysis' | 'extraction' | 'translation';
}

const VideoCallDialog: React.FC<VideoCallDialogProps> = ({
  isOpen,
  onHide,
  onError,
}) => {
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState("guest");
  const [isClient, setIsClient] = useState(false);
  
  // Chat states
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(true);
  
  // Voice recognition states
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<any>(null);
  
  // AI states
  const [hfProcessing, setHfProcessing] = useState(false);
  const [hfEnabled, setHfEnabled] = useState(true);
  
  // Patient data
  const [consultationStage, setConsultationStage] = useState('greeting'); // greeting -> name -> details -> symptoms -> advice -> tips
  const [patientData, setPatientData] = useState({
    name: '',
    height: '',
    weight: '',
    age: '',
    symptoms: '',
    diagnosis: ''
  });

  const agoraAppId = 'cd1f3f29ef86458a8fce0a2a3c5b192b';

  // Structured Medical Consultation AI
  const consultationAI = {
    getResponse: (message: string, stage: string, data: any) => {
      const lowerMessage = message.toLowerCase();
      console.log('🏥 Consultation Stage:', stage, 'Message:', message);
      
      // Stage 1: Greeting
      if (stage === 'greeting') {
        if (lowerMessage.includes('hey') || lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
          return {
            response: "Hello! 👋 Welcome to your medical consultation. I'm Dr. Sarah Johnson. What's your name?",
            nextStage: 'name',
            updateData: {}
          };
        }
        return {
          response: "Hi there! Please say 'hello' to start your consultation with me! 😊",
          nextStage: 'greeting',
          updateData: {}
        };
      }
      
      // Stage 2: Get Name
      if (stage === 'name') {
        let extractedName = '';
        if (lowerMessage.includes('my name is')) {
          extractedName = message.split('my name is')[1]?.trim() || '';
        } else if (lowerMessage.includes("i'm")) {
          extractedName = message.split("i'm")[1]?.trim() || '';
        } else if (lowerMessage.includes('i am')) {
          extractedName = message.split('i am')[1]?.trim() || '';
        } else {
          // Assume the whole message is the name if no specific pattern
          extractedName = message.trim();
        }
        
        if (extractedName) {
          return {
            response: `Nice to meet you, ${extractedName}! 😊 Now I need some basic information. How old are you?`,
            nextStage: 'age',
            updateData: { name: extractedName }
          };
        }
        
        return {
          response: "I didn't catch your name. Could you please tell me your name?",
          nextStage: 'name',
          updateData: {}
        };
      }
      
      // Stage 3: Get Age
      if (stage === 'age') {
        const ageMatch = message.match(/(\d+)/);
        if (ageMatch) {
          const age = ageMatch[1];
          return {
            response: `Got it, you're ${age} years old. What's your height? (e.g., 5'6" or 170cm)`,
            nextStage: 'height',
            updateData: { age: age }
          };
        }
        
        return {
          response: "Could you please tell me your age in numbers? (e.g., 25)",
          nextStage: 'age',
          updateData: {}
        };
      }
      
      // Stage 4: Get Height
      if (stage === 'height') {
        if (message.trim()) {
          return {
            response: `Thank you! And what's your weight? (e.g., 150 lbs or 70 kg)`,
            nextStage: 'weight',
            updateData: { height: message.trim() }
          };
        }
        
        return {
          response: "Please tell me your height (e.g., 5'6\" or 170cm)",
          nextStage: 'height',
          updateData: {}
        };
      }
      
      // Stage 5: Get Weight
      if (stage === 'weight') {
        if (message.trim()) {
          return {
            response: `Perfect! Now ${data.name}, tell me what's bothering you today. What symptoms are you experiencing?`,
            nextStage: 'symptoms',
            updateData: { weight: message.trim() }
          };
        }
        
        return {
          response: "Please tell me your weight (e.g., 150 lbs or 70 kg)",
          nextStage: 'weight',
          updateData: {}
        };
      }
      
      // Stage 6: Analyze Symptoms
      if (stage === 'symptoms') {
        const symptomsData = { symptoms: message.trim() };
        
        // Analyze symptoms and provide advice
        if (lowerMessage.includes('cold') || lowerMessage.includes('cough') || lowerMessage.includes('runny nose') || lowerMessage.includes('congestion')) {
          return {
            response: `I understand you have cold symptoms, ${data.name}. Based on your information:\n\n🤧 DIAGNOSIS: Common Cold\n\n💊 TREATMENT PLAN:\n• Rest for 7-10 days\n• Drink warm fluids (tea, soup)\n• Take vitamin C (1000mg daily)\n• Use saline nasal spray\n• Acetaminophen for aches (500mg every 6 hours)\n\n🏠 HOME REMEDIES:\n• Honey and lemon tea\n• Steam inhalation\n• Throat lozenges\n\nWould you like some general health tips to prevent future colds?`,
            nextStage: 'advice',
            updateData: { ...symptomsData, diagnosis: 'Common Cold' }
          };
        }
        
        if (lowerMessage.includes('fever') || lowerMessage.includes('temperature') || lowerMessage.includes('hot')) {
          return {
            response: `${data.name}, fever indicates your body is fighting an infection.\n\n🌡️ DIAGNOSIS: Fever/Viral Infection\n\n💊 TREATMENT PLAN:\n• Monitor temperature every 4 hours\n• Acetaminophen 500mg every 6 hours\n• Stay hydrated - 8-10 glasses water daily\n• Complete bed rest\n• Light, easy-to-digest foods\n\n⚠️ WHEN TO WORRY:\n• Fever above 103°F (39.4°C)\n• Difficulty breathing\n• Severe headache\n\nShall I give you some health tips for faster recovery?`,
            nextStage: 'advice',
            updateData: { ...symptomsData, diagnosis: 'Fever/Viral Infection' }
          };
        }
        
        if (lowerMessage.includes('headache') || lowerMessage.includes('head pain')) {
          return {
            response: `I see you're experiencing headaches, ${data.name}.\n\n🧠 DIAGNOSIS: Tension Headache\n\n💊 TREATMENT PLAN:\n• Ibuprofen 400mg every 8 hours\n• Rest in dark, quiet room\n• Apply cold compress for 15 minutes\n• Stay hydrated\n• Avoid screens for 2 hours\n\n🌿 NATURAL REMEDIES:\n• Peppermint oil on temples\n• Neck and shoulder massage\n• Deep breathing exercises\n\nWant some lifestyle tips to prevent headaches?`,
            nextStage: 'advice',
            updateData: { ...symptomsData, diagnosis: 'Tension Headache' }
          };
        }
        
        if (lowerMessage.includes('stomach') || lowerMessage.includes('nausea') || lowerMessage.includes('vomit')) {
          return {
            response: `${data.name}, stomach issues can be uncomfortable.\n\n🤢 DIAGNOSIS: Gastric Upset\n\n💊 TREATMENT PLAN:\n• BRAT diet (Bananas, Rice, Applesauce, Toast)\n• Oral rehydration solution\n• Avoid dairy and spicy foods\n• Probiotics after 24 hours\n• Antacids if needed\n\n🍵 SOOTHING REMEDIES:\n• Ginger tea\n• Chamomile tea\n• Small, frequent meals\n\nShall I share some digestive health tips?`,
            nextStage: 'advice',
            updateData: { ...symptomsData, diagnosis: 'Gastric Upset' }
          };
        }
        
        if (lowerMessage.includes('tired') || lowerMessage.includes('fatigue') || lowerMessage.includes('weak')) {
          return {
            response: `Fatigue can really affect your day, ${data.name}.\n\n😴 DIAGNOSIS: General Fatigue\n\n⚡ TREATMENT PLAN:\n• Ensure 7-9 hours quality sleep\n• B-complex vitamins daily\n• Iron-rich foods (spinach, meat)\n• Regular light exercise\n• Reduce caffeine after 2 PM\n\n🥗 ENERGY BOOSTERS:\n• Balanced breakfast\n• Stay hydrated\n• Short power naps (20 min max)\n\nWant some energy-boosting lifestyle tips?`,
            nextStage: 'advice',
            updateData: { ...symptomsData, diagnosis: 'General Fatigue' }
          };
        }
        
        // Generic response for other symptoms
        return {
          response: `Thank you for describing your symptoms, ${data.name}.\n\n🩺 GENERAL ADVICE:\n• Rest and monitor symptoms\n• Stay hydrated\n• Eat nutritious foods\n• Take any medications as directed\n• Contact a doctor if symptoms worsen\n\n💡 RECOMMENDATION:\nFor specific symptoms like yours, I recommend seeing a healthcare provider for proper examination.\n\nWould you like some general health and wellness tips?`,
          nextStage: 'advice',
          updateData: { ...symptomsData, diagnosis: 'General Consultation' }
        };
      }
      
      // Stage 7: Health Tips and Closing
      if (stage === 'advice') {
        return {
          response: `Wonderful! Here are some health tips for you, ${data.name}:\n\n🌟 DAILY HEALTH TIPS:\n• Drink 8 glasses of water daily\n• Get 30 minutes of exercise\n• Eat 5 servings of fruits/vegetables\n• Sleep 7-9 hours nightly\n• Practice stress management\n\n🍎 IMMUNE SYSTEM BOOSTERS:\n• Vitamin D (sunlight exposure)\n• Zinc and Vitamin C supplements\n• Regular handwashing\n• Avoid smoking and excess alcohol\n\n💪 POSITIVE MESSAGE:\nRemember ${data.name}, your health is your wealth! Small daily healthy choices lead to big improvements. You're taking great care of yourself by seeking medical advice. Keep up the positive attitude - it's the best medicine! 😊\n\n🌈 Stay healthy, stay happy, and take care! Feel free to consult again anytime.`,
          nextStage: 'complete',
          updateData: {}
        };
      }
      
      // Stage 8: Consultation Complete
      if (stage === 'complete') {
        return {
          response: `Hello again ${data.name}! 👋 Your consultation is complete. If you have new symptoms or concerns, please start a new consultation. Stay healthy! 😊`,
          nextStage: 'complete',
          updateData: {}
        };
      }
      
      // Default fallback
      return {
        response: "I'm here to help with your health consultation. Please follow the process step by step! 😊",
        nextStage: stage,
        updateData: {}
      };
    }
  };

  // Process message with consultation AI
  const processWithConsultationAI = async (message: string, isVoiceNote: boolean = false) => {
    if (!hfEnabled) return;
    
    setHfProcessing(true);
    
    try {
      console.log('🏥 Processing consultation message:', message);
      console.log('📊 Current stage:', consultationStage);
      console.log('👤 Patient data:', patientData);
      
      const result = consultationAI.getResponse(message, consultationStage, patientData);
      
      // Update stage and patient data
      setConsultationStage(result.nextStage);
      setPatientData(prev => ({ ...prev, ...result.updateData }));
      
      console.log('📈 New stage:', result.nextStage);
      console.log('📝 Updated data:', result.updateData);
      
      setTimeout(() => {
        const aiMessage: ChatMessage = {
          id: `ai-${Date.now()}`,
          sender: "Dr. Sarah Johnson",
          message: result.response,
          timestamp: new Date().toLocaleTimeString(),
          isHFGenerated: true,
          hfType: 'analysis'
        };
        setChatMessages(prev => [...prev, aiMessage]);
      }, 1000);

    } catch (error) {
      console.error('❌ Consultation AI error:', error);
    } finally {
      setHfProcessing(false);
    }
  };

  // Generate PDF report
  const downloadChatPDF = () => {
    try {
      const reportContent = `
MEDICAL CONSULTATION REPORT
==============================================
Patient Name: ${patientData.name || 'Not provided'}
Age: ${patientData.age || 'Not provided'}
Height: ${patientData.height || 'Not provided'}
Weight: ${patientData.weight || 'Not provided'}
Symptoms: ${patientData.symptoms || 'Not provided'}
Diagnosis: ${patientData.diagnosis || 'Not provided'}
Consultation Date: ${new Date().toLocaleString()}
==============================================

FULL CONVERSATION:
${chatMessages
  .filter(msg => msg.sender !== 'System')
  .map(msg => `
[${msg.timestamp}] ${msg.sender}:
${msg.message}
---`)
  .join('\n')}

==============================================
DISCLAIMER:
This is a mock consultation for demonstration purposes only.
Always consult with a qualified healthcare professional for real medical advice.

Generated by HealHub AI Medical Assistant
      `.trim();

      const blob = new Blob([reportContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Medical_Report_${patientData.name || 'Patient'}_${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      const confirmMessage: ChatMessage = {
        id: `download-${Date.now()}`,
        sender: "System",
        message: "📥 Medical report downloaded successfully! Check your Downloads folder.",
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages(prev => [...prev, confirmMessage]);

    } catch (error) {
      console.error('PDF generation error:', error);
    }
  };

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        setSpeechSupported(true);
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.maxAlternatives = 1;
        
        recognition.onstart = () => {
          setIsListening(true);
        };
        
        recognition.onresult = async (event: any) => {
          const transcript = event.results[0][0].transcript;
          
          const voiceMessage: ChatMessage = {
            id: Date.now().toString(),
            sender: "🎤 Voice Note",
            message: transcript,
            timestamp: new Date().toLocaleTimeString(),
            isVoiceNote: true
          };
          setChatMessages(prev => [...prev, voiceMessage]);
          
          await processWithConsultationAI(transcript, true);
        };
        
        recognition.onend = () => {
          setIsListening(false);
        };
        
        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
        };
        
        recognitionRef.current = recognition;
      }
    }
  }, []);

  // Reset consultation when dialog opens
  useEffect(() => {
    if (isOpen) {
      setConsultationStage('greeting');
      setPatientData({
        name: '',
        height: '',
        weight: '',
        age: '',
        symptoms: '',
        diagnosis: ''
      });
      
      const initialMessages: ChatMessage[] = [
        {
          id: "1",
          sender: "System",
          message: "Welcome to HealHub Medical Consultation! 🏥",
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          id: "2", 
          sender: "Dr. Sarah Johnson",
          message: "Hello! 👋 I'm Dr. Sarah Johnson, your virtual medical consultant. I'll guide you through a structured consultation. Please say 'hello' or 'hey' to begin! 😊",
          timestamp: new Date().toLocaleTimeString(),
          isHFGenerated: true,
          hfType: 'summary'
        }
      ];
      setChatMessages(initialMessages);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!agoraAppId && onError) {
      onError("Agora App ID is not defined in environment variables.");
    }
  }, [agoraAppId, onError]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        sender: username || "You",
        message: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages(prev => [...prev, message]);
      
      await processWithConsultationAI(newMessage.trim());
      
      setNewMessage("");
    }
  };

  const startVoiceRecognition = () => {
    if (recognitionRef.current && speechSupported && !isListening) {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    }
  };

  const stopVoiceRecognition = () => {
    if (recognitionRef.current && isListening) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.error('Error stopping speech recognition:', error);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Helper function for AI message styling
  const getHFMessageStyle = (hfType?: string) => {
    const baseStyle = {
      padding: "8px 12px",
      borderRadius: "8px",
      fontSize: "13px",
      borderLeft: "4px solid",
    };

    switch (hfType) {
      case 'analysis':
        return { ...baseStyle, backgroundColor: "#e8f5e8", borderLeftColor: "#28a745" };
      case 'summary':
        return { ...baseStyle, backgroundColor: "#fff8e1", borderLeftColor: "#ff9800" };
      case 'extraction':
        return { ...baseStyle, backgroundColor: "#e3f2fd", borderLeftColor: "#2196f3" };
      default:
        return { ...baseStyle, backgroundColor: "#f3e5f5", borderLeftColor: "#9c27b0" };
    }
  };

  if (!isClient) {
    return null;
  }

  // Styles
  const dialogStyle: React.CSSProperties = {
    width: "95vw",
    maxWidth: "1400px",
    height: "85vh",
    zIndex: 1000,
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "75vh",
    display: "flex",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
  };

  const videoContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flex: showChat ? 2 : 1,
    transition: "all 0.3s ease",
  };

  const chatContainerStyle: React.CSSProperties = {
    width: showChat ? "350px" : "0px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    borderLeft: showChat ? "2px solid #e9ecef" : "none",
    transition: "all 0.3s ease",
    overflow: "hidden",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    backgroundColor: "#f8f9fa",
    borderBottom: "2px solid #e9ecef",
    borderRadius: "8px 8px 0 0",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007bff",
    cursor: "pointer",
    borderRadius: 6,
    padding: "6px 12px",
    color: "#ffffff",
    fontSize: 11,
    border: "none",
    fontWeight: "600",
    margin: "0 3px",
  };

  const chatHeaderStyle: React.CSSProperties = {
    padding: "15px",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    borderBottom: "1px solid #0056b3",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const messagesStyle: React.CSSProperties = {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const messageInputStyle: React.CSSProperties = {
    padding: "10px",
    borderTop: "1px solid #e9ecef",
    display: "flex",
    gap: "6px",
    alignItems: "center",
  };

  return (
    <Dialog
      header="🎥 Medical Video Consultation"
      visible={isOpen}
      onHide={onHide}
      modal={true}
      style={dialogStyle}
      className="bg-opacity-100 bg-gray-50 rounded-lg shadow-2xl"
    >
      <div style={containerStyle}>
        {/* Video Section */}
        <div style={videoContainerStyle}>
          <div style={navStyle}>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              <button 
                style={buttonStyle} 
                onClick={() => setPinned(!isPinned)}
              >
                {isPinned ? "📊 Grid" : "📌 Pin"}
              </button>
              <button 
                style={{
                  ...buttonStyle,
                  backgroundColor: showChat ? "#28a745" : "#6c757d"
                }} 
                onClick={() => setShowChat(!showChat)}
              >
                💬 Chat
              </button>
              <button 
                style={{
                  ...buttonStyle,
                  backgroundColor: hfEnabled ? "#ff9800" : "#6c757d"
                }} 
                onClick={() => setHfEnabled(!hfEnabled)}
              >
                🤖 AI {hfEnabled ? "ON" : "OFF"}
              </button>
              <button 
                style={{
                  ...buttonStyle,
                  backgroundColor: "#17a2b8"
                }} 
                onClick={downloadChatPDF}
              >
                📥 Download Report
              </button>
            </div>
            
            <div style={{ fontSize: "10px", color: "#6c757d" }}>
              {hfProcessing && "🤖 AI Processing..."}
              {!hfProcessing && hfEnabled && `🏥 Stage: ${consultationStage}`}
              {!hfProcessing && !hfEnabled && "🤖 AI Disabled"}
              {patientData.name && ` | ${patientData.name}`}
            </div>
          </div>

          {agoraAppId ? (
            <AgoraUIKit
              rtcProps={{
                appId: agoraAppId as string,
                channel: "test",
                token: null,
                role: "host",
                layout: isPinned ? layout.pin : layout.grid,
                enableScreensharing: true,
              }}
              rtmProps={{ username: username || "user", displayUsername: true }}
              callbacks={{
                EndCall: onHide,
              }}
            />
          ) : (
            <div style={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              height: "100%",
              color: "#dc3545",
              fontSize: "18px"
            }}>
              ❌ Failed to load video components.
            </div>
          )}
        </div>

        {/* Enhanced Chat Section */}
        {showChat && (
          <div style={chatContainerStyle}>
            <div style={chatHeaderStyle}>
              <span>Dr. Sarah Johnson - Online</span>
              <div style={{ fontSize: "10px", display: "flex", gap: "8px" }}>
                {speechSupported && (
                  <span>{isListening ? "🎤 Recording" : "🎤 Ready"}</span>
                )}
                {hfProcessing && <span>Thinking...</span>}
              </div>
            </div>
            
            <div style={messagesStyle}>
              {chatMessages.map((msg) => (
                <div 
                  key={msg.id}
                  style={
                    msg.isHFGenerated ? getHFMessageStyle(msg.hfType) : {
                      padding: "8px 12px",
                      borderRadius: "8px",
                      backgroundColor: msg.isVoiceNote ? "#fff3cd" :
                                     msg.sender === "System" ? "#e3f2fd" : 
                                     msg.sender === username ? "#dcf8c6" : "#ffffff",
                      border: msg.isVoiceNote ? "1px solid #ffeaa7" : "1px solid #e9ecef",
                      fontSize: "13px",
                      borderLeft: msg.isVoiceNote ? "4px solid #f39c12" : "none",
                    }
                  }
                >
                  <div style={{ 
                    fontWeight: "600", 
                    fontSize: "11px", 
                    color: msg.isHFGenerated ? "#495057" : "#6c757d",
                    marginBottom: "4px" 
                  }}>
                    {msg.sender} • {msg.timestamp}
                  </div>
                  <div style={{ whiteSpace: "pre-wrap" }}>{msg.message}</div>
                </div>
              ))}
            </div>

            <div style={messageInputStyle}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  border: "1px solid #ced4da",
                  borderRadius: "18px",
                  fontSize: "13px",
                  outline: "none",
                }}
              />
              
              {speechSupported && (
                <button
                  onClick={isListening ? stopVoiceRecognition : startVoiceRecognition}
                  style={{
                    backgroundColor: isListening ? "#dc3545" : "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer",
                    fontSize: "14px",
                    animation: isListening ? "pulse 1s infinite" : "none",
                  }}
                >
                  {isListening ? "🛑" : "🎤"}
                </button>
              )}
              
              <button
                onClick={sendMessage}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                📤
              </button>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Dialog>
  );
};

export default VideoCallDialog;