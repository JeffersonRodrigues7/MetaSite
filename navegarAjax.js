function navegarViaAjax(url, destinoConteudo, push = true) {//url seria diario.html e desino seria .conteudo
    //push permite mostrar na url diario.html ou semanal.html quadno o usuario clicar nesses links

    if(!url || !destinoConteudo) return //se nao tem url ou destino não faço nada
    const elemento = document.querySelector(destinoConteudo) //pego os campos que vou colocar o que vem de diario.html,semanal.html, ou seja as div com classe .conteudo
    fetch(url)//fazer requisição Ajax, fecth retorna uma resposta pro proximo then
        .then(resposta => resposta.text())//pego o texto do html a partir da resposta, nao quero json, retorna a resposta pro proximo then
        .then(html => {//coloco o html dentro do elemento
            elemento.innerHTML = html//coloco o que está dentro de diario.html dentro de .conteudo(exemplo)
            /*if(push) {
                history.pushState({ destinoConteudo }, "Página Ajax", url)
            }*/
        })
}

document.querySelectorAll('[linkConteudo]').forEach(link => {//para cada um dos elementos que serão os links (diario,semanal,mensal,anual)
    const url = link.attributes['linkConteudo'].value//pego o valor do atributo e coloco na url(diario.html,mensal.html)
    const conteudoDestino = link.attributes['destino'].value//pego o destino/(.conteudo)

    link.onclick = e => {//intercepta o evento de click
        e.preventDefault()
        navegarViaAjax(url, conteudoDestino)//quando ele clicar no diário ele vai pega seu conteúdo e colocar na classe .conteudo, ele chama a função ajax para isso
    }
})

    /*window.onpopstate = e => {
        if(e.state) {
            navegarViaAjax(window.location.href, e.state.destinoConteudo, false)
        }
    }*/