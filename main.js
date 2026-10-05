//! rengler
let colors = ["red", "red", "red", "red"
    , "yellow", "yellow", "yellow", "yellow"
    , "green", "green", "green", "green"
    , "blue", "blue", "blue", "blue"
    , "orange", "orange", "orange", "orange"
    , "blueviolet", "blueviolet", "blueviolet", "blueviolet"]
let colorsArray = []


//! ehtiyyat
// let main = document.querySelector(".main")
// let btl1 = document.querySelector(".bottle-1")
// let btl2 = document.querySelector(".bottle-2")
// let btl3 = document.querySelector(".bottle-3")
// let btl4 = document.querySelector(".bottle-4")
// let btl5 = document.querySelector(".bottle-5")
// let btl6 = document.querySelector(".bottle-6")
// let btl7 = document.querySelector(".bottle-7")
// let btl8 = document.querySelector(".bottle-8")


//! random reng teyini
let b = document.querySelectorAll(".b")
let random
for (let i = 0; i < b.length; i++) {
    if (i == 0) {
        colorsArray = colors.slice(0, colors.length)
    }
    random = Math.round(Math.random() * (colorsArray.length - 1))
    b[i].style.backgroundColor = colorsArray[random]
    colorsArray.splice(random, 1)
}


//! rengler arasi xett
let bottles = document.querySelectorAll(".bottles")

for (let x = 0; x < bottles.length; x++) {
    for (let y = 0; y < 4; y++) {
        if (bottles[x].children[y].style.backgroundColor != "") {
            bottles[x].children[y].style.borderTop = "solid 2px black"
        }
    }
}


//! oynama
let gotur = "";
let s1;
let s2;
let a = 0;

let finish = document.querySelector(".win")
let win = true;

for (let i = 0; i < bottles.length; i++) {
    bottles[i].addEventListener("click", () => {
        if (a % 2 == 0) {
            //! gotur
            bottles[i].style.scale = "1.2"
            for (let a = 0; a < 4; a++) {
                if (bottles[i].children[a].style.backgroundColor != "") {
                    gotur = bottles[i].children[a].style.backgroundColor
                    s1 = i
                    s2 = a
                    break
                }
            }
            if (gotur == "") {
                s1 = i
            }
            a++
        }
        else {
            //! elave et
            for (let b = 3; b > 0; b--) {
                if (i == s1) {
                    gotur = ""
                    bottles[s1].style.scale = "1"
                    break
                }
                else if (bottles[i].children[3].style.backgroundColor == "") {
                    bottles[i].children[3].style.backgroundColor = gotur
                    bottles[s1].children[s2].style.backgroundColor = ""
                    bottles[s1].style.scale = "1"
                    gotur = ""
                    break
                }
                else if (bottles[i].children[b].style.backgroundColor == gotur && bottles[i].children[b - 1].style.backgroundColor == "") {
                    bottles[i].children[b - 1].style.backgroundColor = gotur
                    bottles[s1].children[s2].style.backgroundColor = ""
                    bottles[s1].style.scale = "1"
                    gotur = ""
                    break
                }
                else {
                    bottles[s1].style.scale = "1"
                }
            }
            a = 0

            //! rengler arasi xettler
            for (let x = 0; x < bottles.length; x++) {
                for (let y = 0; y < 4; y++) {
                    if (bottles[x].children[y].style.backgroundColor != "") {
                        bottles[x].children[y].style.borderTop = "solid 2px black"
                    }
                    else {
                        bottles[x].children[y].style.borderTop = "solid 0px black"
                    }
                }
            }

            //! win
            for (let f = 0; f < bottles.length; f++) {
                for (let index = 0; index < 3; index++) {
                    if (bottles[f].children[index].style.backgroundColor != bottles[f].children[index + 1].style.backgroundColor) {
                        win = false
                    }
                }
            }
            if (win) {
                setTimeout(() => {
                    finish.style.display = "block"
                    a = 1
                },300)
            }
            else {
                win = true
            }
        }
    })
}

//! yeniden basla
let refresh = document.querySelector(".refresh")
refresh.addEventListener("click", () => {
    window.location.reload();
})