import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChochesService {

private coches:coche[] = [
  {
    nombre: "Beetle Coast",
    bio: "Con la gran competencia que hay en el mercado automotor, en la actualidad son pocos los vehículos que se pueden dar el lujo de alargar el ciclo de vida de una generación. Uno de esos casos especiales es el Volkswagen Beetle desde 2012 se ha mantenido con ligeros cambios, pero siempre manteniendo ese estilo característico que data desde su nacimiento en 1966.",
    img: "assets/img/beetle.png",
    aparicion: "2018-05-01"
  },
  {
    nombre: "Tiguan",
    bio: "El Volkswagen Tiguan 2021 es la actualización de la segunda generación del SUV alemán, cuyo estreno se produjo en 2016. Conserva motores gasolina y Diesel, pero también está disponible como mild-hybrid e híbrido enchufable. Está disponible a partir de 30.730 euros, antes de descuentos y campañas. Las primeras entregas se completarán en noviembre de 2020.",
    img: "assets/img/Tiguan.jpg",
    aparicion: "2021-05-01"
  },
  {
    nombre: "Fiesta",
    bio: "¡Qué, qué! Que se acabó el Fiesta y es que sin hacer mucho ruido este auto se despide de nuestro mercado, incluso, si lo quieres comprobar con tus propios ojos, al acceder a la página web de Ford de México, te darás cuenta ya no se encuentra disponible en el catálogo de productos.",
    img: "assets/img/fiesta.jpg",
    aparicion: "2019-01-01"
  },
  {
    nombre: "F-150",
    bio: "MÁS RESISTENTE QUE ANTES. MÁS INTELIGENTE QUE NUNCA. La totalmente nueva F-150 se construyó desde cero. Se rediseñó para ser la F-150 más resistente y productiva. Esto es lo que pasa cuando combinas potencia superior con inteligencia y diseño ajustados con precisión. Una bestia inteligente. Una carrocería de aleación de aluminio de grado militar, de alta resistencia e implacablemente robusta, y bastidor de acero de alta resistencia sometido a pruebas rigurosas con nueva tecnología para que trabajes de forma más productiva e inteligente.",
    img: "assets/img/F-150.jpg",
    aparicion: "2020-05-01"
  },
  {
    nombre: "Lamborghini Countach",
    bio: "MÁS RESISTENTE QUE ANTES. MÁS INTELIGENTE QUE NUNCA. La totalmente nueva F-150 se construyó desde cero. Se rediseñó para ser la F-150 más resistente y productiva. Esto es lo que pasa cuando combinas potencia superior con inteligencia y diseño ajustados con precisión. Una bestia inteligente. Una carrocería de aleación de aluminio de grado militar, de alta resistencia e implacablemente robusta, y bastidor de acero de alta resistencia sometido a pruebas rigurosas con nueva tecnología para que trabajes de forma más productiva e inteligente.",
    img: "/assets/img/lamborgini.jpg",
    aparicion: "1973-05-01"
  },
  {
    nombre: "Datsun 240 Z",
    bio: "MÁS RESISTENTE QUE ANTES. MÁS INTELIGENTE QUE NUNCA. La totalmente nueva F-150 se construyó desde cero. Se rediseñó para ser la F-150 más resistente y productiva. Esto es lo que pasa cuando combinas potencia superior con inteligencia y diseño ajustados con precisión. Una bestia inteligente. Una carrocería de aleación de aluminio de grado militar, de alta resistencia e implacablemente robusta, y bastidor de acero de alta resistencia sometido a pruebas rigurosas con nueva tecnología para que trabajes de forma más productiva e inteligente.",
    img: "/assets/img/datsunZ.jpeg",
    aparicion: "2020-05-01"
  },
  {
    nombre: "Mercedes Benz Clase G",
    bio: "Mercedes-AMG G 63 ratifica su puesto como vehículo todoterreno con un potente comportamiento en carretera. Donde sea que Mercedes-AMG G 63 muestre su cara, dejará en claro por qué es la mejor todoterreno de su segmento. Su pasión, perfección y poder hacen que cada viaje se sienta como una victoria. Disfruta del Driving Performance. El auténtico dinamismo de conducción que transmiten los genes típicos de AMG supera todas las expectativas.",
    img: "/assets/img/mercedezG.jpeg",
    aparicion: "2020-08-08"
  }
];
  constructor() { 
    console.log('Servicio listo para usar!!')
  }
  getCoches():coche[]{
    return this.coches;
  }
  getCoche(idx:number){
    return this.coches[idx];
  }
  buscarCoche(termino: string): coche[]{
    let cochesArr: coche[]=[];
    termino = termino.toLowerCase();
    
    for (let i = 0; i < this.coches.length; i++){
      let coche = this.coches[i];
      let nombre = coche.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        coche.idx = i;
        cochesArr.push(coche);
      }
    }
    return cochesArr;
  }
}

export interface coche{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  idx?: number;
};

