BAD_WORD = ""
chrome.storage.sync.get(['kitten_doctor_word'], function (result) {
    if (result.kitten_doctor_word) {
        BAD_WORD = result.kitten_doctor_word
    }
})

setTimeout(() => {
    if (BAD_WORD || BAD_WORD != "") {
        var body_block = document.querySelector('body')
        var body_block_node = body_block.cloneNode(true);
        if (body_block_node.textContent.includes(BAD_WORD)) {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(BAD_WORD, "g"), "*".repeat(BAD_WORD.length));
            for (let image of document.querySelectorAll('img')) {
                const width = image.offsetWidth
                const height = image.offsetHeight
                if (width <= 128 || height <= 128) {
                    continue
                }
                // https://placekitten.com/attribution.html 
                // image=3 Public Domain
                image.src = "https://placekitten.com/$width/$height?image=3".replace("$width", String(width)).replace("$height", String(height))
            }
        }
    }
}, 100)
