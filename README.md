jQuery Placeholder Fix
======================

Este plugin visa adicionar o atributo placeholder a browsers que não tenham suporte a ele,
renderizando corretamente.
O plugin se encarrega de verificar se o browser tem suporte ou não ao atributo placeholder,
aplicando-o o somente quando necessário (ou forçando usando a opção "force").

Uso
---
Para usar o plugin, primeiramente, precisamos adicionar o jQuery a nossa página, da seguinte maneira:
[code]
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
[/code]
* Note que estou utilizando a CDN do google, para evitar consumo local de banda no carregamento do jQuery, mas
nada impede que você utilize uma versão local dele, basta substituir.

Logo abaixo, vamos adicionar o plugin:
[code]
<script type="text/javascript" src="jquery.placeholder.fix.js"></script>
[/code]

A chamada para o plugin pode ser feita de diversas maneiras:
- Para um formulário especifico;
- Para um campo especifico;
- Para todos os inputs e textarea do documento.
Para isso, é só usar o seletor desejado:
[code]
<script type="text/javascript">
$(document).ready(function(){
  $(this).placeholder();
});
</script>
[/code]

Agora, é só criar um formulário normalmente, com o atributo placeholder nos campos:
[code]
<form action="#" method="get">
  <fieldset>
    <legend>Contato</legend>
    <label for="contato_nome">Nome</label>
    <input type="text" name="contato_nome" id="contato_nome" placeholder="Nome" />
    <label for="contato_email">E-mail</label>
    <input type="text" name="contato_email" id="contato_email" placeholder="E-mail" />
    <label for="contato_mensagem">Mensagem</label>
    <textarea name="contato_mensagem" id="contato_mensagem" placeholder="Mensagem" /></textarea>
  </fieldset>
</form>
[/code]

Opções
------
O plugin tem a opção se sempre forçar o uso do plugin para renderizar o placeholder,
sobrescrevendo a verificação que o plugin faz:
[code]
$(document).ready(function(){
  $(this).placeholder({
    force: true
  });
});
[/code]

Estilização
-----------
A classe "placeholder" é adicionada a todos os campos que o plugin ativar o placeholder,
facilitando a estilização:
[code]
input.placeholder{
  color:#ccc;
  font-style:italic;
}
[/code]

TODO
----
- Adicionar placeholder aos campos do tipo password
- Adicionar opção de esconder o label relacionado ao input