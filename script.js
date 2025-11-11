// Smooth link behavior for anchors and small UI interactions
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', e=>{
    // Let it follow normal navigation for multi-page; for same-page anchors, smooth scroll
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
    }
  });
});
