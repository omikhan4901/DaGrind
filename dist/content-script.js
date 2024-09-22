chrome.storage.sync.get(["dagrind_enable"]).then((res) => {
  if (res.dagrind_enable) {
    chrome.storage.sync.get(["dagrind_list"]).then((res) => {
      if (
        res.dagrind_list.some((e) => {
          return (
            location.href.toLowerCase().includes(e[0].toLowerCase() + ".com") &&
            e[1]
          );
        })
      ) {
        if (location.href !== "https://www.google.com/") {
          setTimeout(() => {
            chrome.runtime.sendMessage({ closeThis: true });
          }, 3000);
          alert("💡 Stop loosing focus! 💡\nClosing this tab in 3 seconds.");
        }
      }
    });
  }
});
