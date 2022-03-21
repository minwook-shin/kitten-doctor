function save_options() {
    var exclude_small_img = document.getElementById('exclude_small_img').checked;
    chrome.storage.sync.set({ exclude_small_img: exclude_small_img }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Saved.';
    });
}

function restore_options() {
    chrome.storage.sync.get({ exclude_small_img: true }, function (items) {
        document.getElementById('exclude_small_img').checked = items.exclude_small_img;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('option_save').addEventListener('click', save_options);
