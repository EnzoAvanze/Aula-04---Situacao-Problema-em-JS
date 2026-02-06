function confirmar() {
                let classeechoose = Array.from(document.getElementById("classee").selectedOptions)
                                            .map(opcao => opcao.value);

                let power = Array.from(document.getElementById("Poder").selectedOptions)
                                            .map(opcao => opcao.value);

                let chara = document.getElementById("perso").value

                if (classeechoose.length === 0) {
                    alert("⚠️Por favor, selecione pelo menos uma fruta!");
                    return;
                }

                let finale = document.getElementById("final");
                finale.innerHTML = (`O Grande ${chara} é um destemido ${classeechoose} com um incrível poder de ${power}!`)
            
                if(classeechoose == 1 || power == 1){
                    alert ("Selecione as duas opções")
                    finale.innerHTML = ("")
                }
            }