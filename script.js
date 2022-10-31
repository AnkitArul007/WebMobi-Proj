const list = document.querySelector(".list");
const sidebar = document.getElementById("sidebar");
const rightbar = document.getElementById("rightbar");
const main = document.getElementById("main");

list.addEventListener("click", ()=>{
    sidebar.classList.toggle("translate");
    rightbar.classList.toggle("translateX");
});

const range = document.createRange();
const home = `
<div class="home-wrapper">
<div class="headers">
    <span class="material-symbols-outlined">
        home
    </span>
    <h2>Home</h2>
</div>
<div class="social-info">
    <div class="social-info-lists">
        <span class="material-symbols-outlined">
            favorite
        </span>
        <p>Total likes</p>
        <h2>50,120</h2>
    </div>

    <div class="social-info-lists">
        <span class="material-symbols-outlined">
            comment
        </span>
        <p>Comments</p>
        <h2>20,220</h2>
    </div>

    <div class="social-info-lists">
        <span class="material-symbols-outlined">
            share
        </span>
        <p>Total shares</p>
        <h2>10,320</h2>
    </div>
</div>

<div class="headers">
    <span class="material-symbols-outlined">
        history
    </span>
    <h2>Recent activity</h2>
</div>

<div class="tables">
    <table>
        <tr class="rows">
            <th>Name</th>
            <th>Email</th>
            <th>Joined</th>
            <th>Type</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>Prem Shahi</td>
            <td>premshahi@gmail.com</td>
            <td>2022-02-12</td>
            <td>New</td>
            <td>Liked</td>
        </tr>
        <tr>
            <td>Deepa Chand</td>
            <td>deepachand@gmail.com</td>
            <td>2022-02-12</td>
            <td>Member</td>
            <td>Liked</td>
        </tr>
        <tr>
            <td>Manisha Chand</td>
            <td>manishachand@gmail.com</td>
            <td>2022-02-13</td>
            <td>Member</td>
            <td>Liked</td>
        </tr>
        <tr>
            <td>Ankit Arul</td>
            <td>ankitarul@gmail.com</td>
            <td>2022-02-11</td>
            <td>Member</td>
            <td>Liked</td>
        </tr>
        <tr>
            <td>Shiv</td>
            <td>shiv@gmail.com</td>
            <td>2022-02-12</td>
            <td>New</td>
            <td>Liked</td>
        </tr>
    </table>
</div>
</div>
`;
const docFrag = range.createContextualFragment(home);
main.appendChild(docFrag);


const events = `
<div class="wrapper">
                        <div class="components">
                            <h2>Events</h2>
                            <ul>
                                <li class="components-list">
                                    general
                                </li>
                                <li class="components-list">
                                    privacy
                                </li>
                                <li class="components-list">
                                    features
                                </li>
                                <li class="components-list">
                                    customisations
                                </li>
                                <li class="components-list">
                                    integration
                                </li>
                                <li class="components-list">
                                    session settings &emsp; 
                                    <span class="material-symbols-outlined">
                                        lock
                                    </span>
                                </li>
                                <li class="components-list">
                                    my plans
                                </li>
                            </ul>
                        </div>
                
    
                
        
                    <div class="main-body-content">
                        <div class="features">
                            <div class="features-head">
                                <span class="material-symbols-outlined">
                                    forum
                                </span>
                                <h2>audience q&a</h2>
                                <div id="toggle">
                                    <div id="inner-toggler-btn"></div>
                                </div>
                                <span class="material-symbols-outlined down_arrow">
                                    expand_more
                                </span>
                            </div>
        
                            <div class="expanded-features">
                                <div class="features-list">
                                    <div class="child-wrap-first">
                                        <h3>moderation</h3>
                                        <p>Easily review all questions before they go live.</p>
                                    </div>
                                    <div class="child-wrap-toggler">
                                        <div class="inner-child-wrap-toggler"></div>
                                    </div>
                                </div>
        
                                <div class="features-list">
                                    <div class="child-wrap-first">
                                        <h3>labels</h3>
                                        <p>Categorize and filter questions.</p>
                                    </div>
                                    <div class="child-wrap-toggler">
                                        <div class="inner-child-wrap-toggler"></div>
                                    </div>
                                </div>
        
                                <div class="features-list">
                                    <div class="child-wrap-first">
                                        <h3>downvotes</h3>
                                        <p>Enable downvoting of questions.</p>
                                    </div>
                                    <div class="child-wrap-toggler">
                                        <div class="inner-child-wrap-toggler"></div>
                                    </div>
                                </div>
        
                                <div class="features-list">
                                    <div class="child-wrap-first">
                                        <h3>replies</h3>
                                        <p>Allow participants to reply to or comment on questions.</p>
                                    </div>
                                    <div class="child-wrap-toggler">
                                        <div class="inner-child-wrap-toggler"></div>
                                    </div>
                                </div>
        
                                <div class="features-list">
                                    <div class="child-wrap-first">
                                        <h3>anonymous questions</h3>
                                        <p>Let your participants send anonymous qustions.</p>
                                    </div>
                                    <div class="child-wrap-toggler">
                                        <div class="inner-child-wrap-toggler"></div>
                                    </div>
                                </div>
        
                                <div class="features-list">
                                    <div class="child-wrap-first">
                                        <h3>maximum questions length</h3>
                                        <p>Show number of votes instead of percentage.</p>
                                    </div>
                                    <div class="child-wrap-toggler">
                                        <div class="inner-child-wrap-toggler"></div>
                                    </div>
                                </div>
        
                                <div class="features-list">
                                    <div class="child-wrap-first">
                                        <h3>close questions</h3>
                                        <p>Prevent the participants from serding new questions to your event.</p>
                                    </div>
                                    <div class="child-wrap-toggler">
                                        <div class="inner-child-wrap-toggler"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <span class="material-symbols-outlined cross">
                            cancel
                        </span>
        
                    </div>
                    </div>
`;

const docFrag2 = range.createContextualFragment(events);
main.appendChild(docFrag2);

const homewrapper = document.querySelector(".home-wrapper");
const wrapper = document.querySelector(".wrapper");


const teams = `
    <div class="teams">
        <div class="teams-header">
            <span class="material-symbols-outlined">
                groups
            </span>
            <h2>Teams</h2>
        </div>
        <div class="teams-body">
            <h2>Nothing to preview</h2>
        </div>
    </div>
`;

const docFrag3 = range.createContextualFragment(teams);
main.appendChild(docFrag3);

const teamsWrapper = document.querySelector(".teams");
console.log(teamsWrapper);


const analytics = `
    <div class="analytics">
        <div class="analytics-header">
            <span class="material-symbols-outlined">
                analytics
            </span>
            <h2>Analytics</h2>
        </div>
        <div class="analytics-body">
            <h2>Nothing to preview</h2>
        </div>
    </div>
`;

const docFrag4 = range.createContextualFragment(analytics);
main.appendChild(docFrag4);

const analyticsWrapper = document.querySelector(".analytics");


let arr = [homewrapper, wrapper, teamsWrapper, analyticsWrapper];

const listoptions = document.querySelectorAll(".list-options");
listoptions[0].classList.add("active");
listoptions.forEach((ele, i)=>{
    ele.addEventListener("click", ()=>{
        for (let j=0; j<listoptions.length; j++){
            if (i===j){
                arr[j].style.display = "flex";
                listoptions[j].classList.add("active");
            }else{
                arr[j].style.display = "none";
                listoptions[j].classList.remove("active");
            }
            
        }
        
    })
})


const toggle_ele = document.getElementById("toggle");

toggle_ele.addEventListener("click", ()=>{
    toggle_ele.classList.toggle("active");
    toggle_ele.firstElementChild.classList.toggle("active")
});

const components_list = document.querySelectorAll(".components-list");

components_list.forEach((ele, i)=>{
    ele.addEventListener("click", ()=>{
        for (let j=0; j<components_list.length; j++){
            if (i===j){
                components_list[j].classList.add("active");
            }
            if (i!==j){
                components_list[j].classList.remove("active");
            }
        }
    })
});

const features_toggler = document.querySelectorAll(".child-wrap-toggler");
const inner_toggle = document.querySelectorAll(".inner-child-wrap-toggler")

features_toggler.forEach((ele, i)=>{
    ele.addEventListener("click", ()=>{
        ele.setAttribute("flag", true);
        ele.classList.toggle("active");
        inner_toggle[i].classList.toggle("active");
    })
});
