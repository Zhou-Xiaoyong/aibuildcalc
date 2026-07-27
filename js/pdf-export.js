/* AIBuildCalc — Print / Save as PDF
 * Adds a "Print / Save PDF" button to calculator result sections
 * and injects print-friendly styles (hides nav, ads, sidebar, footer).
 */
(function () {
  'use strict';

  var PRINT_CSS = [
    '@media print {',
    '  .site-header, .breadcrumb, .sidebar, .site-footer,',
    '  .ad-inline, .ad-slot, .mobile-menu-btn,',
    '  .btn-calculate, .btn-reset, #calcActionBar,',
    '  .ai-insights, .related-tools, .faq-item { display: none !important; }',
    '  .page-container { display: block !important; }',
    '  .main-content { width: 100% !important; }',
    '  body { background: #fff !important; }',
    '  .result-section { display: block !important; box-shadow: none !important; }',
    '  a[href]:after { content: ""; }',
    '}'
  ].join('\n');

  function injectPrintCss() {
    if (document.getElementById('printExportCss')) return;
    var style = document.createElement('style');
    style.id = 'printExportCss';
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
  }

  function getActionBar(resultSection) {
    var bar = document.getElementById('calcActionBar');
    if (bar) return bar;
    bar = document.createElement('div');
    bar.id = 'calcActionBar';
    bar.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;';
    resultSection.appendChild(bar);
    return bar;
  }

  function init() {
    var resultSection = document.getElementById('resultSection');
    if (!resultSection) return;
    injectPrintCss();

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'printPdfBtn';
    btn.textContent = '🖨️ Print / Save PDF';
    btn.setAttribute('aria-label', 'Print or save results as PDF');
    btn.style.cssText = 'padding:9px 16px;border:1px solid #dadce0;border-radius:8px;background:#fff;color:#202124;font-size:14px;cursor:pointer;';
    btn.addEventListener('click', function () { window.print(); });
    getActionBar(resultSection).appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
