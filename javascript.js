const formulario = document.getElementById('formulario');
console.log(formulario);

const post01 = document.getElementById ('post01');
console.log(post01);

const post02 = document.getElementById ('post02');
console.log(post02);

const post_data = document.getElementsByClassName ('post-data');
console.log (post_data);

const post_texto = document.getElementsByClassName ('post-texto');
console.log(post_texto);

const lista_redes = document.getElementsByClassName ("lista_redes");
console.log(lista_redes);

const link_post01 = document.querySelector("#post01 .post-texto a").innerText;
console.log (link_post01);

const neg_post02 = document.querySelector("#post02 .post-texto strong").innerText;
console.log (neg_post02);

const input_form = document.querySelector("#formulario #nome");
console.log (input_form);

const links_list_redes = document.querySelectorAll("footer .lista_redes a");
links_list_redes.forEach(function(element) {
    console.log(element);
})

const elementos_nav = document.querySelectorAll("nav .elementos_nav a")
elementos_nav.forEach(function(element) {
    console.log(element);
})

const autor_data = document.querySelectorAll("#post01 .post-autor, #post01 .post-data, #post02 .post-autor, #post02 .post-data");
autor_data.forEach(function(element) {
console.log (element.innerText);
});