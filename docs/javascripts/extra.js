var link = document.createElement("link");
link.rel = "icon";
var svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24"><g><g transform="rotate(360)" transform-origin="12 12"><path d="M12 12Z" fill="none" stroke="#b388ff" stroke-width="4" stroke-linecap="round"></path></g></g><g><g transform="rotate(0)" transform-origin="12 12"><path d="M 21.510565162951536 8.909830056250526 A 10 10 0 0 0 12 6" fill="none" stroke="#aeea00" stroke-width="4"></path></g><g transform="rotate(72)" transform-origin="12 12"><path d="M 21.510565162951536 8.909830056250526 A 10 10 0 0 0 12 6" fill="none" stroke="#ff1744" stroke-width="4"></path></g><g transform="rotate(144)" transform-origin="12 12"><path d="M 21.510565162951536 8.909830056250526 A 10 10 0 0 0 12 6" fill="none" stroke="#d500f9" stroke-width="4"></path></g><g transform="rotate(216)" transform-origin="12 12"><path d="M 21.510565162951536 8.909830056250526 A 10 10 0 0 0 12 6" fill="none" stroke="#ffab00" stroke-width="4"></path></g><g transform="rotate(288)" transform-origin="12 12"><path d="M 21.510565162951536 8.909830056250526 A 10 10 0 0 0 12 6" fill="none" stroke="#00b0ff" stroke-width="4"></path></g><g transform="rotate(72)" transform-origin="12 12"><path d="M12.59 5.88Z" fill="none" stroke="#aeea00" stroke-width="4.2" stroke-linecap="round"></path></g><g transform="rotate(144)" transform-origin="12 12"><path d="M12.59 5.88Z" fill="none" stroke="#ff1744" stroke-width="4.2" stroke-linecap="round"></path></g><g transform="rotate(216)" transform-origin="12 12"><path d="M12.59 5.88Z" fill="none" stroke="#d500f9" stroke-width="4.2" stroke-linecap="round"></path></g><g transform="rotate(288)" transform-origin="12 12"><path d="M12.59 5.88Z" fill="none" stroke="#ffab00" stroke-width="4.2" stroke-linecap="round"></path></g><g transform="rotate(360)" transform-origin="12 12"><path d="M12.59 5.88Z" fill="none" stroke="#00b0ff" stroke-width="4.2" stroke-linecap="round"></path></g></g></svg>';
link.href = "data:image/svg+xml," + encodeURIComponent(svg);
document.head.appendChild(link);
