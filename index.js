const issue9 = {
    links: "https://www.canva.com/design/DAFCFM04_Qk/PyElGeHm7HkxBO_WPwiAXA/view?utm_content=DAFCFM04_Qk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    images: 'img/WBM V1 Issue 9 61022.png',
    alts: "WBM Issue 9"
}

let issue8 = {
    links: "https://www.canva.com/design/DAFBY5TtbOo/vpFUIK52suC6LSR-YY5Lkw/view?utm_content=DAFBY5TtbOo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    images: 'img/WBM V1 Issue 8 52722(3).png',
    alts: "WBM Issue 8"
};

let issue7 = {
    links:'https://www.canva.com/design/DAFBJIppD9o/wiwZ65MzwpkPLdcysXIDUA/view?utm_content=DAFBJIppD9o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    images: 'img/WBM V1 Issue 7 512022.png',
    alts: "WBM Issue 7"
}

let issue6 = {
    links:'https://www.canva.com/design/DAFAcIo3I9w/cHjfcWhkqw-hXRreFykCfg/view?utm_content=DAFAcIo3I9w&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
    images: 'img/WBM V1 Issue 6 51322.png',
    alts: "WBM Issue 6"
}
let issue5 = {
    links:'https://www.canva.com/design/DAE_Ld8ZGf4/tjMYwTpv6qjZBkMk2zPpxg/view?utm_content=DAE_Ld8ZGf4&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
    images: 'img/WBM V1 Issue 5 42922.png',
    alts: "WBM Issue 5"
}
let issue4 = {
    links:'https://www.canva.com/design/DAE-baDMJ9s/d2bE5i0Y3vJm1hEe3iYU1w/view?utm_content=DAE-baDMJ9s&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
    images: 'img/WBM V1 Issue 4 42222.png',
    alts: "WBM Issue 4"
}
let issue3 = {
    links:"https://www.canva.com/design/DAE93V33_As/vUYVLshDgmZPX680rwlJEQ/view?utm_content=DAE93V33_As&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu",
    images: 'img/WBM V1 Issue 3 41522.png',
    alts: "WBM Issue 3"
}
let issue2 = {
    links:'https://www.canva.com/design/DAE8_S0pt8k/nB87mgnRivyDzBACZ9Xcow/view?utm_content=DAE8_S0pt8k&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
    images: 'img/WBM V1 Issue 2 4822.png',
    alts: "WBM Issue 2"
}
let issue1 = {
    links:'https://www.canva.com/design/DAE8mD2GZv8/LwSLcT7wKBS4GeKYc0P39g/view?utm_content=DAE8mD2GZv8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu',
    images: 'img/WBM V1 Issue 1 4122.png',
    alts: "WBM Issue 1"
}


function current(data) {
const {links, images, alts} = data
document.getElementById('currentIssue').innerHTML =
`<h2>Current Issue</h2>
<div class="card">
    <div class="card_item" id="card_item1">
    
   <a href = ${links} </a>
    <img src= '${images}' alt=${alts} class = "cover"></a>
    
    </div>
    </div>`
}

function back(data) {
    const {links,images, alts} = data
    document.getElementById('backIssues').innerHTML +=
    `<div class="card"">
        <div class="card_item" id="card_item1">
    
        <a href = ${links} </a>
        <img src= '${images}' alt=${alts} class = "cover"></a>
    
        </div>
    </div>`
}

current(issue9)
back(issue8)
back(issue7)
back(issue6)
back(issue5)
back(issue4)
back(issue3)
back(issue2)
back(issue1)