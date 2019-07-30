function trackDownload(source) {
  gtag('event', 'Download', {
    'event_category' : 'File',
    'event_label' : 'Bidbar.zip - ' + source
  });
}