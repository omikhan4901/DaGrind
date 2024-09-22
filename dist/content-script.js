chrome.storage.sync.get(["dagrind_enable"]).then((res) => {
  if (res.dagrind_enable) {
    chrome.storage.sync.get(["dagrind_list"]).then((res) => {
      if (
        res.dagrind_list.some((e) => {
          return location.href.toLowerCase().includes(e[0].toLowerCase() + ".com") && e[1];
        })
      ) {
        alert("Redirecting in a bit!!");
        if (location.href !== "https://www.google.com/") {
          location.replace("https://www.google.com/");
        }
      }
    });
  }
});
