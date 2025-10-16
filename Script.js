javascript:(()=>{
  const link=document.createElement('link');
  link.href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
  link.rel='stylesheet';
  document.head.appendChild(link);

  const estilo=document.createElement('style');
  estilo.textContent='*{font-family:"Press Start 2P", monospace !important;font-size:12px !important;line-height:1.5 !important;}';
  document.head.appendChild(estilo);

  alert('Fonte estilo Minecraft aplicada.');
})();
