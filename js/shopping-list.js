/* AIBuildCalc — Copy Results / Shopping List
 * Adds a "Copy Results" button to calculator result sections.
 * Copies the calculator name, inputs, and results as a plain-text
 * shopping list the user can paste into notes, email, or SMS.
 */
(function () {
  'use strict';

  function buildList() {
    var lines = [];
    var title = document.querySelector('.tool-card-header h1');
    lines.push((title ? title.textContent.trim() : document.title) + ' — AIBuildCalc');
    lines.push(window.location.href);
    lines.push('');

    // Inputs
    var groups = document.querySelectorAll('.calc-form .form-group');
    if (groups.length) {
      lines.push('Inputs:');
      groups.forEach(function (g) {
        var label = g.querySelector('label');
        var input = g.querySelector('input, select');
        if (!label || !input) return;
        var name = label.textContent.replace(/\s+/g, ' ').trim();
        var value = input.tagName === 'SELECT'
          ? (input.options[input.selectedIndex] ? input.options[input.selectedIndex].text : input.value)
          : input.value;
        lines.push('  - ' + name + ': ' + value);
      });
      lines.push('');
    }

    // Results
    lines.push('Results:');
    var main = document.querySelector('.result-main');
    if (main) {
      var mLabel = main.querySelector('.result-label');
      var mValue = main.querySelector('.result-value');
      var mUnit = main.querySelector('.result-unit');
      lines.push('  - ' + [
        mLabel ? mLabel.textContent.trim() + ':' : '',
        mValue ? mValue.textContent.trim() : '',
        mUnit ? mUnit.textContent.trim() : ''
      ].join(' ').replace(/\s+/g, ' ').trim());
    }
    document.querySelectorAll('.result-detail').forEach(function (d) {
      var label = d.querySelector('.detail-label');
      var value = d.querySelector('.detail-value');
      var unit = d.querySelector('.detail-unit');
      lines.push('  - ' + [
        label ? label.textContent.trim() + ':' : '',
        value ? value.textContent.trim() : '',
        unit ? unit.textContent.trim() : ''
      ].join(' ').replace(/\s+/g, ' ').trim());
    });

    lines.push('');
    lines.push('Estimates only — verify with a professional before purchasing.');
    return lines.join('\n');
  }

  function copyText(text, btn) {
    function done(ok) {
      var original = btn.getAttribute('data-label') || btn.textContent;
      btn.setAttribute('data-label', original);
      btn.textContent = ok ? '✓ Copied!' : 'Copy failed';
      setTimeout(function () { btn.textContent = btn.getAttribute('data-label'); }, 2000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { /* noop */ }
      document.body.removeChild(ta);
      done(ok);
    }
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

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'copyResultsBtn';
    btn.textContent = '📋 Copy Results';
    btn.setAttribute('aria-label', 'Copy results to clipboard');
    btn.style.cssText = 'padding:9px 16px;border:1px solid #dadce0;border-radius:8px;background:#fff;color:#202124;font-size:14px;cursor:pointer;';
    btn.addEventListener('click', function () { copyText(buildList(), btn); });
    getActionBar(resultSection).appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
