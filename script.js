function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    fetch(`/calculate/${operation}/${num1}/${num2}`)
      .then(response => response.text())
      .then(result => {
        document.getElementById('result').innerText = result;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred.';
      });
  }
  