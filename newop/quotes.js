const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
 
const quotes = [
    {
        quote : "시간을 지배할 줄 아는 사람은 인생을 지배할 줄 아는 사람이다.",
        author : "에센 바흐",
    },
    {
       quote : "시간의 걸음걸이에는 세 가지가 있다. 미래는 주저하면서 다가오고, 현재는 화살처럼 날아가고, 과거는 영원히 정지하고 있다.",
       author : "F.실러",
    },
    {
        quote : "짧은 인생은 시간낭비에 의해 더욱 짧아진다.",
        author : "S.존슨",
    },
    {
        quote : "시간을 단축시키는 것은 활동이요, 시간을 견디지 못하게 하는 것은 안일 함이다.",
        author : "괴테",
    },
    {
        quote : "미래를 신뢰하지 마라, 죽은 과거는 묻어버려라, 그리고 살아있는 현재에 행동하라.",
        author : "롱펠로",
    },
    {
        quote : "계획이란 미래에 관한 현재의 결정이다",
        author : "드래커",
    },
    {
        quote : "시간을 선택하는 것은 시간을 절약하는 것이다.",
        author : "베이컨",
    },
    {
        quote : "시간이 덜어주거나 부드럽게 해주지 않는 슬픔이란 하나도 없다..",
        author : "키케로",
    },
]


   const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
   quote.innerText = todaysQuote.quote;
   author.innerText = todaysQuote.author;

