/**
 * ============================================================================
 * SANJEEV SENAPATI — DYNAMIC DATA LOADER & MARKDOWN PARSER
 * ============================================================================
 * Asynchronously loads content from data/timeline-data.json and parses Markdown syntax.
 */

/**
 * Lightweight inline Markdown parser for text fields
 */
function parseMarkdown(text) {
  if (!text) return '';
  
  let html = text
    // Bolding **text** or __text__
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    // Italics *text* or _text_
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    // Markdown Links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  return html;
}

/**
 * Asynchronously load timeline data from JSON
 */
async function loadPersonalData() {
  if (window.personalData && Object.keys(window.personalData).length > 0) {
    return window.personalData;
  }

  try {
    const response = await fetch('./data/timeline-data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    window.personalData = data;
    return data;
  } catch (error) {
    console.warn('Falling back to local data store due to fetch error:', error);
    return window.personalData || {};
  }
}

window.parseMarkdown = parseMarkdown;
window.loadPersonalData = loadPersonalData;
