// Yara KPI Card — Looker Studio Community Visualization
// Renders a single branded scorecard with label, value, accent border, and sub-caption.
// Data flows in from Looker; styling comes from style config + this file's CSS.

const dscc = require('@google/dscc');

function drawViz(data) {
  // --- Pull data from Looker ---
  const row = (data.tables && data.tables.DEFAULT && data.tables.DEFAULT[0]) || {};
  const label = (row.labelField && row.labelField[0]) || 'Metric';
  const rawValue = (row.metricValue && row.metricValue[0]) || 0;
  const valueFormatted = Number(rawValue).toLocaleString('en-US');

  // --- Pull style config (with defaults if not yet configured) ---
  const styleById = ((data.style || {})) || {};
  const accentColor =
    (styleById.accentColor && styleById.accentColor.value && styleById.accentColor.value.color) ||
    (styleById.accentColor && styleById.accentColor.defaultValue && styleById.accentColor.defaultValue.color) ||
    '#A78BFA';
  const valueColor =
    (styleById.valueColor && styleById.valueColor.value && styleById.valueColor.value.color) ||
    (styleById.valueColor && styleById.valueColor.defaultValue && styleById.valueColor.defaultValue.color) ||
    '#0D1B2A';
  const subCaption =
    (styleById.subCaption && styleById.subCaption.value) ||
    (styleById.subCaption && styleById.subCaption.defaultValue) ||
    '';

  // --- Clear and render ---
  document.body.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'yara-kpi-card';
  card.style.borderTopColor = accentColor;

  const labelEl = document.createElement('div');
  labelEl.className = 'yara-kpi-label';
  labelEl.textContent = label;

  const valueEl = document.createElement('div');
  valueEl.className = 'yara-kpi-value';
  valueEl.style.color = valueColor;
  valueEl.textContent = valueFormatted;

  card.appendChild(labelEl);
  card.appendChild(valueEl);

  if (subCaption) {
    const captionEl = document.createElement('div');
    captionEl.className = 'yara-kpi-caption';
    captionEl.textContent = subCaption;
    card.appendChild(captionEl);
  }

  document.body.appendChild(card);
}

// Subscribe to data updates from Looker Studio.
// objectTransform delivers data as a nested object keyed by field id.
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
