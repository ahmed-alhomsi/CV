let currentPage = document.getElementById('page-num');
let btnTxt = document.getElementById('btn-text');
const btn = document.getElementById('btn');
let changeContent = document.getElementById('change-me');

btn.addEventListener('click',()=>{
    if(parseInt(currentPage.textContent) === 1){
    console.log(changeContent);
        currentPage.textContent = 2;
        btnTxt.textContent = 'Previous Page';
        changeContent.innerHTML = `<section class="hobbies-div">
        <h2>HOBBIES</h2>
        <p>
            I like
            reading in my spare time and on my way home
            from university, since my university is a bit faraway from my home(usually 1.5-2 hours of commute), I like taking full advantage of the little time we have on this world, I think reading definitely opens up
            the mind to different possibilities and new
            ways of thinking, So I try to do as much of that as I can.
        </p>
        </section>
        <section class="education-section">
        <h2>EDUCATION</h2>
        <div class="education-div">
            <h3 class="date">9 / 2020</h3>
            <h3 class="degree-details">Arab international university</h3>
        </div>
        </section>
        <section class="skills-section">
        <h1>SKILLS</h1>
        <div class="skills-div">
            <div class="skills-imgs">
                <img class="html" src="img/logo_html.png">
                <img class="css" src="img/logo_css.png">
                <img class="javascript" src="img/javascript-39394.png">
            </div>
            <div class="skills">
                <h3 class="html-h3">HTML</h3>
                <h3 class="css-h3">CSS</h3>
                <h3 class="js-h3">JAVASCRIPT</h3>
            </div>
        </div>
        </section>
        <section class="languages-section">
        <h2>LANGUAGES</h2>
        <div class="languages-div">
            <ul>
                <li>English</li>
                <li>German</li>
            </ul>
            <ul>
                <li>Advanced (C2)</li>
                <li>Beginner</li>
            </ul>
        </div>
        </section>
        <section class="portfolio-link">
        <h2><a class="portfolio-link" href="" target="_blank">Portfolio</a></h2>
        </section>`;
    } else {
        currentPage.textContent = 1;
        btnTxt.textContent = 'Next Page';
        changeContent.innerHTML = `<section class="about-section">
        <h2>ABOUT</h2>
        <p>
            My name is ahmed, currently studying
            computer science and I am in my second year
            of university. My English level is C2-Advanced
            according to New Horizons Language center. I
            started learning html, css and javascript before
            starting university, currently looking for a job/paid 
            Intetship.
        </p>
    </section>
    <section class="what-lead-me-here-section">
        <h2>WHAT LEAD ME HERE</h2>
        <p> 
            Ever since I
            was a child I was fascinated by computers and the things they are able to do, I would get on
            the computer and play a videogame and have
            fun on it, as the days went by, i got more and more attached to computers, at that time however, my English wasn't good, since I was just a child, 
            so I set the goal as a child to learn English perfectly so I can play videogames and use computers without any problems, as the months and years went by, I found myself able to learn English and use it all on my own, and that was the first big milestone, with that I was also able to enter the field of tech taking any and all courses I needed and using all the resources I got online, currently I am still working on becoming the best programmer and the best version of myself that I could be, I am loving the path I took, and I am looking forward to all the interesting and fun people and experiences that share similar goals, people who wanna leave a good mark on this earth
        </p>
    </section>`;
    }
});