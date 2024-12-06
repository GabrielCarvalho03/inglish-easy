import { useState, useEffect } from 'react';

const AudioSimulation = ({ userAudioFile, iaAudioFile }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messages = [
    { sender: 'user', audio: userAudioFile },
    { sender: 'ia', audio: iaAudioFile },
    { sender: 'user', audio: userAudioFile },
    { sender: 'ia', audio: iaAudioFile }
  ];

  const [audio] = useState(new Audio(messages[currentMessageIndex]?.audio));

  useEffect(() => {
    audio.load();
  }, [currentMessageIndex, audio]);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    audio.play();
    audio.onended = () => {
      setIsPlaying(false);
      if (currentMessageIndex < messages.length - 1) {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }
    };
  };

  return  (
    <div className="flex justify-center items-center relative pt-20">
      <div className="relative w-96 h-[500px] bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-full bg-gray-100 rounded-3xl p-5 overflow-y-auto">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-5 ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`relative ${message.sender === 'user' ? '' : 'order-last'}`}>
                    <img
                      src={message.sender === 'user' ? 'https://www.w3schools.com/w3images/avatar2.png' : 'https://www.w3schools.com/w3images/avatar6.png'}
                      alt="Foto do usuário ou IA"
                      className="w-10 h-10 rounded-full border-4 border-white"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div
                    className={`flex items-center justify-center max-w-md p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'
                      }`}
                  >
                    <button
                      onClick={() => {
                        setCurrentMessageIndex(index);
                        handlePlayAudio();
                      }}
                      className="w-full text-center p-2 rounded-md"
                    >
                      {isPlaying && currentMessageIndex === index ? 'Reproduzindo...' : 'Reproduzir Áudio'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-14 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default AudioSimulation;
