'use client';

import React, { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';

/**
 * Componente que implementa un widget de chat flotante en la esquina inferior derecha
 * para interactuar con el asistente de IA.
 */
const ChatWidget = () => {
  // Estado para controlar si el chat está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  
  // Estado para almacenar los mensajes del chat
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: '¡Hola! Soy tu asistente de Second Brain AI. ¿En qué puedo ayudarte hoy?' }
  ]);
  
  // Estado para el mensaje que se está escribiendo
  const [input, setInput] = useState('');
  
  // Estado para mostrar el indicador de carga
  const [isLoading, setIsLoading] = useState(false);
  
  // Referencia para hacer scroll automático al último mensaje
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // API key de OpenAI
  const openaiApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
  // Instancia de OpenAI
  const openai = new OpenAI({
    apiKey: openaiApiKey,
    dangerouslyAllowBrowser: true // Permitir uso en el navegador (en producción, usar una API intermedia)
  });

  // Función para enviar un mensaje al asistente
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Agregar el mensaje del usuario al chat
    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Llamar a la API de OpenAI
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Eres un asistente útil integrado en una aplicación de Second Brain que ayuda a los usuarios a organizar sus notas, tareas y conocimientos. Eres conciso y servicial.' },
          ...messages,
          userMessage
        ],
        temperature: 0.7,
        max_tokens: 500,
      });
      
      // Agregar la respuesta del asistente al chat
      const assistantResponse = response.choices[0]?.message?.content || 'Lo siento, no pude procesar tu solicitud.';
      setMessages(prev => [...prev, { role: 'assistant', content: assistantResponse }]);
    } catch (error) {
      console.error('Error al comunicarse con OpenAI:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo más tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Efecto para hacer scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Botón flotante para abrir/cerrar el chat */}
      <button
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-colors ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          <span className="text-white text-xl">💬</span>
        )}
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-40 border border-gray-200 dark:border-gray-700">
          {/* Encabezado del chat */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <h3 className="font-medium">Asistente IA</h3>
            <p className="text-xs opacity-80">Pregúntame lo que necesites</p>
          </div>
          
          {/* Mensajes del chat */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Formulario para enviar mensajes */}
          <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 disabled:opacity-50"
              >
                {isLoading ? '...' : '➤'}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget; 