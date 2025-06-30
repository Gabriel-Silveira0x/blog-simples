//FORMULÁRIO
document.addEventListener("DOMContentLoaded", function () {
  // Validação de formulário (apenas se o formulário existir na página)
  var form = document.getElementById("formContato");
  if (form) {
    form.addEventListener("submit", function (e) {
      var nome = document.getElementById("nome").value.trim();
      var email = document.getElementById("email").value.trim();
      var mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        e.preventDefault();
      }
    });
  }

  // Botão "voltar ao topo"
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

const artigos = document.querySelectorAll(".artigo");

// ANIMAÇÃO PARA ARTIGO APARECER CONFORME
// DESCE O SCROLL
function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  artigos.forEach((artigo) => {
    const artigoTop = artigo.getBoundingClientRect().top;

    if (artigoTop < triggerBottom) {
      artigo.classList.add("show");
    } else {
      artigo.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
