const containerEl = document.querySelector('.container');

const skills = ['YouTuber', 'Web Developer', 'Web Designer', 'Freelancer']
let skillsIndex = 0;
let charIndex = 0;
updateSkill();

function updateSkill() {
    
    containerEl.innerHTML = `
    <h1>I am a <span> ${skills[skillsIndex].slice(0, charIndex)}<span></h1>
    `;
    charIndex++;
    if(charIndex === skills[skillsIndex].length){
        skillsIndex++;
        charIndex = 0;
    }
    if(skillsIndex === skills.length){
        skillsIndex = 0
    }
    setTimeout(updateSkill, 300)

    
}