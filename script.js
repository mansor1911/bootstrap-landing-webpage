
function switchLang() {
    if (window.location.href.includes("index.html")) {
        window.location.href = "index-rtl.html";
        
    }
    else {
            window.location.href = "index.html";
        }
    }
