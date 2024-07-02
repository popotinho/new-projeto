const compliments = [
    "Você é incrível!",
    "Seu sorriso ilumina meu dia.",
    "Você é uma pessoa muito especial.",
    "Sua gentileza é inspiradora.",
    "Você tem um coração de ouro.",
    "Sua presença é reconfortante.",
    "Você é linda por dentro e por fora.",
    "Eu adoro passar tempo com você.",
    "Você faz o mundo um lugar melhor.",
    "Seu senso de humor é maravilhoso.",
];  "Seus cachos complementam a linda curva que o seu sorriso faz",

const complimentBtn = document.getElementById('compliment-btn');
const complimentContainer = document.getElementById('compliment');

complimentBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentContainer.textContent = compliments[randomIndex];
});

