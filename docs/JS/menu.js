let datos = {};

const url = "https://charlymil979.github.io/laesquinamenu/BIN-db.json";

const $container = document.querySelector(".container");

let $seccion = "",
  $info = "",
  $precio,
  $uno,
  clase = "A",
  art,
  hh = "",
  tit="",
  sticky="",
visible="",
  arthh = "";

function llamarDb(url) {
  fetch(url

  )
    .then((resp) => resp.json())
    .then((dato) => {
      // console.log(dato.record.menu);
      const data = dato; //orig = dato.record
      // Empezando a armar la estructura de datos
      for (const key in data) {
        // console.log(data[key])
        const seccionhh = document.createElement("section");
        seccionhh.classList.add("seccion1");
        seccionhh.classList.add("siempreActiva");
        let clase = key.replaceAll(" ", "_");
        seccionhh.classList.add(`${clase}`);
        const titulohh = document.createElement("h3");
        titulohh.classList.add("seccion");
        titulohh.innerHTML = `${key}`;

        const seccion = document.createElement("section");
        seccion.classList.add("seccion1");
        const access=document.createElement("a")
        access.href=`#${clase}`
        const titulo = document.createElement("h3");
        titulo.classList.add("seccion");
        titulo.id= `${clase}`
        titulo.innerHTML = `${key}`;
        access.appendChild(titulo)
        if (key != "id") {
          let clase2 = key.replaceAll(" ", "_");
          seccion.innerHTML = `<div class= 'pictures'><img src='./imagenes/${clase2}.jpg' alt='${key}'></div>`;
          for (const articulo in data[key]) {
            let $tipos = "";
            datos = data[key][articulo];
            $precio = "";
            //Armando el arreglo
            datos[2].forEach((element, i) => {
            
                $tipos += `<div>
              <span class="tipo raleway"><span style="color:var(--bordeaux)">&#9679</span> ${element[0]}</span>
              <span class="precio raleway">${element[1]}</span>
              </div>
              `;

            });
            tit = `${datos[0].replaceAll(" ", "_")}`;
            if (data[key].length===1){
              visible="class=' articulo1 siempreActiva' "} else{
              visible ="class=articulo1"};
            art = `<div><h4  class="articulo">${datos[0]}</h4></div><div ${visible}>
            <div class="descripcion">${datos[1]}</div>
            <div class="tipos">${$tipos}</div>
            </div>
            `;
   
            seccion.innerHTML += art;

            document.querySelector(".menu").appendChild(access);
            document.querySelector(".menu").appendChild(seccion);
          }
        }
      }
    })
    .then(()=>{window.scrollTo(0,0)});
}

llamarDb(url);
