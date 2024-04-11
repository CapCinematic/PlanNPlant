import React, { useState } from "react";
import PropTypes from "prop-types";

const JournalEntry = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { date, title, entry };
    setJournalEntries([...journalEntries, newEntry]);
    setDate("");
    setTitle("");
    setEntry("");
  };

  return (
    <div className="journal">
      <h3>My Journal</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Entry:
          <textarea
            className="text-box"
            value={entry}
            onChange={(event) => setEntry(event.target.value)}
          />
        </label>
        <button className='submit-button'type="submit">Add Entry</button>
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
};

JournalEntry.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  entry: PropTypes.string,
  journalEntries: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func,
};
export default JournalEntry;
