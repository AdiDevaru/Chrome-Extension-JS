const btn = document.querySelector('.colorChangeButton');

btn.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let title = tab.title;
    // console.log(title);
    document.getElementById('title').innerText = title;
});
