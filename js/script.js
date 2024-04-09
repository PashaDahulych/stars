// Задача 4. Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

class ShiningStars {
    constructor({ imgSrc, alt, size, interval }, animDuration = "linear") {
        this.imgSrc = imgSrc
        this.alt = alt
        this.size = size
        this.interval = interval
        this.animDuration = animDuration
    }
    getStarPosition() {
        const containerWidth = this.targetContainer.clientWidth
        const containerHeight = this.targetContainer.clientHeight
        const left = Math.floor(Math.random() * (containerWidth - this.size))
        const top = Math.floor(Math.random() * (containerHeight - this.size))
        this.star.style.left = `${left}px`
        this.star.style.top = `${top}px`
    }
    starAnimation() {
        this.star.animate(
            [{ transform: "scale(0)" }, { transform: "scale(2)" }],
            {
                duration: this.interval * 1000,
                easing: `${this.animDuration}`,
                fill: "forwards",
            }
        )
    }
    newStar() {
        const timer = setTimeout(() => {
            this.star.remove()
            this.render(this.targetSelector)
            clearTimeout(timer)
        }, this.interval * 1000)
    }
    start() {
        this.getStarPosition()
        this.starAnimation()
        this.newStar()
    }
    render(targetSelector) {
        this.targetSelector = targetSelector
        this.targetContainer = document.querySelector(targetSelector)
        this.star = document.createElement("img")
        this.star.className = "star__item"
        this.star.src = this.imgSrc
        this.star.alt = this.alt
        this.star.style.width = `${this.size}px`
        this.star.style.height = `${this.size}px`
        this.targetContainer.append(this.star)
        this.start()
    }
}

const stars = [
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 20,
        interval: 3,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 40,
        interval: 6,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 30,
        interval: 7,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 9,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 7.5,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 5.5,
    },

    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 9.5,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 7.8,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 8.7,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 5.2,
    },
    {
        imgSrc: "./img/star_01.png",
        alt: "star",
        size: 50,
        interval: 3.3,
    },
]

window.onload = function () {
    // let s = new ShiningStars(stars[0])
    // s.render("#cnt")
    for (const star of stars) {
        new ShiningStars(star).render("#cnt")
    }
}
