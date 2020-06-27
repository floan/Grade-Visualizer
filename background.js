const buttonClicked = (tab) => {
	chrome.tabs.sendMessage(tab.id, "execute");
}

chrome.browserAction.onClicked.addListener(buttonClicked);

