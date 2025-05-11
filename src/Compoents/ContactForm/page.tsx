'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    alert(data.success ? 'Message sent!' : 'Failed to send.');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <textarea
        className="p-2 border rounded"
        placeholder="Your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Send
      </button>
    </form>
  );
}