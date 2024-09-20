function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const progressBar = document.getElementById('progress');
    const scoreText = document.getElementById('scoreText');
  
    // Calculate password score
    let score = calculatePasswordScore(password);
  
    // Update progress bar color and width based on score
    progressBar.style.width = score + '%';
    if (score < 30) {
      progressBar.style.backgroundColor = 'red';
    } else if (score < 60) {
      progressBar.style.backgroundColor = 'orange';
    } else if (score < 80) {
      progressBar.style.backgroundColor = 'yellow';
    } else {
      progressBar.style.backgroundColor = 'green';
    }
  
    // Update score text
    scoreText.innerHTML = `Strength: ${score}%`;
  }
  
  function calculatePasswordScore(password) {
    let score = 0;
  
    // Length of password (Minimum length should be 8)
    if (password.length >= 8) score += 25;
  
    // Check if it contains both lower and uppercase letters
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 20;
  
    // Check if it contains numbers
    if (/\d/.test(password)) score += 20;
  
    // Check if it contains special characters
    if (/[\W]/.test(password)) score += 20;
  
    // Check for repeated characters (deduct points)
    const uniqueChars = new Set(password);
    if (uniqueChars.size < password.length) score -= 10;
  
    // Strongest passwords (length > 12, multiple special characters)
    if (password.length > 12 && /[\W]{2,}/.test(password)) score += 25;
  
    // Score should not exceed 100
    score = Math.min(100, Math.max(0, score));
  
    return score;
  }
  