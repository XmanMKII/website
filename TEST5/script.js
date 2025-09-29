// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let guessCount = 0;
let guessLimit = 5;
let guessInput = null;
let guessButton = null;
let result = null;
let attempts = null;

// Wait for page to load
window.onload = function() {
  // Get input, button, and result elements
  guessInput = document.getElementById("guessInput");
  guessButton = document.getElementById("guessButton");
  result = document.getElementById("result");
  attempts = document.getElementById("attempts");

  // Add event listener to button
  guessButton.addEventListener("click", makeGuess);
}

// Handle guess
function makeGuess() {
  // Get guess from input
  const guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "請輸入正確的數字";
    return;
  }

  // Increment guess count
  guessCount++;

  // Check if guess is correct
  if (guess === randomNumber) {
    result.textContent = `恭喜你! 你成功猜中了答案! 答案是 ${randomNumber}`;
    guessButton.disabled = true;
    guessInput.disabled = true;
    restartButton.style.display = 'block';
    attempts.textContent = '';
  } 
  else if (guessCount === guessLimit) {
    result.textContent = `太可惜了, 你已經用完了所有機會。正確答案是 ${randomNumber}.`;
    guessButton.disabled = true;
    guessInput.disabled = true;
    attempts.textContent = '';
    restartButton.style.display = 'block';
  } 
  else {
    const hint = guess < randomNumber ? '更高' : '更低';
    result.textContent = `錯了! 請嘗試 ${hint} 的數字.`;
    const remainingAttempts = guessLimit - guessCount;
    attempts.textContent = remainingAttempts > 0 ? `你還有 ${remainingAttempts} 次機會` : '';
  }

  // Clear input
  guessInput.value = "";
}

const restartButton = document.getElementById('restart-button');
// 為按鈕添加事件監聽器
restartButton.addEventListener('click', function() {
  // 重置遊戲的狀態
  resetGame();
});


function resetGame() {
  // 生成一個新的隨機數字
  randomNumber = Math.floor(Math.random() * 100) + 1;

  // 重置猜測次數和提示信息
  guessCount = 0;
  result.textContent = '';
  attempts.textContent = ` `;

  // 啟用輸入框和提交按鈕
  guessInput.disabled = false;
  guessButton.disabled = false;

  // 清空輸入框的值
  guessInput.value = '';

  // 將輸入框聚焦
  guessInput.focus();
}