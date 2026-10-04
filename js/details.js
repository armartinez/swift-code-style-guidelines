// Collapsible rule details, like the API Design Guidelines page on swift.org.
// Each rule's explanation and examples are in a <details class="more"> element.
(function () {
  var details = document.querySelectorAll('details.more');
  var button = document.getElementById('toggle-details');

  function setAll(open) {
    for (var i = 0; i < details.length; i++) {
      details[i].open = open;
    }
  }

  function allOpen() {
    for (var i = 0; i < details.length; i++) {
      if (!details[i].open) {
        return false;
      }
    }
    return true;
  }

  function updateButton() {
    if (button) {
      button.textContent = allOpen() ? 'Collapse all details now' : 'Expand all details now';
    }
  }

  if (button) {
    button.addEventListener('click', function () {
      setAll(!allOpen());
      updateButton();
    });
  }

  for (var i = 0; i < details.length; i++) {
    details[i].addEventListener('toggle', updateButton);
  }

  // ?expand=true opens every rule, as on swift.org.
  if (/[?&]expand=true\b/.test(location.search)) {
    setAll(true);
    updateButton();
  }

  // Details are never hidden on paper: open everything while printing, then
  // restore what the reader had open.
  var openBeforePrint = null;
  window.addEventListener('beforeprint', function () {
    openBeforePrint = [];
    for (var i = 0; i < details.length; i++) {
      openBeforePrint.push(details[i].open);
    }
    setAll(true);
  });
  window.addEventListener('afterprint', function () {
    if (!openBeforePrint) {
      return;
    }
    for (var i = 0; i < details.length; i++) {
      details[i].open = openBeforePrint[i];
    }
    openBeforePrint = null;
    updateButton();
  });
})();
