function limpa_formul\u00e1rio_cep(){document.getElementById("rua").value="",document.getElementById("bairro").value="",document.getElementById("cidade").value=""}function meu_callback(e){"erro"in e?(limpa_formul\u00e1rio_cep(),alert("CEP n\xe3o encontrado.")):(document.getElementById("rua").value=e.logradouro,document.getElementById("bairro").value=e.bairro,document.getElementById("cidade").value=e.localidade)}function pesquisacep(e){var a=e.replace(/\D/g,"");if(""!=a)if(/^[0-9]{8}$/.test(a)){document.getElementById("rua").value="...",document.getElementById("bairro").value="...",document.getElementById("cidade").value="...";var l=document.createElement("script");l.src="https://viacep.com.br/ws/"+a+"/json/?callback=meu_callback",document.body.appendChild(l)}else limpa_formul\u00e1rio_cep(),alert("Formato de CEP inv\xe1lido.");else limpa_formul\u00e1rio_cep()}var botaoAdicionar=document.querySelector("#botao-adiciona");botaoAdicionar.addEventListener("click",function(e){e.preventDefault();var a=storage();atualizarStorage(a)}),localStorage.nome&&(document.getElementById("nome").value=localStorage.nome),localStorage.endereco&&(document.getElementById("rua").value=localStorage.rua),localStorage.email&&(document.getElementById("email").value=localStorage.email);var atualizarStorage=function(e){var a=document.getElementById("nome"),t=document.getElementById("rua"),l=document.getElementById("email"),n=Math.round(100*Math.random());if(""==a.value||""==l.value||""==t.value)""==a.value&&(a.focus(),a.classList.add("is-invalid")),""==t.value&&(t.focus(),t.classList.add("is-invalid")),""==l.value&&(l.focus(),l.classList.add("is-invalid"));else{a.classList.remove("is-invalid"),t.classList.remove("is-invalid"),l.classList.remove("is-invalid");var i={codigo:n,nome:a.value,rua:t.value,email:l.value};if(null!=e){e.push(i);var o=JSON.stringify(e);localStorage.setItem("pessoas",o)}else o=JSON.stringify([i]),localStorage.setItem("pessoas",o)}},storage=function(){if(null==localStorage.getItem("pessoas"))return null;var e=localStorage.getItem("pessoas");return null!=e?JSON.parse(e):void 0};function selected(e){"pessoaJuridica"==e&&document.querySelector("#nomeFantasia").classList.remove("invisivel"),"pessoaFisica"==e&&document.querySelector("#nomeFantasia").classList.add("invisivel")}