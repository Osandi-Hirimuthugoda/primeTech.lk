import React, { useState } from 'react';
import { type Page } from '../Types';

interface ChatPageProps {
  onNavigate: (page: Page) => void;
}

const ChatPage: React.FC<ChatPageProps> = ({ onNavigate }) => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { from: 'assistant', text: 'Hello! How can I help you find the perfect device today?' },
    { from: 'user', text: 'I’m looking for a premium smartphone upgrade with great camera performance.' },
    { from: 'assistant', text: 'Excellent choice. The iPhone 15 Pro and Pixel 8 Pro are both top picks for camera and speed.' },
  ]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.label}>Curated Intelligence</p>
            <h1 style={styles.title}>PrimeTech AI</h1>
            <p style={styles.subtitle}>A conversational assistant built to help you compare, upgrade, and decide.</p>
          </div>
          <button style={styles.backBtn} onClick={() => onNavigate('home')}>
            ← Back to Home
          </button>
        </div>

        <div style={styles.chatShell}>
          <aside style={styles.sidebar}>
            <button style={styles.newAnalysisBtn}>+ New Analysis</button>
            <div style={styles.recentLabel}>Recent sessions</div>
            <div style={styles.recentItem}>Compare iPhone vs Pixel</div>
            <div style={styles.recentItem}>Trade-in value estimate</div>
            <div style={styles.recentItem}>Accessories match</div>
          </aside>

          <div style={styles.chatArea}>
            <div style={styles.chatHeader}>
              <div>
                <div style={styles.chatTitle}>PrimeTech AI</div>
                <div style={styles.chatMeta}>Conversational trade-in advice</div>
              </div>
            </div>
            <div style={styles.messageList}>
              {messages.map((msg, index) => (
                <div key={index} style={msg.from === 'assistant' ? styles.assistantBubble : styles.userBubble}>
                  <p style={styles.messageText}>{msg.text}</p>
                </div>
              ))}
            </div>
            <div style={styles.inputRow}>
              <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Ask PrimeTech AI anything about tech..."
                style={styles.chatInput}
              />
              <button style={styles.sendBtn}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: { background: '#F2F5FF', minHeight: '100vh', padding: '48px 0 80px' },
  container: { maxWidth: 1280, margin: '0 auto', padding: '0 24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 32, flexWrap: 'wrap' },
  label: { fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#2563EB', marginBottom: 12, fontWeight: 700 },
  title: { fontSize: 38, fontWeight: 900, color: '#111827', margin: 0 },
  subtitle: { fontSize: 16, color: '#475569', maxWidth: 620, marginTop: 12, lineHeight: 1.8 },
  backBtn: { border: '1px solid #E5E7EB', borderRadius: 16, padding: '12px 20px', background: '#fff', color: '#111827', cursor: 'pointer', fontWeight: 700 },
  chatShell: { display: 'grid', gridTemplateColumns: '300px 1fr', gap: 24, alignItems: 'stretch' },
  sidebar: { background: '#fff', borderRadius: 28, padding: 24, border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 18, minHeight: 540 },
  newAnalysisBtn: { background: '#2563EB', color: '#fff', border: 'none', borderRadius: 16, padding: '14px 18px', cursor: 'pointer', fontWeight: 700 },
  recentLabel: { fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#6B7280', fontWeight: 700 },
  recentItem: { background: '#F8FAFF', borderRadius: 18, padding: '14px 16px', color: '#111827', fontWeight: 600, cursor: 'pointer' },
  chatArea: { background: '#fff', borderRadius: 28, padding: 24, border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', minHeight: 540 },
  chatHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 },
  chatTitle: { fontSize: 18, fontWeight: 900, color: '#111827' },
  chatMeta: { fontSize: 13, color: '#6B7280' },
  messageList: { flex: 1, display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto', paddingRight: 4 },
  assistantBubble: { alignSelf: 'flex-start', maxWidth: '85%', background: '#F8FAFF', borderRadius: '20px 20px 20px 4px', padding: '16px 18px', color: '#111827' },
  userBubble: { alignSelf: 'flex-end', maxWidth: '85%', background: '#111827', borderRadius: '20px 20px 4px 20px', padding: '16px 18px', color: '#fff' },
  messageText: { margin: 0, fontSize: 15, lineHeight: 1.7 },
  inputRow: { display: 'flex', gap: 12, marginTop: 24 },
  chatInput: { flex: 1, borderRadius: 16, border: '1px solid #E5E7EB', padding: '16px 18px', fontSize: 14, outline: 'none' },
  sendBtn: { background: '#2563EB', color: '#fff', borderRadius: 16, padding: '16px 24px', border: 'none', cursor: 'pointer', fontWeight: 700 },
};

export default ChatPage;
