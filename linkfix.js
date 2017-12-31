(function addFixLinkListeners() {
  const sitename = window.location.hostname.split(".")[1];
  const linkPrefix = `https://l.${sitename}.com/l.php?u=`;
  const linkSuffixRegex = /&h=.*$/;
  const linkHrefPrefixLength = linkPrefix.length;
  document.body.addEventListener("click", function checkAndSwitch(evt) {

    if (!evt.target.tagName ||
        evt.target.tagName !== "A" ||
        linkPrefix !== evt.target.href.slice(0, linkHrefPrefixLength)) {
      return;
    }

    const endIndex = evt.target.href.search(linkSuffixRegex);
    if (endIndex === -1) {
      return;
    }

    const newLink = decodeURIComponent(evt.target.href.slice(linkHrefPrefixLength,
                                                             endIndex));
    evt.target.href = newLink;
  });
})();
