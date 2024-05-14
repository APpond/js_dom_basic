// DOM Manipulation

// Step 1: Access Elements
// getElementById --> That Element
// getElementsByClassName --> HTMLCollection
// getElementsByTagName --> HTMLCollection
// querySelector --> First Element
// querySelectorAll --> NodeList --> .forEach()

// Step 2A: Manipulate Elements
// Step 2B: Respond to Events:

function changeHeading() {
	// const mainHeadingEl = document.getElementById("main-heading");
	// console.log(mainHeadingEl);

	const mainHeadingEl = document.querySelector("#main-heading");

	mainHeadingEl.innerHTML = `<span>Hello JS DOM 😎</span>`;
	mainHeadingEl.style.fontSize = "3rem";
	mainHeadingEl.style.fontWeight = "bold";
	mainHeadingEl.style.color = "red";
}

function changeParagraphs() {
	const contentEl = document.getElementsByClassName("content");
	// console.log(contentEl);
	const contents = Array.from(contentEl);

	// const paragraphs = document.getElementsByTagName("p");
	// console.log(paragraphs);
	// let contents = Array.from(paragraphs);

	// const contents = document.querySelectorAll(".content");
	// console.log(contents);

	contents.forEach((paragraph, index) => {
		paragraph.textContent = `This is paragraph ${index + 1}`;
		paragraph.classList.add("font-bold");
		paragraph.classList.add("text-2xl");
		paragraph.classList.add("text-white");
		paragraph.classList.add("bg-blue-500");
		paragraph.classList.add("py-4");
		paragraph.classList.add("px-12");
		paragraph.classList.remove("text-gray-800");
		paragraph.classList.remove("bg-slate-200");
	});
}

// handle magic button (2 ways of coding)

// 1. call function method
/* function handleMagicBtn() {
	const magicBtnEl = document.querySelector("#magic-btn");
	magicBtnEl.addEventListener("click", changeHeading);
}
handleMagicBtn(); */

// 2. onClick method
function magicBtnClick() {
	const magicBtnEl = document.querySelector("#magic-btn");

	changeHeading();

	// changeParagraphs();
}

// handle reset button by relaoding page
function reloadPage() {
	// reload the current page
	window.location.reload();
}

function resetBtnClick() {
	const resetBtnEl = document.querySelector("#reset-btn");
	resetBtnEl.addEventListener("click", reloadPage);
}
resetBtnClick();
