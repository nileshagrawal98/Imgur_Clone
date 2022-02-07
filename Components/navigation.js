let setNavigation = (container, navBg) => {

  let navCss = document.createElement('link');
  navCss.rel = 'stylesheet';
  navCss.href = '../Styles/navigation.css';
  document.getElementsByTagName('head')[0].append(navCss);

  container.innerHTML = `
    <nav class="navigation-container-one" id="navigationContainerOne">
    <div class="nav-left">
      <div class="nav-logo" onclick="window.location.href='./'">
        <svg width="94" height="34" viewBox="0 0 94 34" class="icon stroke fill" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Imgur</title>
          <path d="M86.8012 17.336C86.8012 15.6108 86.981 15.0039 88.5637 14.3332C89.1292 14.0977 89.7077 13.9104 90.2587 13.7321C91.9506 13.1844 93.3833 12.7206 93.3833 11.2023C93.3833 9.86081 92.0884 8.71123 90.5059 8.71123C89.175 8.71123 87.8441 9.28632 86.6572 10.4038C85.9738 9.31751 85.0747 8.80659 83.9599 8.80659C82.0176 8.80659 81.1185 9.98884 81.1185 12.4487V22.5745C81.1185 25.0344 82.0176 26.2484 83.9599 26.2484C85.9018 26.2484 86.8012 25.0344 86.8012 22.5745V17.336Z" fill="#ffffff"></path>
          <path d="M61.085 19.1569C61.085 23.9801 64.1422 26.5359 69.6448 26.5359C75.148 26.5359 78.2051 23.9801 78.2051 19.1569V12.4487C78.2051 9.98884 77.342 8.80659 75.3995 8.80659C73.4576 8.80659 72.5582 9.98884 72.5582 12.4487V18.1345C72.5582 20.4984 71.9469 21.8081 69.6448 21.8081C67.3433 21.8081 66.7314 20.4984 66.7314 18.1345V12.4487C66.7314 9.98884 65.8326 8.80659 63.9264 8.80659C61.9841 8.80659 61.085 9.98884 61.085 12.4487V19.1569Z" fill="#ffffff"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M48.245 33.3078C52.2732 33.3078 55.2229 31.9981 56.877 29.5382C57.9919 27.9092 58.2077 25.6094 58.2077 22.5745V12.4487C58.2077 9.98884 57.3086 8.80659 55.3663 8.80659C54.5036 8.80659 53.4964 9.34959 52.8485 10.4038C51.6982 9.19008 50.2589 8.61499 48.317 8.61499C43.4974 8.61499 39.5052 12.4166 39.5052 17.5276C39.5052 22.6387 43.2456 26.2802 47.7057 26.2802C49.9351 26.2802 51.6262 25.4814 52.8485 23.9163C52.8485 24.0322 52.8582 24.1398 52.8675 24.2432C52.8762 24.339 52.8845 24.4313 52.8845 24.5234C52.8845 27.2705 51.2304 28.7718 48.4607 28.7718C46.6897 28.7718 45.3742 28.2995 44.3043 27.9153C43.5708 27.652 42.9527 27.43 42.3822 27.43C40.9796 27.43 39.9367 28.3565 39.9367 29.6342C39.9367 31.6152 43.0655 33.3078 48.245 33.3078ZM45.3676 17.5276C45.3676 15.0039 46.9864 13.4067 49.0726 13.4067C51.1583 13.4067 52.8125 15.0039 52.8125 17.5276C52.8125 20.0829 51.1944 21.7442 49.0726 21.7442C46.9506 21.7442 45.3676 20.1149 45.3676 17.5276Z" fill="#ffffff"></path>
          <path d="M31.5924 22.5745C31.5924 25.0344 32.4558 26.2484 34.3975 26.2484C36.34 26.2484 37.2388 25.0344 37.2388 22.5745V15.3553C37.2388 11.011 34.7573 8.74302 30.8371 8.74302C28.4996 8.74302 26.8446 9.41375 25.1184 11.1069C23.7877 9.54178 21.9172 8.74302 19.4717 8.74302C17.5655 8.74302 16.1268 9.25424 14.9396 10.4038C14.2563 9.31751 13.3575 8.80659 12.2426 8.80659C10.3 8.80659 9.40124 9.98884 9.40124 12.4487V22.5745C9.40124 25.0344 10.3 26.2484 12.2426 26.2484C14.1842 26.2484 15.0836 25.0344 15.0836 22.5745V16.8251C15.0836 14.3332 15.8753 13.0556 17.925 13.0556C19.7595 13.0556 20.4788 14.3332 20.4788 16.8887V22.5745C20.4788 25.0344 21.3776 26.2484 23.3202 26.2484C25.2624 26.2484 26.1615 25.0344 26.1615 22.5745V16.8251C26.1615 14.3332 26.9526 13.0556 29.0026 13.0556C30.8371 13.0556 31.5924 14.3332 31.5924 16.8887V22.5745Z" fill="#ffffff"></path>
          <path d="M6.23549 12.4487C6.23549 9.98884 5.33669 8.80659 3.43046 8.80659C1.48851 8.80659 0.589111 9.98884 0.589111 12.4487V22.5745C0.589111 25.0344 1.48851 26.2484 3.43046 26.2484C5.373 26.2484 6.23549 25.0344 6.23549 22.5745V12.4487Z" fill="#ffffff"></path>
          <path d="M3.51952 0.756104C1.58599 0.756104 0 2.1078 0 3.75626C0 5.43752 1.54695 6.7561 3.51952 6.7561C5.45305 6.7561 7 5.43752 7 3.75626C7 2.1078 5.45305 0.756104 3.51952 0.756104Z" fill="#1BB76E"></path>
        </svg>
      </div>
      <button class="button-green" style="margin: 0 20px">
        <img src="./Images/new-post.svg" alt="">
        New post
      </button>
    </div>
    <div class="nav-middle">
      <div class="nav-search">
        <input type="text" placeholder="Images, #tags, @users oh my!" id="searchInputBox1">
        <div class="nav-search-icon">
          <img src="./Images/search-icon.svg" alt="" id="searchBtn1">
        </div>
      </div>
    </div>
    <div class="nav-right">
      <div class="nav-search-leaderboard-icon">
        <svg width="32" height="32" viewBox="0 -2 34 34" class="uScaleTransition ProfileNavbar-item" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Comment Leaderboard</title>
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h32v32H0z"></path>
            <g transform="translate(6.5 3)" stroke="#ffffff" stroke-width="2">
              <path d="M4 16.977v7.076l5.5-2.481 5.5 2.481v-7.076l-5.5 1.245L4 16.977z"></path>
              <circle cx="9.5" cy="9.5" r="8.5"></circle>
            </g>
          </g>
        </svg>
      </div>
      <button class="button-purple">
        Go Ad-Free
      </button>
      <span class="nav-signin">Sign in</span>
      <button class="button-green" style="padding-top: 9px">Sign up</button>
    </div>
  </nav>
  <nav class="navigation-container-two" id="navigationContainerTwo" style='background-image: url(${navBg})'>
    <div class="nav-left">
      <div class="nav-logo">
        <img src="./Images/small-logo.png" alt="imgur" onclick="window.location.href='./'">
      </div>
      <div class="dropdown-button-container">
        <span>MOST VIRAL</span>
        <span><img src="./Images/dropdown_icon.svg" alt="" width="24px"></span>
      </div>
    </div>
    <div class="nav-middle">
      <div class="nav-search">
        <input type="text" placeholder="Images, #tags, @users oh my!" id="searchInputBox2">
        <div class="nav-search-icon">
          <img src="./Images/search-icon.svg" alt="" id="searchBtn2">
        </div>
      </div>
    </div>
    <div class="nav-right">
      <div class="dropdown-button-container">
        <span>POPULAR</span>
        <span><img src="./Images/dropdown_icon.svg" alt="" width="24px"></span>
      </div>
      <div class="nav-two-right-options">
        <span><img src="./Images/filter_icon.svg" alt=""></span>
        <span><img src="./Images/pause_icon.svg" alt=""></span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17">
            <rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"></rect>
            <g>
              <g>
                <g>
                  <polygon fill="#BABEC4" points="6.17870715566179,0 1.1573245256338325,0 0.15306144952774048,0 0.15306144952774048,1.0042672515679527 0.15306144952774048,6.0256540079346905 0.15306144952774048,7.02991762439467 1.1573245256338325,7.02991762439467 6.17870715566179,7.02991762439467 7.18298727747689,7.02991762439467 7.18298727747689,6.0256540079346905 7.18298727747689,1.0042672515679527 7.18298727747689,0 "></polygon>
                </g>
              </g>
              <g>
                <g>
                  <polygon fill="#BABEC4" points="6.278707504272461,10 1.25732421875,10 0.25306129455566406,10 0.25306129455566406,11.004266738891602 0.25306129455566406,16.025653839111328 0.25306129455566406,17.029918670654297 1.25732421875,17.029918670654297 6.278707504272461,17.029918670654297 7.282987594604492,17.029918670654297 7.282987594604492,16.025653839111328 7.282987594604492,11.004266738891602 7.282987594604492,10 "></polygon>
                </g>
              </g>
              <g>
                <g>
                  <polygon fill="#BABEC4" points="15.978708267211914,9.900003053247929 10.957324981689453,9.900003053247929 9.953062057495117,9.900003053247929 9.953062057495117,10.90426979213953 9.953062057495117,15.925656892359257 9.953062057495117,16.929921723902225 10.957324981689453,16.929921723902225 15.978708267211914,16.929921723902225 16.982988357543945,16.929921723902225 16.982988357543945,15.925656892359257 16.982988357543945,10.90426979213953 16.982988357543945,9.900003053247929 "></polygon>
                </g>
              </g>
              <g>
                <g>
                  <polygon fill="#BABEC4" points="15.878707885742188,-0.10000000149011612 10.857324600219727,-0.10000000149011612 9.85306167602539,-0.10000000149011612 9.85306167602539,0.9042667374014854 9.85306167602539,5.925653837621212 9.85306167602539,6.929918669164181 10.857324600219727,6.929918669164181 15.878707885742188,6.929918669164181 16.88298797607422,6.929918669164181 16.88298797607422,5.925653837621212 16.88298797607422,0.9042667374014854 16.88298797607422,-0.10000000149011612 "></polygon>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>
    </div>
  </nav>
  `;


  document.getElementById('searchInputBox2').addEventListener('keypress', (e) => handleSearchKey(e));
  document.getElementById('searchInputBox1').addEventListener('keypress', (e) => handleSearchKey(e));
  document.getElementById('searchBtn1').addEventListener('click', () => {
    setTag(document.getElementById('searchInputBox1').value);
  });
  document.getElementById('searchBtn2').addEventListener('click', () => {
    setTag(document.getElementById('searchInputBox2').value);
  });

}

// using this instead of proper debouncing as imgur api remains down mostly, (at the time of development).
function setTag(name) {
  // console.log(name)
  if (name.trim() === '') return;
  localStorage.setItem('tag', JSON.stringify({ display_name: name }));
  window.location.href = './tags.html';
}

function handleSearchKey(e) {
  if (e.keyCode === 13 && e.target.value.trim() !== '') {
    setTag(e.target.value.trim());
  }
}

let setFooter = () => {
  let footer = document.createElement('footer');
  footer.id = 'footerBar';
  footer.innerHTML = `<div>
    <ul>
      <li>2022 Imgur, Inc</li>
      <li>About</li>
      <li>Terms</li>
      <li>Privacy</li>
      <li>Rules</li>
      <li>Help</li>
      <li>Emerald</li>
      <li>Store</li>
      <li>Advertise</li>
      <li>Blog</li>
      <li>Wellness</li>
      <li>CCPA</li>
      <li>Api</li>
    </ul>
  </div>
  <div class="footer-bar-getapp">
    Get the App
  </div>`

  document.body.append(footer);
}

let options2 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4
}
let callback2 = (entries, navObserver) => {
  entries.forEach(entry => {
    // console.log(entry)
    if (entry.target.id == 'topSection') {
      if (!entry.isIntersecting) {
        // document.getElementById('navigationContainerOne').style.display = 'none';
        document.getElementById('navigationContainerOne').style.transform = 'translateY(-120px)';
        // document.getElementById('navigationContainerTwo').style.display = 'flex';
        document.getElementById('navigationContainerTwo').style.transform = 'translateY(120px)';
        document.getElementById('footerBar').style.transform = 'translateY(60px)';

      } else {
        // document.getElementById('navigationContainerOne').style.display = 'flex';
        document.getElementById('navigationContainerOne').style.transform = 'translateY(0px)';
        // document.getElementById('navigationContainerTwo').style.display = 'none';
        document.getElementById('navigationContainerTwo').style.transform = 'translateY(-120px)';
        document.getElementById('footerBar').style.transform = 'translateY(0px)';
      }
    }
  });
}
let navObserver = new IntersectionObserver(callback2, options2)
navObserver.observe(document.getElementById('topSection'));


// Search Code Starts

// Imgur gallery search , imgur api is down.
// async function searchCollectionQuery(query) {
//   try {

//     let images = await fetch(`https://api.imgur.com/3/gallery/search/top/month/1?q=${query}`, {
//       method: "GET",
//       headers: {
//         "Authorization": "563492ad6f9170000100000119310439abd04938a6eab6c8fdaf39ee"
//       }
//     });

//     let res = await images.json();
//     console.log(res);

//     // return res.photos;
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// searchCollectionQuery('cats');



export { setNavigation, options2, callback2, navObserver, setFooter, setTag, handleSearchKey };