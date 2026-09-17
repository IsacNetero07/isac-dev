document.getElementById('copyEmail').addEventListener('click', async () => {
  const email = 'seuemail@exemplo.com';
  try {
    await navigator.clipboard.writeText(email);
    document.getElementById('copyEmail').textContent = 'E-mail copiado!';
    setTimeout(() => {
      document.getElementById('copyEmail').textContent = 'Copiar e-mail de exemplo';
    }, 1800);
  } catch {
    alert('Copie manualmente: ' + email);
  }
});
