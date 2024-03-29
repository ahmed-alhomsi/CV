let currentPage = document.getElementById('page-num');
let btnTxt = document.getElementById('btn-text');
const btn = document.getElementById('btn');
let changeContent = document.getElementById('change-me');

btn.addEventListener('click',()=>{
    if(parseInt(currentPage.textContent) === 1){
        currentPage.textContent = 2;
        btnTxt.textContent = 'Previous Page';
        changeContent.innerHTML = `
        <section class="languages-section">
            <h2>LANGUAGES</h2>
            <div class="languages-div">
                <ul class="languages">
                    <li>Arabic</li>
                    <li>English</li>
                    <!-- <li>German</li> -->
                </ul>
                <ul>
                    <li>  |  </li>
                    <li>  |  </li>
                    <!-- <li>  |  </li> -->
                </ul>
                <ul class="level">
                    <li>Native</li>
                    <li>Advanced / Fluent</li>
                    <!-- <li>Beginner</li> -->
                </ul>
            </div>
        </section>

        <section class="what-lead-me-here-section">
        <h2>WHAT LEAD ME HERE</h2>
        <p> 
            Ever since I
            was a child I was fascinated by computers and the things they are able to do, I would get on
            the computer and play a videogame and have
            fun on it, as the days went by, I got more and more attached to computers, before I went into university I started taking courses in web development, currently I am still working on becoming the best programmer I can be, I am looking forward to all the interesting and fun experiences and people that share similar goals, people who want to leave a good mark on this earth.
        </p>
        </section>
        `;
    } else {
        currentPage.textContent = 1;
        btnTxt.textContent = 'Next Page';
        changeContent.innerHTML = `
                    <section class="objective-section">
                        <h2>Objective</h2>
                        <p>
                            Pursuing a job as a front end web developer through my acquired knowledge of html, css and the popular javascript framework (React).
                        </p>
                    </section>
                    
                    <section class="education-section">
                        <h2>EDUCATION</h2>
                        <div class="education-div">
                            <h3 class="date">9 / 2020 - till now</h3>
                            <h3 class="degree-details">Arab International University (AIU) <br> bachelor's degree information technology</h3>
                        </div>
                    </section>

                    <section class="experience-section">
                        <h2>Experience</h2>
                        <div>
                            <h3>Half a year of Experience working at OTOM8 (automate)</h3>
                            <!-- <p>Worked on different projects, like building Static webpages for clients (HTML + CSS +
                                vanilla Javascript), and also building projects using the headless CMS tool Directus,
                                buidling dashboards for clients and automating systems.</p> -->
                            <ul>
                                <h3>Some Main Tasks:</h3>
                                <li>Buidling Directus Dashboards (like Ejet Elkahraba System Automation Dashboard)</li>
                                <li>Building Static Webpages and Websites</li>
                                <!-- <li>Building Wordpress Sites (like Chatila ecommerce shop)</li> -->
                            </ul>
                        </div>
                    </section>

                    <section class="skills-section">
                        <h1>SKILLS</h1>
                        <div>

                            <div class="skills-icons-div">

                                <div>
                                    <img src="img/logo_html.png">
                                    <h3>HTML</h3>
                                </div>

                                <div>
                                    <img src="img/logo_css.png">
                                    <h3>CSS</h3>
                                </div>

                                <div>
                                    <img src="img/javascript-39394.png">
                                    <h3>JAVASCRIPT</h3>
                                </div>

                            </div>

                            <div class="skills-icons-div">


                                <div>
                                    <img src="img/react logo.png">
                                    <h3>React</h3>
                                </div>


                                <div>
                                    <img src="img/directus logo.png" alt="">
                                    <h3>Directus</h3>
                                </div>
                            </div>

                        </div>

                    </section>
                        `;
    }
});