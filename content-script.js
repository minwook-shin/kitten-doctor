NAME = "does not exist."
chrome.storage.sync.get(['key'], function (result) {
    if (result.key) {
        NAME = result.key
    }
})

var body_block = document.querySelector('body')

setTimeout(() => {
    if (body_block.textContent.includes(NAME) && !body_block.textContent.includes("시작페이지로")) {
        for (let image of document.querySelectorAll('img, picture, figure')) {
            const width = image.offsetWidth
            const height = image.offsetHeight
            image.src = "https://placekitten.com/g/$width/$height".replace("$width", String(width)).replace("$height", String(height))
        }
    }
}, 10)