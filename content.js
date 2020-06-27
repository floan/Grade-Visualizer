console.log("Chrome Extension Ready to Go!")

let gradeArray = [];

const getGrades = () =>{
	let ratingBox = document.getElementsByClassName("MetaItem__StyledMetaItem-y0ixml-0 bxqwYh");
	gradeArray = [];
	for(let i=0; i<ratingBox.length; i++){
		if(ratingBox[i].textContent.includes("Grade")){
			gradeArray.push(ratingBox[i].children[0].textContent);
		}
	}
	console.log(gradeArray);
	console.log('Function is called!!!')
}

const gotMessage = (message, sender, sendResponse) => {
	if(message === "execute"){
		getGrades(); 
	}
}

chrome.runtime.onMessage.addListener(gotMessage);
