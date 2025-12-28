const patterns = {
    0: [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    1: [0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
    2: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    3: [1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
    4: [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    5: [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    6: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    8: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
}

const clockEl = document.getElementById("clock")

function createDigit () {
    const d = document.createElement("div")
    d.className = "digit"
    for (let i = 0; i < 15; i++) {
        const t = document.createElement("div")
        t.className = "tile"
        d.appendChild(t)
        
    }
    return d
}

function createColon () {
    const c = document.createElement("div")
    c.className = "colon"
    c.textContent = ":"
    return c
}

const digit = [
    createDigit(), createDigit(),
    createColon(),
    createDigit(), createDigit()
]

digit.forEach(el => clockEl.appendChild(el))

function renderTime () {
    const now = new Date()
    const time = now.toTimeString().slice(0,5).replace(":", "")
    let di = 0
    for (let i = 0; i < time.length; i++) {
        const num = time[i]
        const tiles = digit[di].querySelectorAll(".tile")
        patterns[num].forEach((v, idx) => 
            tiles[idx].classList.toggle("on", v)
        )
        if (i === 1) {
            di += 2
        } else {
            di += 1
        }
    }
}

renderTime()
setInterval(renderTime, 1000)