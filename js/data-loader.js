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
 * Calculate dynamic metric values (age, marriage duration, children count, cities)
 */
function calculateMetrics(data) {
  const currentYear = new Date().getFullYear();
  const techStartYear = 2004;

  const dobStr = data?.identity?.dateOfBirth || "1982-03-21";
  const dobParts = dobStr.split('-').map(Number);
  const now = new Date();
  let age = now.getFullYear() - dobParts[0];
  const m = (now.getMonth() + 1) - dobParts[1];
  if (m < 0 || (m === 0 && now.getDate() < dobParts[2])) {
    age--;
  }

  const weddingStr = data?.loveAndMarriage?.marriage?.weddingDate || "2013-03-04";
  const wedParts = weddingStr.split('-').map(Number);
  let marriageYears = now.getFullYear() - wedParts[0];
  const wm = (now.getMonth() + 1) - wedParts[1];
  if (wm < 0 || (wm === 0 && now.getDate() < wedParts[2])) {
    marriageYears--;
  }

  const childrenCount = data?.loveAndMarriage?.children?.length || 2;
  const citiesCount = 6;
  const techYears = currentYear - techStartYear;

  return {
    age: age || 44,
    marriageYears: `${marriageYears || 13}+`,
    marriageYearsNum: marriageYears || 13,
    childrenCount: childrenCount,
    citiesCount: citiesCount,
    techYears: `${techYears}+`
  };
}

/**
 * Asynchronously load timeline data from JSON with fallback to window.personalData
 */
async function loadPersonalData() {
  if (window.personalData && Object.keys(window.personalData).length > 0) {
    if (!window.personalData.getMetrics) {
      window.personalData.getMetrics = () => calculateMetrics(window.personalData);
    }
    return window.personalData;
  }

  try {
    const response = await fetch('./data/timeline-data.json');
    if (response.ok) {
      const data = await response.json();
      window.personalData = data;
    }
  } catch (error) {
    console.warn('Falling back to local data store due to fetch error:', error);
  }

  const data = window.personalData || {};
  if (!data.getMetrics) {
    data.getMetrics = () => calculateMetrics(data);
  }
  return data;
}

window.parseMarkdown = parseMarkdown;
window.calculateMetrics = calculateMetrics;
window.loadPersonalData = loadPersonalData;
