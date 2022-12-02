function sharePage() {
    if(chrome.tabs) {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.create({
                url: "https://oculus.com/open_url/?url=" + tabs[0].url,
            })
        })
    } else {
        console.log("Sharing in dev mode")
        window.location.href = "https://oculus.com/open_url/?url=" + encodeURIComponent(window.location.href)
    }

    return true
}

document.getElementById("share").addEventListener("click", sharePage)
