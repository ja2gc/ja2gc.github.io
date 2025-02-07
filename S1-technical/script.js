let colortheme = 1;

function changeColor() {
    const resume = document.getElementById("resume");

    const colors = [
        { background: "white", text: "black" },         
        { background: "#333333", text: "#f8f9fa" },    
        { background: "#5d1708", text: "#ffffff" },      
    ];
    if (colortheme === 0) {
        resume.style.backgroundColor = colors[0].background;
        resume.style.color = colors[0].text; 
        colortheme = 1;
    } 
    else if (colortheme === 1) {
        resume.style.backgroundColor = colors[1].background;
        resume.style.color = colors[1].text;
        colortheme = 2;
    } 
    else if (colortheme === 2) {
        resume.style.backgroundColor = colors[2].background;
        resume.style.color = colors[2].text;
        colortheme = 0;
    }

    const textElements = resume.querySelectorAll('*');
    textElements.forEach(element => {
        element.style.color = resume.style.color;
    });
}
