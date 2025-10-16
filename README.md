# Minecraft Font Bookmarklet

Este bookmarklet transforma todas as fontes de qualquer site no estilo pixelado do Minecraft.

## 🧱 Como funciona
Ele injeta dinamicamente uma folha de estilo que altera a família de fonte de todos os elementos da página para **"Press Start 2P"**, uma fonte do Google Fonts com visual idêntico ao usado no Minecraft.

## 💡 Uso
1. Copie o código abaixo.
2. Crie um novo favorito no seu navegador.
3. Cole o código no campo de URL.
4. Acesse qualquer site e clique no favorito.

```js
javascript:(function(){var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";document.head.appendChild(l);var s=document.createElement("style");s.innerHTML="*{font-family:'Press Start 2P',monospace !important;font-size:12px !important;letter-spacing:0 !important;line-height:1.4 !important;}";document.head.appendChild(s);alert('Fonte no estilo Minecraft aplicada!');})();
