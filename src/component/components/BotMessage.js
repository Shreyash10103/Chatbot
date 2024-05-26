import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './BotMessage.css'; // Import CSS file for styling

export default function BotMessage({ message, table, code }) {
  return (
    <div className="message-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeSSFghwp9L48qzh_glmt-Sg4uo5mx5CTe9NyLWprFQ&s"
        alt="Bot"
        className="bot-image"
      />
      <div className="bot-message">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {`${message}\n`}
        </ReactMarkdown>
        {code ? <div className="code-container">
          <CopyToClipboard text={code}>
            <button>Copy</button>
          </CopyToClipboard>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {code}
          </ReactMarkdown>
        </div> : ""}

        <div className="table-container">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {table}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
