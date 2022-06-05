
const pictures = ['countBcg-0.jpeg', 'countBcg-1.jpeg', 'countBcg-2.jpeg', 'countBcg-3.jpeg', 'countBcg-4.jpeg'];

const buttons = document.querySelectorAll('.btn');
const imageDIV = document.querySelector('.img-container');
let count = 0;


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.classList.contains('btn-left')) {
            count--;
            if (count < 0) {
                count = pictures.length - 1;
            }
            imageDIV.style.backgroundImage = `url('./Images/${pictures[count]}.jpeg')`
        }

        if (button.classList.contains('btn-right')) {
            count++;
            if (count > pictures.length - 1) {
                count = 0;
            }

            imageDIV.style.backgroundImage = `url('./Images/${pictures[count]}.jpeg')`
        }

    })
})


