const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");


let userMessage;
const inputIniHeight = chatInput.scrollHeight

const createChatLi =(message, className) =>{
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML= chatContent;
    chatLi.querySelector("p").textContent= message;
    return chatLi

}
const generateResposne = (incomingChatLi) =>{
    const API_URL = "https://chat-gtp-free.p.rapidapi.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers:{
            'content-type': 'application/json',
            'X-RapidAPI-Key': '3101ff6b7bmshbd9f1f8007c7038p12f80fjsn8e2035ff7097',
            'X-RapidAPI-Host': 'chat-gtp-free.p.rapidapi.com'
        },
        body: JSON.stringify({
            // "92d97036-3e25-442b-9a25-096ab45b0525"
            chatId: "9c5d4df3-4fa5-4104-95ef-e6b78aa959e9",
            // model: 'gpt-3.5-turbo',
            messages:[{role:'system',content:'Act as a world class Business Analyst helping user in his or her Business and guide them to write path , you have personality little playful and genz, your name is Gekko and you are a boy and if user ask question which are relevant to Business Analysis reply them in How a Business Analyst would answer.Important note keep all answer in short and unless and until user ask for in depth information'},
            {role: 'user', content: userMessage}]
        })  
    }

    fetch(API_URL,requestOptions).then (res =>res.json()).then(data =>{
        // messageElement.textContent= data.choices[0].message.content;
        // console.log(data);
        messageElement.textContent= data.text;
    }).catch((error)=>{
        messageElement.classList.add("error");
        messageElement.textContent= "Oops! Something went wrong. Please try again.";
    }).finally(()=> chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat=()=>{
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";
    chatInput.style.height= `${inputIniHeight}px`;

    chatbox.appendChild(createChatLi(userMessage,"outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() =>{
        const incomingChatLi = createChatLi("Thinking...","incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResposne(incomingChatLi);
    },600)
}

chatInput.addEventListener("input", ()=>{
    chatInput.computedStyleMap.height =`${inputIniHeight}px`;
    chatInput.computedStyleMap.height =`${chatInput.scrollHeight}px`;
})

chatInput.addEventListener("keydown", (e)=>{
    if(e.key ==="Enter" && !e.shiftKey && window.innerWidth > 800){
        e.preventDefault();
        handleChat();
    }
})

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click",() =>document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click",() =>document.body.classList.toggle("show-chatbot"));



/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	
})(jQuery); 