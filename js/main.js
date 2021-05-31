/**
 * Define una función en javascript en la que se inserte un texto en una tarjeta que el usuario introduce por el teclado
 */
// $(document).ready(function () {
//     $("#boton-cambio-texto").click(function () {
//         $("#texto-usuario").text($("#texto-input").val());
//     });
// });

// Or with jQuery

// $(document).ready(function () {
//     $('.sidenav').sidenav();
// });


$(".button-collapse").sideNav();

/**
 * Define una función javascript que calcule la edad de los usuarios, y su sueldo. Debes considerar un json de ejmplo con los datos, en el que se registra para cada usuario su dni, año de nacimiento, fecha de ingreso en la empresa, plus de productividad en %, plus de antigüedad bruto (0,1% por cada tres años trabajado) y el sueldo base. (El json debe estar en el propio código, inicializando una variable, explica por qué se te exige este requisito)
 */
function ageAndSalary() {
    let userdataJSON = {
        "name": "Miguel",
        "dni": 11112222,
        "birthYear": 1986,
        "startDate": "12-06-2015",
        "productivityPlus": 10,
        "baseAmount": 1600,
    }
    let currentYear = new Date().getFullYear();
    let age = currentYear - userdataJSON['birthYear'];
    let yearInTheCompany = Math.trunc((new Date() - new Date(userdataJSON['startDate'])) / 1000 / 60 / 60 / 24 / 365);
    let fullSalary = userdataJSON['baseAmount'] * (1 + userdataJSON['productivityPlus'] / 100) * (1 + 0.001 * (Math.trunc(yearInTheCompany / 3)));
    console.log(`El empleado ${userdataJSON['name']}, con DNI ${userdataJSON['dni']} y ${age} años, tendrá este mes:
                     Sueldo total:  ${fullSalary}€ `)
}


/**
 * Crear un script que muestre un informe de la cantidad de párrafos, enlaces y div en tu página de inicio.
 */
function generarInforme() {
    let parrafos_sz = 0, link_sz = 0, div_sz = 0;
    parrafos_sz = $('p').length;
    link_sz = $('a').length;
    div_sz = $('div').length;
    console.log(`Se ha analizado todo el documento. En su interior, se ha encontrado la siguiente cantidad de elementos:
                        Párrafos:           ${parrafos_sz}.
                        Enlaces:            ${link_sz}.
                        Contenedores div:   ${div_sz}.`)
}