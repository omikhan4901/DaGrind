chrome.storage.sync.get(["dagrind_enable"]).then((res) => {
  if (res.dagrind_enable) {
    console.log("Enabled")
    chrome.storage.sync.get(["dagrind_list"]).then((res) => {
      if (
        // Checking if the site is on the list and the blocking is enabled
        res.dagrind_list.some((e) => {
          console.log(e[0])
          return (
            location.href.toLowerCase().includes(e[0].toLowerCase()) &&
            e[1]
          )
        })
      ) {
        alert("💡 Stop loosing focus! 💡\nClosing this tab in 5 seconds.");
          setTimeout(() => {
            // Sending a message to the background service worker to close the window.
            chrome.runtime.sendMessage({ closeThis: true });
          }, 5000);
      }
    });
  }
});
