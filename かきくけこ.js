const quiz = [
 {question: '代表計算を答えなさい',
  answers: [
     '1+1=2',
     '3+6=11',
     'x^2+y^2=z^2',
     'バナナ+キウイ=バナナキウイ'
     ],
     correct: '3+6=11'},
     
 {question: '代表が入っている部活を答えろ',
      answers: [
     '剣道部',
     '手芸部',
     'オカルト研究部',
     '剣道同好会'
     ],
     correct: '剣道同好会'}, 
   
 {question: '代表が飴を食べるときにいつも思っていることを答えなさい',
      answers: [
     'しゃらくせぇー',
     '人ぶち殺してぇ',
     '飴おいちぃ',
     '人生ってなんなんだろうな'
     ],
     correct: 'しゃらくせぇー'},

 {question: '代表の住んでる地域を答えなさい',
   answers: [
     '御殿場市',
     '秋葉原',
     '小山町',
     '冥王星'
     ],
     correct: '小山町'},
 
 {question: '代表が昼休みしていないこと答えなさい',
   answers: [
     '呼吸',
     '人殺し',
     '人の目を見る',
     '脳を使う'
     ],
     correct: '脳を使う'}, 

 {question: '代表というあだ名を最初につけたのは誰か答えなさい',
   answers: [
     'パワハラ　啓冴',
     '川村大先生',
     'バナナキウイ発案者',
     'いたずら大好き原田',
     ],
     correct: '川村大先生'},

 {question: '代表が振られた回数を答えなさい(代表ごめんね、問題が思いつかないので)',
   answers: [
     '2',
     '0',
     '100',
     '-1'
     ],
     correct: '2'}, 
    
  {question: '代表がウイルスサイトを見て行ったことを答えなさい',
   answers: [
     'おもしろいね',
     'きも',
     'おもんな',
     '死ねよかす●●●●●●'
     ],
     correct: 'おもんな'}, 
     
   {question: '代表がなりたい職業を答えなさい',
   answers: [
     '神',
     '警察官',
     'ケーキ屋さん',
     "ラーメン屋"
     ],
     correct: '警察官'},
 
 {question: '代表が夢だったことを答えなさい',
   answers: [
     'ラーメン屋を開くこと',
     '体重100kg',
     'みんなでマックに行くこと',
     'テストで1位を取ること'
     ],
     correct: 'みんなでマックに行くこと'}, 
];

const quizLength = quiz.length;
let quizIndex = 0;
let score =0;
let scorePuro = 1;
document.getElementById("puro").textContent = scorePuro;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

document.getElementById("puro").textContent = scorePuro;
//クイズの問題、選択肢を定義
const setupQuiz = () => {
 document.getElementById('aaa').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
 }
}

setupQuiz();

const clickHandler = (e) => {
 if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('次の問題です');
    score++;
    scorePuro++;
    document.getElementById("puro").textContent = scorePuro;
 } else {
    window.alert('次の問題です');
    scorePuro++;
    document.getElementById("puro").textContent = scorePuro;
 }

 quizIndex++;

 if(quizIndex < quizLength){
   setupQuiz();
 } else {
   document.write('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
 }
};
//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
 $button[handlerIndex].addEventListener('click', (e) => {
   clickHandler(e);
 });
 handlerIndex++;
};