document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

   

    
    // Limpar os campos do formulário ao carregar a página
    window.addEventListener("load", () => {
        form.reset();
    });
    
    // Selecionar os campos obrigatórios, incluindo o select do sexo
    const inputs = [
        document.querySelector("input[placeholder='Seu nome']"),
        document.querySelector("input[type='date']"),
        document.querySelector("input[placeholder='XXX.XXX.XXX-XX']"),
        document.querySelector("select"), // Campo de seleção de sexo
        document.querySelector("input[type='email']"),
        document.querySelector("input[placeholder='(XX) X XXXX-XXXX']"),
        document.querySelector("input[placeholder='XXXXX-XXX']"),
        document.querySelector("input[placeholder='']"),
        document.querySelector("input[placeholder='']"),
        document.querySelector("input[placeholder='']"),
        document.querySelector("input[placeholder='']")
    ].filter(input => input !== null); // Filtrar elementos nulos para evitar erros
    
    const termos = document.querySelector("#termos");
    
    // Expressões regulares para validação
    const regexValidations = {
        "input[placeholder='XXX.XXX.XXX-XX']": /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        "input[type='email']": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "input[placeholder='(XX) X XXXX-XXXX']": /^\(\d{2}\) \d \d{4}-\d{4}$/,
        "input[placeholder='XXXXX-XXX']": /^\d{5}-\d{3}$/
    };
    
    // Função para exibir erro abaixo do campo CPF
    function showError(input, message) {
        input.classList.add("input-erro");
        input.classList.remove("input-ok");
        let errorSpan = input.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("erro")) {
            errorSpan = document.createElement("span");
            errorSpan.classList.add("erro");
            input.parentNode.insertBefore(errorSpan, input.nextSibling);
        }
        errorSpan.innerHTML = `⚠ ${message}`;
    }

    // Função para exibir sucesso
    function showSuccess(input) {
        input.classList.add("input-ok");
        input.classList.remove("input-erro");
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains("erro")) {
            errorSpan.remove();
        }
    }

    // Validação instantânea ao sair do campo
    inputs.forEach(input => {
        input.addEventListener("blur", () => validateField(input));
    });

    function validateField(input) {
        const fieldSelector = Object.keys(regexValidations).find(sel => input.matches(sel));
        if (input.value.trim() === "") {
            showError(input, "Este campo é obrigatório");
            return false;
        } else if (fieldSelector && !regexValidations[fieldSelector].test(input.value.trim())) {
            showError(input, "Formato inválido");
            return false;
        } else {
            showSuccess(input);
            return true;
        }
    }
    
    // Permitir navegação correta ao pressionar Enter
    inputs.forEach((input, index) => {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                if (!validateField(input)) {
                    return;
                }
                let nextIndex = index + 1;
                while (nextIndex < inputs.length && (inputs[nextIndex].disabled || inputs[nextIndex].readOnly)) {
                    nextIndex++;
                }
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                }
            }
        });
    });
    
    form.addEventListener("submit", function (event) {
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!termos.checked) {
            showError(termos, "Você deve aceitar os Termos e Condições");
            isValid = false;
        } else {
            showSuccess(termos);
        }
        
        if (!isValid) {
            event.preventDefault();
        }
        else {
            //  Redireciona para a página de login se tudo estiver certo
            window.location.href = "Login1.html";
        }
    });

        // Botão de salvar temporariamente
    const salvarBtn = document.querySelector("#salvarDados");

    salvarBtn.addEventListener("click", function () {
        const dados = {};

        inputs.forEach(input => {
            const nomeCampo = input.getAttribute("placeholder") || input.name || "campo";
            dados[nomeCampo] = input.value;
        });

        if (termos) {
            dados["termos"] = termos.checked;
        }

        localStorage.setItem("dadosFormulario", JSON.stringify(dados));
        alert("Dados salvos temporariamente com sucesso!");

        
    });
    

});