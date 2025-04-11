import Image from 'next/image';
import ChatWidget from './components/ChatWidget';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <MainContent />
      </div>
      <ChatWidget />
    </main>
  );
} 