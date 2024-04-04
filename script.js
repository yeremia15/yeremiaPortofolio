var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'><a href='mailto:yeremiayrobert@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/yeremia15'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/6281286717921'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> <a href='https://www.linkedin.com/in/yeremia-yosia/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/yere_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Yeremia Resume.pdf</label></div><a href='assets/yeremia_yosia_cv.pdf' download='yeremia_yosia_cv.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
// var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () {
        waitAndResponce(ti)
    }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Yeremia Yosia Robert</a>.</span><br><br>Currently, I am employed as an IT Project Coordinator at PT Electronic Data Interchange Indonesia (EDII) for handling project : <br> Maintenance and Enhancement of Customs Excise Information System Automation 4.0 (CEISA 4.0) with PROSPERA. <br><br>I have a strong passion for various aspects for the field of Information and Technologies<br><br>I am enthusiastic about pursuing a career that allows me to apply my knowledge and experiences while further expanding my skills in a dynamic and stable work environment. <br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'experiences'</span> - to get my experience details<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I can comfortably write code & queries using this following languages :<br><span class='bold'>Javascript<br>C++<br>PHP<br>Python<br>CSS<br>HTML<br>SQL</span><br><br>I've experience with following frameworks :<span class='bold'><br>CodeIgniter<br>Django<br>Bootstrap</span><br><br>Not only in the technical side, but also i had a lot of another skills, such as : <span class='bold'><br>Microsoft Office & Google Documents (Docs, Sheets, Slides)<br>Figma<br>BPMN<br>Diagram(Flowchart, EER, Sequence, etc)<br>Git, Github, Gitlab, Bitbucket<br>NGINX<br>Google Cloud Platform (Compute Engine, Storage, SQL, etc)<br>Project Management (Agile Method)<br>Scrum<br>Product Management</span><br><br>I usually use <span class='bold'>Windows OS</span> as daily driver on my own computer but also using <span class='bold'>Linux Ubuntu</span> too at some point in my laptop<br>OS: <span class='bold'>Windows 10</span> & <span class='bold'>Ubuntu 20</span><br>Favourite IDE: <span class='bold'>VSCode</span><br>Fav Database Administration Tools : <span class='bold'>MySQL & DBeaver</span></span>");
            break;

        case "experiences":
            sendTextMessage("PT Pegadaian<br>Location : Jakarta, Indonesia<br>Position : Scrum Master (Mar 2024 - Now)<br><br>PT Electronic Data Interchanges Indonesia (EDII)<br>Location : Jakarta, Indonesia<br>Position : IT Project Coordinator (Jun 2023 - Mar 2024)<br><br>PT TER Solusindo (AIMSIS)<br>Location : Jakarta, Indonesia<br>Position : <br>Project Manager (Feb 2022 - Jun 2023)<br>Support Engineer (Dec 2021 - Feb 2022)<br>System Consultant & TS (Aug 2020 - Dec 2021)");
            break;

        case "education":
            sendTextMessage("I already graduate from the University of Esa Unggul with a major in Information Systems from the Faculty of Computer Science<br>Passing Year : 2023<br>Result in GPA (IPK): 3.70/4.00");
            break;

            // case "address":
            //     sendTextMessage(addressString);
            //     break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript<br><br>👨🏻‍💻 Developed by <a class='alink' target='_blank' href='https://www.linkedin.com/in/yeremia-yosia/'><span class='bold'>Yeremia Yosia Robert</a></span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("As an IT Project Coordinator / IT Project Manager, of course i do manage and maintain some projects, and here is the detail about it : <br><br> PT EDI Indonesia<br>- Maintanance and Enhancement of Customs Excise Information System Automation (CEISA 4.0)<br><br>Tools: Jira, Google Document (Docs, Slides, Spreadsheet), Microsoft Office, Whatsapp, Gmeet/Zoom, Diagram.io<br><br>AIMSIS<br>- School Counseling System<br>- School HRIS System<br>- School Inventory System<br>- School Accounting System<br><br>Tools: Jira, Figma, Google Document (Docs, Slides, Spreadsheet), Microsoft Office, Notion, Diagram.io, Google Chat, Gmeet/Zoom, Google Cloud (Compute Engine, SQL, Storage, etc)<br><br><br>also, do you wanna check my technical projects? just jump into my Github Account for more details.<br><br><div class='social'><a target='_blank' href='https://github.com/yeremia15'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}