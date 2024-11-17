// Função para cadastrar novo usuário
function register() {
    const cpf = document.getElementById("registerCpf").value.trim();
    const senha = document.getElementById("registerSenha").value.trim();

    // Verificar se os campos estão preenchidos
    if (cpf === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificar se o CPF já está cadastrado
    if (localStorage.getItem(cpf)) {
        alert("Este CPF já está cadastrado.");
        return;
    }

    // Salvar usuário no localStorage
    const user = { cpf, senha };
    localStorage.setItem(cpf, JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "home.html"; // Redirecionar para a página de login
}

// Função para fazer login
function login() {
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Verificar se os campos estão preenchidos
    if (cpf === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificar se o usuário está cadastrado
    const user = localStorage.getItem(cpf);
    if (user) {
        const parsedUser = JSON.parse(user);
        // Validar a senha
        if (parsedUser.senha === senha) {
            alert("Login realizado com sucesso!");
            window.location.href = "home.html"; // Redirecionar para a página inicial
        } else {
            alert("Senha incorreta.");
        }
    } else {
        alert("Usuário não encontrado.");
    }
}
