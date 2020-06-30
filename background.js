const buttonClicked = (tab) => { //Sends a message to the content script to tell it to run
	chrome.tabs.sendMessage(tab.id, "execute");
}

chrome.browserAction.onClicked.addListener(buttonClicked); //Listener to detect when button is clicked

