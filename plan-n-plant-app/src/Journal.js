import React, { useState } from 'react';

const JournalEntry = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { date, title, entry };
    setJournalEntries([...journalEntries, newEntry]);
    setDate('');
    setTitle('');
    setEntry('');
  }

  return (
    <div className="journal">
      <h1>My Journal</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
          Entry:
          <textarea className="text-box" value={entry} onChange={(event) => setEntry(event.target.value)} />
        </label>
        <button type="submit">Add Entry</button>
      </form>
      <h2>Journal Entries:</h2>
      <ul>
        {journalEntries.map((entry, index) => (
          <li key={index}>
            <h3>{entry.title}</h3>
            <p>{entry.date}</p>
            <p>{entry.entry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JournalEntry;