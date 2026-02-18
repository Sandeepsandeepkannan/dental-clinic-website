"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, MessageSquare, RotateCcw, CheckCircle2, ChevronRight } from "lucide-react";

const ADMIN_PHONE = "918190027273";

const CHAT_STEPS = {
  START: {
    question: "Welcome to Aesthetiq Foundation! How may we assist you today?",
    options: ["Skin Consultation", "Dental Care", "Hair Treatment", "International Patients"],
    next: "DETAILS"
  },
  DETAILS: {
    question: "Excellent. When would you prefer to visit our clinic?",
    options: ["As soon as possible", "This weekend", "Next week", "Just inquiring"],
    next: "CONTACT_PREP"
  },
  CONTACT_PREP: {
    question: "Almost done! Ready to connect with our specialists via WhatsApp to finalize your visit?",
    options: ["Yes, open WhatsApp", "Restart Chat"],
    next: "FINAL"
  }
};

export default function AesthetiqAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("START");
  const [history, setHistory] = useState<{ type: 'bot' | 'user', text: string }[]>([
    { type: 'bot', text: CHAT_STEPS.START.question }
  ]);
  const [selections, setSelections] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleOptionClick = (option: string) => {
    const updatedHistory = [...history, { type: 'user' as const, text: option }];
    const updatedSelections = [...selections, option];
    setSelections(updatedSelections);

    if (option === "Restart Chat") {
      resetChat();
      return;
    }

    if (currentStep === "CONTACT_PREP" && option.includes("WhatsApp")) {
      const message = encodeURIComponent(
        `Hello Aesthetiq Team,\n\nInquiry from Website:\n- Service: ${updatedSelections[0]}\n- Timeline: ${updatedSelections[1]}`
      );
      window.open(`https://wa.me/${ADMIN_PHONE}?text=${message}`, "_blank");
      setIsOpen(false);
      setTimeout(resetChat, 1000);
      return;
    }

    const nextStepKey = CHAT_STEPS[currentStep as keyof typeof CHAT_STEPS].next;
    if (CHAT_STEPS[nextStepKey as keyof typeof CHAT_STEPS]) {
      setCurrentStep(nextStepKey);
      setHistory([...updatedHistory, { 
        type: 'bot', 
        text: CHAT_STEPS[nextStepKey as keyof typeof CHAT_STEPS].question 
      }]);
    }
  };

  const resetChat = () => {
    setCurrentStep("START");
    setSelections([]);
    setHistory([{ type: 'bot', text: CHAT_STEPS.START.question }]);
  };

  return (
    /* FIXED WRAPPER: Highest Z-index to ensure visibility over the Hero form */
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-none">
      
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-white"></span>
          </span>
        )}
      </button>

      {/* Chat Window: Matches the reference layout */}
      {isOpen && (
        <div className="pointer-events-auto absolute bottom-20 right-0 w-[85vw] sm:w-[380px] h-[520px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300 origin-bottom-right">
          
          {/* Header: Clinical Dark Style */}
          <div className="bg-slate-900 p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Clinical Assistant</h3>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-black">Always Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100"><X size={20}/></button>
          </div>

          {/* Chat Bubble Area */}
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
            {history.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  msg.type === 'user' 
                  ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-md' 
                  : 'bg-white text-slate-700 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Selection Area: Matching the "Collect.chat" button style */}
          <div className="p-5 bg-white border-t border-slate-100">
            <div className="flex flex-col gap-2">
              {CHAT_STEPS[currentStep as keyof typeof CHAT_STEPS].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full group flex items-center justify-between px-5 py-3 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all text-left"
                >
                  <span className="text-xs font-bold text-slate-700 group-hover:text-blue-700">{opt}</span>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
            
            <button 
              onClick={resetChat}
              className="mt-4 w-full flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] hover:text-blue-600 transition-colors"
            >
              <RotateCcw size={12} /> Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}