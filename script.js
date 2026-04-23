const equipos = [
  "Arandina CF",
  "Atlético Bembibre",
  "Atlético Mansillés",
  "Atlético Tordesillas",
  "CD Becerril",
  "CD Colegios Diocesanos",
  "CD Guijuelo",
  "CD La Virgen del Camino",
  "CD Mirandés B",
  "CD Mojados",
  "CD Numancia de Soria B",
  "CD Palencia Cristo Atlético",
  "CD Villaralbo",
  "Júpiter Leonés",
  "Palencia CF",
  "SD Almazán",
  "UD Santa Marta de Tormes",
  "Unionistas de Salamanca CF B"
];

const escudos = {
  "Arandina CF": "escudos/arandina.png",
  "Atlético Bembibre": "escudos/bembibre.png",
  "Atlético Mansillés": "escudos/mansilles.png",
  "Atlético Tordesillas": "escudos/tordesillas.png",
  "CD Becerril": "escudos/becerril.png",
  "CD Colegios Diocesanos": "escudos/diocesanos.png",
  "CD Guijuelo": "escudos/guijuelo.png",
  "CD La Virgen del Camino": "escudos/lavirgen.png",
  "CD Mirandés B": "escudos/mirandesb.png",
  "CD Mojados": "escudos/mojados.png",
  "CD Numancia de Soria B": "escudos/numanciab.png",
  "CD Palencia Cristo Atlético": "escudos/cristo.png",
  "CD Villaralbo": "escudos/villaralbo.png",
  "Júpiter Leonés": "escudos/jupiter.png",
  "Palencia CF": "escudos/palencia.png",
  "SD Almazán": "escudos/almazan.png",
  "UD Santa Marta de Tormes": "escudos/santamarta.png",
  "Unionistas de Salamanca CF B": "escudos/unionistasb.png"
};

 const partidos = [
// Jornada 1
{ jornada: 1, local: "Unionistas de Salamanca CF B", visitante: "Atlético Tordesillas", gLocal: 1, gVis: 1 },
{ jornada: 1, local: "CD Colegios Diocesanos", visitante: "CD Numancia de Soria B", gLocal: 2, gVis: 2 },
{ jornada: 1, local: "CD Villaralbo", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 2 },
{ jornada: 1, local: "Júpiter Leonés", visitante: "CD La Virgen del Camino", gLocal: 0, gVis: 1 },
{ jornada: 1, local: "Palencia CF", visitante: "Arandina CF", gLocal: 4, gVis: 0 },
{ jornada: 1, local: "CD Mirandés B", visitante: "CD Becerril", gLocal: 4, gVis: 1 },
{ jornada: 1, local: "CD Mojados", visitante: "UD Santa Marta de Tormes", gLocal: 1, gVis: 3 },
{ jornada: 1, local: "CD Guijuelo", visitante: "Atlético Mansillés", gLocal: 1, gVis: 0 },
{ jornada: 1, local: "SD Almazán", visitante: "Atlético Bembibre", gLocal: 1, gVis: 1 },

// Jornada 2
{ jornada: 2, local: "Atlético Tordesillas", visitante: "CD Colegios Diocesanos", gLocal: 0, gVis: 0 },
{ jornada: 2, local: "CD Numancia de Soria B", visitante: "CD Villaralbo", gLocal: 1, gVis: 1 },
{ jornada: 2, local: "Arandina CF", visitante: "SD Almazán", gLocal: 1, gVis: 1 },
{ jornada: 2, local: "CD La Virgen del Camino", visitante: "CD Guijuelo", gLocal: 2, gVis: 2 },
{ jornada: 2, local: "Atlético Mansillés", visitante: "Unionistas de Salamanca CF B", gLocal: 0, gVis: 0 },
{ jornada: 2, local: "UD Santa Marta de Tormes", visitante: "Júpiter Leonés", gLocal: 2, gVis: 0 },
{ jornada: 2, local: "Atlético Bembibre", visitante: "CD Mojados", gLocal: 4, gVis: 0 },
{ jornada: 2, local: "CD Palencia Cristo Atlético", visitante: "CD Mirandés B", gLocal: 1, gVis: 0 },
{ jornada: 2, local: "CD Becerril", visitante: "Palencia CF", gLocal: 1, gVis: 2 },

// Jornada 3
{ jornada: 3, local: "CD Colegios Diocesanos", visitante: "Atlético Mansillés", gLocal: 1, gVis: 2 },
{ jornada: 3, local: "Unionistas de Salamanca CF B", visitante: "CD La Virgen del Camino", gLocal: 0, gVis: 1 },
{ jornada: 3, local: "CD Villaralbo", visitante: "Atlético Tordesillas", gLocal: 0, gVis: 2 },
{ jornada: 3, local: "CD Guijuelo", visitante: "UD Santa Marta de Tormes", gLocal: 1, gVis: 1 },
{ jornada: 3, local: "CD Mojados", visitante: "Arandina CF", gLocal: 0, gVis: 1 },
{ jornada: 3, local: "Júpiter Leonés", visitante: "Atlético Bembibre", gLocal: 1, gVis: 2 },
{ jornada: 3, local: "CD Mirandés B", visitante: "Palencia CF", gLocal: 0, gVis: 2 },
{ jornada: 3, local: "CD Palencia Cristo Atlético", visitante: "CD Numancia de Soria B", gLocal: 2, gVis: 0 },
{ jornada: 3, local: "SD Almazán", visitante: "CD Becerril", gLocal: 1, gVis: 1 },

// Jornada 4
{ jornada: 4, local: "CD Numancia de Soria B", visitante: "CD Mirandés B", gLocal: 0, gVis: 1 },
{ jornada: 4, local: "UD Santa Marta de Tormes", visitante: "Unionistas de Salamanca CF B", gLocal: 2, gVis: 2 },
{ jornada: 4, local: "Atlético Mansillés", visitante: "CD Villaralbo", gLocal: 1, gVis: 0 },
{ jornada: 4, local: "CD La Virgen del Camino", visitante: "CD Colegios Diocesanos", gLocal: 0, gVis: 0 },
{ jornada: 4, local: "Atlético Tordesillas", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 1 },
{ jornada: 4, local: "Arandina CF", visitante: "Júpiter Leonés", gLocal: 0, gVis: 1 },
{ jornada: 4, local: "Atlético Bembibre", visitante: "CD Guijuelo", gLocal: 1, gVis: 2 },
{ jornada: 4, local: "CD Becerril", visitante: "CD Mojados", gLocal: 3, gVis: 1 },
{ jornada: 4, local: "Palencia CF", visitante: "SD Almazán", gLocal: 1, gVis: 0 },

// Jornada 5
{ jornada: 5, local: "CD Colegios Diocesanos", visitante: "UD Santa Marta de Tormes", gLocal: 0, gVis: 1 },
{ jornada: 5, local: "CD Mojados", visitante: "Palencia CF", gLocal: 0, gVis: 0 },
{ jornada: 5, local: "CD Numancia de Soria B", visitante: "Atlético Tordesillas", gLocal: 0, gVis: 2 },
{ jornada: 5, local: "CD Villaralbo", visitante: "CD La Virgen del Camino", gLocal: 1, gVis: 0 },
{ jornada: 5, local: "CD Mirandés B", visitante: "SD Almazán", gLocal: 3, gVis: 0 },
{ jornada: 5, local: "Unionistas de Salamanca CF B", visitante: "Atlético Bembibre", gLocal: 3, gVis: 2 },
{ jornada: 5, local: "Júpiter Leonés", visitante: "CD Becerril", gLocal: 2, gVis: 1 },
{ jornada: 5, local: "CD Palencia Cristo Atlético", visitante: "Atlético Mansillés", gLocal: 1, gVis: 2 },
{ jornada: 5, local: "CD Guijuelo", visitante: "Arandina CF", gLocal: 2, gVis: 0 },

// Jornada 6
{ jornada: 6, local: "CD La Virgen del Camino", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 2 },
{ jornada: 6, local: "Atlético Tordesillas", visitante: "CD Mirandés B", gLocal: 1, gVis: 0 },
{ jornada: 6, local: "Atlético Mansillés", visitante: "CD Numancia de Soria B", gLocal: 0, gVis: 0 },
{ jornada: 6, local: "UD Santa Marta de Tormes", visitante: "CD Villaralbo", gLocal: 3, gVis: 0 },
{ jornada: 6, local: "SD Almazán", visitante: "CD Mojados", gLocal: 4, gVis: 1 },
{ jornada: 6, local: "Arandina CF", visitante: "Unionistas de Salamanca CF B", gLocal: 2, gVis: 1 },
{ jornada: 6, local: "Atlético Bembibre", visitante: "CD Colegios Diocesanos", gLocal: 0, gVis: 1 },
{ jornada: 6, local: "CD Becerril", visitante: "CD Guijuelo", gLocal: 1, gVis: 3 },
{ jornada: 6, local: "Palencia CF", visitante: "Júpiter Leonés", gLocal: 3, gVis: 2 },

// Jornada 7
{ jornada: 7, local: "CD Colegios Diocesanos", visitante: "Arandina CF", gLocal: 2, gVis: 0 },
{ jornada: 7, local: "CD Numancia de Soria B", visitante: "CD La Virgen del Camino", gLocal: 0, gVis: 1 },
{ jornada: 7, local: "CD Villaralbo", visitante: "Atlético Bembibre", gLocal: 0, gVis: 1 },
{ jornada: 7, local: "Unionistas de Salamanca CF B", visitante: "CD Becerril", gLocal: 1, gVis: 2 },
{ jornada: 7, local: "CD Mirandés B", visitante: "CD Mojados", gLocal: 0, gVis: 0 },
{ jornada: 7, local: "Júpiter Leonés", visitante: "SD Almazán", gLocal: 2, gVis: 3 },
{ jornada: 7, local: "CD Guijuelo", visitante: "Palencia CF", gLocal: 2, gVis: 1 },
{ jornada: 7, local: "Atlético Tordesillas", visitante: "Atlético Mansillés", gLocal: 2, gVis: 0 },
{ jornada: 7, local: "CD Palencia Cristo Atlético", visitante: "UD Santa Marta de Tormes", gLocal: 2, gVis: 1 },

// Jornada 8
{ jornada: 8, local: "CD Mojados", visitante: "Júpiter Leonés", gLocal: 1, gVis: 0 },
{ jornada: 8, local: "Atlético Mansillés", visitante: "CD Mirandés B", gLocal: 1, gVis: 0 },
{ jornada: 8, local: "CD La Virgen del Camino", visitante: "Atlético Tordesillas", gLocal: 0, gVis: 1 },
{ jornada: 8, local: "UD Santa Marta de Tormes", visitante: "CD Numancia de Soria B", gLocal: 1, gVis: 0 },
{ jornada: 8, local: "CD Becerril", visitante: "CD Colegios Diocesanos", gLocal: 0, gVis: 1 },
{ jornada: 8, local: "SD Almazán", visitante: "CD Guijuelo", gLocal: 1, gVis: 0 },
{ jornada: 8, local: "Arandina CF", visitante: "CD Villaralbo", gLocal: 2, gVis: 0 },
{ jornada: 8, local: "Palencia CF", visitante: "Unionistas de Salamanca CF B", gLocal: 3, gVis: 1 },
{ jornada: 8, local: "Atlético Bembibre", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 1 },

// Jornada 9
{ jornada: 9, local: "CD Colegios Diocesanos", visitante: "Palencia CF", gLocal: 1, gVis: 2 },
{ jornada: 9, local: "Unionistas de Salamanca CF B", visitante: "SD Almazán", gLocal: 1, gVis: 1 },
{ jornada: 9, local: "Atlético Mansillés", visitante: "CD La Virgen del Camino", gLocal: 2, gVis: 1 },
{ jornada: 9, local: "CD Numancia de Soria B", visitante: "Atlético Bembibre", gLocal: 0, gVis: 1 },
{ jornada: 9, local: "CD Villaralbo", visitante: "CD Becerril", gLocal: 2, gVis: 0 },
{ jornada: 9, local: "CD Guijuelo", visitante: "CD Mojados", gLocal: 1, gVis: 1 },
{ jornada: 9, local: "CD Palencia Cristo Atlético", visitante: "Arandina CF", gLocal: 1, gVis: 0 },
{ jornada: 9, local: "CD Mirandés B", visitante: "Júpiter Leonés", gLocal: 0, gVis: 1 },
{ jornada: 9, local: "Atlético Tordesillas", visitante: "UD Santa Marta de Tormes", gLocal: 2, gVis: 1 },

// Jornada 10
{ jornada: 10, local: "CD La Virgen del Camino", visitante: "CD Mirandés B", gLocal: 1, gVis: 1 },
{ jornada: 10, local: "Júpiter Leonés", visitante: "CD Guijuelo", gLocal: 1, gVis: 2 },
{ jornada: 10, local: "UD Santa Marta de Tormes", visitante: "Atlético Mansillés", gLocal: 2, gVis: 0 },
{ jornada: 10, local: "CD Mojados", visitante: "Unionistas de Salamanca CF B", gLocal: 1, gVis: 0 },
{ jornada: 10, local: "Arandina CF", visitante: "CD Numancia de Soria B", gLocal: 0, gVis: 0 },
{ jornada: 10, local: "Palencia CF", visitante: "CD Villaralbo", gLocal: 0, gVis: 0 },
{ jornada: 10, local: "CD Becerril", visitante: "CD Palencia Cristo Atlético", gLocal: 1, gVis: 1 },
{ jornada: 10, local: "Atlético Bembibre", visitante: "Atlético Tordesillas", gLocal: 0, gVis: 4 },
{ jornada: 10, local: "SD Almazán", visitante: "CD Colegios Diocesanos", gLocal: 0, gVis: 2 },

// Jornada 11
{ jornada: 11, local: "CD La Virgen del Camino", visitante: "UD Santa Marta de Tormes", gLocal: 0, gVis: 1 },
{ jornada: 11, local: "CD Mirandés B", visitante: "CD Guijuelo", gLocal: 0, gVis: 0 },
{ jornada: 11, local: "Atlético Mansillés", visitante: "Atlético Bembibre", gLocal: 1, gVis: 0 },
{ jornada: 11, local: "CD Numancia de Soria B", visitante: "CD Becerril", gLocal: 2, gVis: 1 },
{ jornada: 11, local: "CD Villaralbo", visitante: "SD Almazán", gLocal: 0, gVis: 0 },
{ jornada: 11, local: "CD Colegios Diocesanos", visitante: "CD Mojados", gLocal: 2, gVis: 2 },
{ jornada: 11, local: "Unionistas de Salamanca CF B", visitante: "Júpiter Leonés", gLocal: 0, gVis: 0 },
{ jornada: 11, local: "Atlético Tordesillas", visitante: "Arandina CF", gLocal: 3, gVis: 1 },
{ jornada: 11, local: "CD Palencia Cristo Atlético", visitante: "Palencia CF", gLocal: 1, gVis: 2 },

// Jornada 12
{ jornada: 12, local: "CD Mojados", visitante: "CD Villaralbo", gLocal: 1, gVis: 2 },
{ jornada: 12, local: "Júpiter Leonés", visitante: "CD Colegios Diocesanos", gLocal: 2, gVis: 2 },
{ jornada: 12, local: "UD Santa Marta de Tormes", visitante: "CD Mirandés B", gLocal: 0, gVis: 2 },
{ jornada: 12, local: "Arandina CF", visitante: "Atlético Mansillés", gLocal: 0, gVis: 0 },
{ jornada: 12, local: "Palencia CF", visitante: "CD Numancia de Soria B", gLocal: 2, gVis: 0 },
{ jornada: 12, local: "CD Becerril", visitante: "Atlético Tordesillas", gLocal: 2, gVis: 3 },
{ jornada: 12, local: "SD Almazán", visitante: "CD Palencia Cristo Atlético", gLocal: 1, gVis: 1 },
{ jornada: 12, local: "Atlético Bembibre", visitante: "CD La Virgen del Camino", gLocal: 1, gVis: 2 },
{ jornada: 12, local: "CD Guijuelo", visitante: "Unionistas de Salamanca CF B", gLocal: 1, gVis: 0 },

// Jornada 13
{ jornada: 13, local: "CD Mirandés B", visitante: "Unionistas de Salamanca CF B", gLocal: 3, gVis: 1 },
{ jornada: 13, local: "CD La Virgen del Camino", visitante: "Arandina CF", gLocal: 1, gVis: 1 },
{ jornada: 13, local: "Atlético Mansillés", visitante: "CD Becerril", gLocal: 2, gVis: 2 },
{ jornada: 13, local: "Atlético Tordesillas", visitante: "Palencia CF", gLocal: 1, gVis: 0 },
{ jornada: 13, local: "CD Numancia de Soria B", visitante: "SD Almazán", gLocal: 0, gVis: 2 },
{ jornada: 13, local: "CD Villaralbo", visitante: "Júpiter Leonés", gLocal: 0, gVis: 0 },
{ jornada: 13, local: "CD Colegios Diocesanos", visitante: "CD Guijuelo", gLocal: 0, gVis: 1 },
{ jornada: 13, local: "UD Santa Marta de Tormes", visitante: "Atlético Bembibre", gLocal: 2, gVis: 0 },
{ jornada: 13, local: "CD Palencia Cristo Atlético", visitante: "CD Mojados", gLocal: 3, gVis: 0 },

// Jornada 14
{ jornada: 14, local: "Palencia CF", visitante: "Atlético Mansillés", gLocal: 1, gVis: 1 },
{ jornada: 14, local: "CD Mojados", visitante: "CD Numancia de Soria B", gLocal: 3, gVis: 2 },
{ jornada: 14, local: "Júpiter Leonés", visitante: "CD Palencia Cristo Atlético", gLocal: 2, gVis: 1 },
{ jornada: 14, local: "Unionistas de Salamanca CF B", visitante: "CD Colegios Diocesanos", gLocal: 1, gVis: 2 },
{ jornada: 14, local: "Arandina CF", visitante: "UD Santa Marta de Tormes", gLocal: 0, gVis: 1 },
{ jornada: 14, local: "CD Becerril", visitante: "CD La Virgen del Camino", gLocal: 1, gVis: 2 },
{ jornada: 14, local: "SD Almazán", visitante: "Atlético Tordesillas", gLocal: 1, gVis: 1 },
{ jornada: 14, local: "CD Guijuelo", visitante: "CD Villaralbo", gLocal: 1, gVis: 0 },
{ jornada: 14, local: "Atlético Bembibre", visitante: "CD Mirandés B", gLocal: 1, gVis: 0 },

// Jornada 15
{ jornada: 15, local: "CD Mirandés B", visitante: "CD Colegios Diocesanos", gLocal: 3, gVis: 0 },
{ jornada: 15, local: "CD La Virgen del Camino", visitante: "Palencia CF", gLocal: 2, gVis: 0 },
{ jornada: 15, local: "CD Villaralbo", visitante: "Unionistas de Salamanca CF B", gLocal: 0, gVis: 0 },
{ jornada: 15, local: "UD Santa Marta de Tormes", visitante: "CD Becerril", gLocal: 5, gVis: 0 },
{ jornada: 15, local: "Atlético Bembibre", visitante: "Arandina CF", gLocal: 1, gVis: 1 },
{ jornada: 15, local: "CD Palencia Cristo Atlético", visitante: "CD Guijuelo", gLocal: 1, gVis: 2 },
{ jornada: 15, local: "Atlético Tordesillas", visitante: "CD Mojados", gLocal: 4, gVis: 1 },
{ jornada: 15, local: "CD Numancia de Soria B", visitante: "Júpiter Leonés", gLocal: 2, gVis: 1 },
{ jornada: 15, local: "Atlético Mansillés", visitante: "SD Almazán", gLocal: 1, gVis: 1 },

// Jornada 16
{ jornada: 16, local: "CD Mirandés B", visitante: "Arandina CF", gLocal: 3, gVis: 0 },
{ jornada: 16, local: "Unionistas de Salamanca CF B", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 0 },
{ jornada: 16, local: "SD Almazán", visitante: "CD La Virgen del Camino", gLocal: 0, gVis: 0 },
{ jornada: 16, local: "Palencia CF", visitante: "UD Santa Marta de Tormes", gLocal: 2, gVis: 1 },
{ jornada: 16, local: "CD Becerril", visitante: "Atlético Bembibre", gLocal: 2, gVis: 1 },
{ jornada: 16, local: "Júpiter Leonés", visitante: "Atlético Tordesillas", gLocal: 1, gVis: 1 },
{ jornada: 16, local: "CD Colegios Diocesanos", visitante: "CD Villaralbo", gLocal: 1, gVis: 2 },
{ jornada: 16, local: "CD Mojados", visitante: "Atlético Mansillés", gLocal: 1, gVis: 1 },
{ jornada: 16, local: "CD Guijuelo", visitante: "CD Numancia de Soria B", gLocal: 3, gVis: 0 },

// Jornada 17
{ jornada: 17, local: "CD La Virgen del Camino", visitante: "CD Mojados", gLocal: 2, gVis: 0 },
{ jornada: 17, local: "Atlético Mansillés", visitante: "Júpiter Leonés", gLocal: 1, gVis: 0 },
{ jornada: 17, local: "CD Numancia de Soria B", visitante: "Unionistas de Salamanca CF B", gLocal: 2, gVis: 0 },
{ jornada: 17, local: "CD Villaralbo", visitante: "CD Mirandés B", gLocal: 1, gVis: 1 },
{ jornada: 17, local: "UD Santa Marta de Tormes", visitante: "SD Almazán", gLocal: 3, gVis: 2 },
{ jornada: 17, local: "Arandina CF", visitante: "CD Becerril", gLocal: 1, gVis: 0 },
{ jornada: 17, local: "Atlético Tordesillas", visitante: "CD Guijuelo", gLocal: 0, gVis: 0 },
{ jornada: 17, local: "Atlético Bembibre", visitante: "Palencia CF", gLocal: 1, gVis: 4 },
{ jornada: 17, local: "CD Palencia Cristo Atlético", visitante: "CD Colegios Diocesanos", gLocal: 3, gVis: 1 },

// Jornada 18
{ jornada: 18, local: "CD La Virgen del Camino", visitante: "Júpiter Leonés", gLocal: 1, gVis: 0 },
{ jornada: 18, local: "UD Santa Marta de Tormes", visitante: "CD Mojados", gLocal: 1, gVis: 0 },
{ jornada: 18, local: "CD Numancia de Soria B", visitante: "CD Colegios Diocesanos", gLocal: 6, gVis: 1 }, // aplazado
{ jornada: 18, local: "Arandina CF", visitante: "Palencia CF", gLocal: 0, gVis: 1 },
{ jornada: 18, local: "Atlético Tordesillas", visitante: "Unionistas de Salamanca CF B", gLocal: 2, gVis: 0 },
{ jornada: 18, local: "Atlético Mansillés", visitante: "CD Guijuelo", gLocal: 2, gVis: 1 },
{ jornada: 18, local: "Atlético Bembibre", visitante: "SD Almazán", gLocal: 2, gVis: 2 },
{ jornada: 18, local: "CD Becerril", visitante: "CD Mirandés B", gLocal: 0, gVis: 1 },
{ jornada: 18, local: "CD Palencia Cristo Atlético", visitante: "CD Villaralbo", gLocal: 2, gVis: 0 },

// Jornada 19
{ jornada: 19, local: "CD Mirandés B", visitante: "CD Palencia Cristo Atlético", gLocal: 2, gVis: 1 },
{ jornada: 19, local: "Júpiter Leonés", visitante: "UD Santa Marta de Tormes", gLocal: 1, gVis: 0 },
{ jornada: 19, local: "CD Villaralbo", visitante: "CD Numancia de Soria B", gLocal: 3, gVis: 1 },
{ jornada: 19, local: "Palencia CF", visitante: "CD Becerril", gLocal: 2, gVis: 1 },
{ jornada: 19, local: "CD Guijuelo", visitante: "CD La Virgen del Camino", gLocal: 3, gVis: 1 },
{ jornada: 19, local: "SD Almazán", visitante: "Arandina CF", gLocal: 1, gVis: 3 },
{ jornada: 19, local: "CD Colegios Diocesanos", visitante: "Atlético Tordesillas", gLocal: 3, gVis: 2 },
{ jornada: 19, local: "Unionistas de Salamanca CF B", visitante: "Atlético Mansillés", gLocal: 2, gVis: 2 },
{ jornada: 19, local: "CD Mojados", visitante: "Atlético Bembibre", gLocal: 0, gVis: 0 },

// Jornada 20
{ jornada: 20, local: "UD Santa Marta de Tormes", visitante: "CD Guijuelo", gLocal: 1, gVis: 0 },
{ jornada: 20, local: "CD Numancia de Soria B", visitante: "CD Palencia Cristo Atlético", gLocal: 1, gVis: 0 },
{ jornada: 20, local: "Atlético Mansillés", visitante: "CD Colegios Diocesanos", gLocal: 1, gVis: 0 },
{ jornada: 20, local: "Arandina CF", visitante: "CD Mojados", gLocal: 1, gVis: 1 },
{ jornada: 20, local: "Palencia CF", visitante: "CD Mirandés B", gLocal: 3, gVis: 1 },
{ jornada: 20, local: "Atlético Tordesillas", visitante: "CD Villaralbo", gLocal: 3, gVis: 1 },
{ jornada: 20, local: "Atlético Bembibre", visitante: "Júpiter Leonés", gLocal: 0, gVis: 1 },
{ jornada: 20, local: "CD Becerril", visitante: "SD Almazán", gLocal: 1, gVis: 3 },
{ jornada: 20, local: "CD La Virgen del Camino", visitante: "Unionistas de Salamanca CF B", gLocal: 1, gVis: 1 },

// Jornada 21
{ jornada: 21, local: "CD Mirandés B", visitante: "CD Numancia de Soria B", gLocal: 2, gVis: 0 },
{ jornada: 21, local: "CD Colegios Diocesanos", visitante: "CD La Virgen del Camino", gLocal: 0, gVis: 1 },
{ jornada: 21, local: "Unionistas de Salamanca CF B", visitante: "UD Santa Marta de Tormes", gLocal: 0, gVis: 0 },
{ jornada: 21, local: "Júpiter Leonés", visitante: "Arandina CF", gLocal: 3, gVis: 0 },
{ jornada: 21, local: "CD Villaralbo", visitante: "Atlético Mansillés", gLocal: 1, gVis: 0 },
{ jornada: 21, local: "CD Mojados", visitante: "CD Becerril", gLocal: 1, gVis: 0 },
{ jornada: 21, local: "CD Palencia Cristo Atlético", visitante: "Atlético Tordesillas", gLocal: 0, gVis: 0 },
{ jornada: 21, local: "CD Guijuelo", visitante: "Atlético Bembibre", gLocal: 0, gVis: 0 },
{ jornada: 21, local: "SD Almazán", visitante: "Palencia CF", gLocal: 3, gVis: 1 },

// Jornada 22
{ jornada: 22, local: "UD Santa Marta de Tormes", visitante: "CD Colegios Diocesanos", gLocal: 0, gVis: 0 },
{ jornada: 22, local: "Atlético Mansillés", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 2 },
{ jornada: 22, local: "SD Almazán", visitante: "CD Mirandés B", gLocal: 1, gVis: 1 },
{ jornada: 22, local: "Atlético Tordesillas", visitante: "CD Numancia de Soria B", gLocal: 3, gVis: 0 },
{ jornada: 22, local: "Atlético Bembibre", visitante: "Unionistas de Salamanca CF B", gLocal: 0, gVis: 0 },
{ jornada: 22, local: "Arandina CF", visitante: "CD Guijuelo", gLocal: 1, gVis: 2 },
{ jornada: 22, local: "CD Becerril", visitante: "Júpiter Leonés", gLocal: 2, gVis: 1 },
{ jornada: 22, local: "Palencia CF", visitante: "CD Mojados", gLocal: 2, gVis: 0 },
{ jornada: 22, local: "CD La Virgen del Camino", visitante: "CD Villaralbo", gLocal: 1, gVis: 0 },

// Jornada 23
{ jornada: 23, local: "CD Mirandés B", visitante: "Atlético Tordesillas", gLocal: 0, gVis: 1 },
{ jornada: 23, local: "Unionistas de Salamanca CF B", visitante: "Arandina CF", gLocal: 2, gVis: 2 },
{ jornada: 23, local: "CD Colegios Diocesanos", visitante: "Atlético Bembibre", gLocal: 2, gVis: 1 },
{ jornada: 23, local: "Júpiter Leonés", visitante: "Palencia CF", gLocal: 2, gVis: 2 },
{ jornada: 23, local: "CD Numancia de Soria B", visitante: "Atlético Mansillés", gLocal: 0, gVis: 1 },
{ jornada: 23, local: "CD Villaralbo", visitante: "UD Santa Marta de Tormes", gLocal: 0, gVis: 1 },
{ jornada: 23, local: "CD Guijuelo", visitante: "CD Becerril", gLocal: 2, gVis: 1 },
{ jornada: 23, local: "CD Mojados", visitante: "SD Almazán", gLocal: 1, gVis: 1 },
{ jornada: 23, local: "CD Palencia Cristo Atlético", visitante: "CD La Virgen del Camino", gLocal: 0, gVis: 1 },

// Jornada 24
{ jornada: 24, local: "CD Mojados", visitante: "CD Mirandés B", gLocal: 1, gVis: 2 },
{ jornada: 24, local: "CD La Virgen del Camino", visitante: "CD Numancia de Soria B", gLocal: 0, gVis: 2 },
{ jornada: 24, local: "UD Santa Marta de Tormes", visitante: "CD Palencia Cristo Atlético", gLocal: 1, gVis: 2 },
{ jornada: 24, local: "Atlético Bembibre", visitante: "CD Villaralbo", gLocal: 1, gVis: 0 },
{ jornada: 24, local: "Atlético Mansillés", visitante: "Atlético Tordesillas", gLocal: 0, gVis: 4 },
{ jornada: 24, local: "Arandina CF", visitante: "CD Colegios Diocesanos", gLocal: 2, gVis: 0 },
{ jornada: 24, local: "Palencia CF", visitante: "CD Guijuelo", gLocal: 1, gVis: 2 },
{ jornada: 24, local: "CD Becerril", visitante: "Unionistas de Salamanca CF B", gLocal: 3, gVis: 3 },
{ jornada: 24, local: "SD Almazán", visitante: "Júpiter Leonés", gLocal: 3, gVis: 0 },

// Jornada 25
{ jornada: 25, local: "CD Mirandés B", visitante: "Atlético Mansillés", gLocal: 0, gVis: 0 },
{ jornada: 25, local: "Júpiter Leonés", visitante: "CD Mojados", gLocal: 2, gVis: 0 },
{ jornada: 25, local: "CD Guijuelo", visitante: "SD Almazán", gLocal: 0, gVis: 2 },
{ jornada: 25, local: "CD Palencia Cristo Atlético", visitante: "Atlético Bembibre", gLocal: 2, gVis: 0 },
{ jornada: 25, local: "CD Villaralbo", visitante: "Arandina CF", gLocal: 2, gVis: 0 },
{ jornada: 25, local: "CD Colegios Diocesanos", visitante: "CD Becerril", gLocal: 1, gVis: 5 },
{ jornada: 25, local: "Unionistas de Salamanca CF B", visitante: "Palencia CF", gLocal: 0, gVis: 1 },
{ jornada: 25, local: "CD Numancia de Soria B", visitante: "UD Santa Marta de Tormes", gLocal: 1, gVis: 3 },
{ jornada: 25, local: "Atlético Tordesillas", visitante: "CD La Virgen del Camino", gLocal: 1, gVis: 0 },

// Jornada 26
// Jornada 26
{ jornada: 26, local: "CD La Virgen del Camino", visitante: "Atlético Mansillés", gLocal: 0, gVis: 0 },
{ jornada: 26, local: "UD Santa Marta de Tormes", visitante: "Atlético Tordesillas", gLocal: 1, gVis: 2 },
{ jornada: 26, local: "Palencia CF", visitante: "CD Colegios Diocesanos", gLocal: 2, gVis: 1 },
{ jornada: 26, local: "Atlético Bembibre", visitante: "CD Numancia de Soria B", gLocal: 2, gVis: 0 },
{ jornada: 26, local: "Arandina CF", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 2 },
{ jornada: 26, local: "Júpiter Leonés", visitante: "CD Mirandés B", gLocal: 2, gVis: 0 },
{ jornada: 26, local: "SD Almazán", visitante: "Unionistas de Salamanca CF B", gLocal: 3, gVis: 0 },
{ jornada: 26, local: "CD Becerril", visitante: "CD Villaralbo", gLocal: 0, gVis: 0 },
{ jornada: 26, local: "CD Mojados", visitante: "CD Guijuelo", gLocal: 3, gVis: 1 },

// Jornada 27
{ jornada: 27, local: "CD Villaralbo", visitante: "Palencia CF", gLocal: 3, gVis: 2 },
{ jornada: 27, local: "CD Mirandés B", visitante: "CD La Virgen del Camino", gLocal: 1, gVis: 1 },
{ jornada: 27, local: "Atlético Mansillés", visitante: "UD Santa Marta de Tormes", gLocal: 2, gVis: 0 },
{ jornada: 27, local: "Atlético Tordesillas", visitante: "Atlético Bembibre", gLocal: 4, gVis: 1 },
{ jornada: 27, local: "CD Numancia de Soria B", visitante: "Arandina CF", gLocal: 0, gVis: 2 },
{ jornada: 27, local: "CD Palencia Cristo Atlético", visitante: "CD Becerril", gLocal: 1, gVis: 1 },
{ jornada: 27, local: "CD Colegios Diocesanos", visitante: "SD Almazán", gLocal: 1, gVis: 0 },
{ jornada: 27, local: "Unionistas de Salamanca CF B", visitante: "CD Mojados", gLocal: 3, gVis: 1 },
{ jornada: 27, local: "CD Guijuelo", visitante: "Júpiter Leonés", gLocal: 4, gVis: 0 },

// Jornada 28
{ jornada: 28, local: "UD Santa Marta de Tormes", visitante: "CD La Virgen del Camino", gLocal: 4, gVis: 0 },
{ jornada: 28, local: "Atlético Bembibre", visitante: "Atlético Mansillés", gLocal: 1, gVis: 1 },
{ jornada: 28, local: "Arandina CF", visitante: "Atlético Tordesillas", gLocal: 1, gVis: 2 },
{ jornada: 28, local: "CD Becerril", visitante: "CD Numancia de Soria B", gLocal: 1, gVis: 1 },
{ jornada: 28, local: "Palencia CF", visitante: "CD Palencia Cristo Atlético", gLocal: 0, gVis: 1 },
{ jornada: 28, local: "SD Almazán", visitante: "CD Villaralbo", gLocal: 2, gVis: 1 },
{ jornada: 28, local: "CD Mojados", visitante: "CD Colegios Diocesanos", gLocal: 0, gVis: 1 },
{ jornada: 28, local: "Júpiter Leonés", visitante: "Unionistas de Salamanca CF B", gLocal: 0, gVis: 4 },
{ jornada: 28, local: "CD Guijuelo", visitante: "CD Mirandés B", gLocal: 1, gVis: 0 },

// Jornada 29
{ jornada: 29, local: "CD Mirandés B", visitante: "UD Santa Marta de Tormes", gLocal: 2, gVis: 3 },
{ jornada: 29, local: "CD La Virgen del Camino", visitante: "Atlético Bembibre", gLocal: 3, gVis: 1 },
{ jornada: 29, local: "Atlético Mansillés", visitante: "Arandina CF", gLocal: 1, gVis: 1 },
{ jornada: 29, local: "Atlético Tordesillas", visitante: "CD Becerril", gLocal: 2, gVis: 1 },
{ jornada: 29, local: "CD Numancia de Soria B", visitante: "Palencia CF", gLocal: 2, gVis: 3 },
{ jornada: 29, local: "CD Palencia Cristo Atlético", visitante: "SD Almazán", gLocal: 4, gVis: 2 },
{ jornada: 29, local: "CD Villaralbo", visitante: "CD Mojados", gLocal: 1, gVis: 1 },
{ jornada: 29, local: "CD Colegios Diocesanos", visitante: "Júpiter Leonés", gLocal: 0, gVis: 3 },
{ jornada: 29, local: "Unionistas de Salamanca CF B", visitante: "CD Guijuelo", gLocal: 1, gVis: 2 },

// Jornada 30
{ jornada: 30, local: "Atlético Bembibre", visitante: "UD Santa Marta de Tormes", gLocal: 2, gVis: 2 },
{ jornada: 30, local: "Arandina CF", visitante: "CD La Virgen del Camino", gLocal: 3, gVis: 1 },
{ jornada: 30, local: "CD Becerril", visitante: "Atlético Mansillés", gLocal: 0, gVis: 2 },
{ jornada: 30, local: "Palencia CF", visitante: "Atlético Tordesillas", gLocal: 1, gVis: 2 },
{ jornada: 30, local: "SD Almazán", visitante: "CD Numancia de Soria B", gLocal: 5, gVis: 0 },
{ jornada: 30, local: "CD Mojados", visitante: "CD Palencia Cristo Atlético", gLocal: 1, gVis: 2 },
{ jornada: 30, local: "Júpiter Leonés", visitante: "CD Villaralbo", gLocal: 1, gVis: 2 },
{ jornada: 30, local: "CD Guijuelo", visitante: "CD Colegios Diocesanos", gLocal: 4, gVis: 0 },
{ jornada: 30, local: "Unionistas de Salamanca CF B", visitante: "CD Mirandés B", gLocal: 1, gVis: 2 },

// Jornada 31
{ jornada: 31, local: "CD Mirandés B", visitante: "Atlético Bembibre", gLocal: 2, gVis: 2 },
{ jornada: 31, local: "UD Santa Marta de Tormes", visitante: "Arandina CF", gLocal: 1, gVis: 1 },
{ jornada: 31, local: "CD La Virgen del Camino", visitante: "CD Becerril", gLocal: 0, gVis: 1 },
{ jornada: 31, local: "Atlético Mansillés", visitante: "Palencia CF", gLocal: 2, gVis: 1 },
{ jornada: 31, local: "Atlético Tordesillas", visitante: "SD Almazán", gLocal: 1, gVis: 0 },
{ jornada: 31, local: "CD Numancia de Soria B", visitante: "CD Mojados", gLocal: 1, gVis: 1 },
{ jornada: 31, local: "CD Palencia Cristo Atlético", visitante: "Júpiter Leonés", gLocal: 1, gVis: 0 },
{ jornada: 31, local: "CD Villaralbo", visitante: "CD Guijuelo", gLocal: 1, gVis: 1 },
{ jornada: 31, local: "CD Colegios Diocesanos", visitante: "Unionistas de Salamanca CF B", gLocal: 0, gVis: 1 },

// Jornada 32
{ jornada: 32, local: "Arandina CF", visitante: "Atlético Bembibre", gLocal: null, gVis: null },
{ jornada: 32, local: "CD Becerril", visitante: "UD Santa Marta de Tormes", gLocal: null, gVis: null },
{ jornada: 32, local: "Palencia CF", visitante: "CD La Virgen del Camino", gLocal: null, gVis: null },
{ jornada: 32, local: "SD Almazán", visitante: "Atlético Mansillés", gLocal: null, gVis: null },
{ jornada: 32, local: "CD Mojados", visitante: "Atlético Tordesillas", gLocal: null, gVis: null },
{ jornada: 32, local: "Júpiter Leonés", visitante: "CD Numancia de Soria B", gLocal: null, gVis: null },
{ jornada: 32, local: "CD Guijuelo", visitante: "CD Palencia Cristo Atlético", gLocal: null, gVis: null },
{ jornada: 32, local: "Unionistas de Salamanca CF B", visitante: "CD Villaralbo", gLocal: null, gVis: null },
{ jornada: 32, local: "CD Colegios Diocesanos", visitante: "CD Mirandés B", gLocal: null, gVis: null },

// Jornada 33
{ jornada: 33, local: "Arandina CF", visitante: "CD Mirandés B", gLocal: null, gVis: null },
{ jornada: 33, local: "Atlético Bembibre", visitante: "CD Becerril", gLocal: null, gVis: null },
{ jornada: 33, local: "UD Santa Marta de Tormes", visitante: "Palencia CF", gLocal: null, gVis: null },
{ jornada: 33, local: "CD La Virgen del Camino", visitante: "SD Almazán", gLocal: null, gVis: null },
{ jornada: 33, local: "Atlético Mansillés", visitante: "CD Mojados", gLocal: null, gVis: null },
{ jornada: 33, local: "Atlético Tordesillas", visitante: "Júpiter Leonés", gLocal: null, gVis: null },
{ jornada: 33, local: "CD Numancia de Soria B", visitante: "CD Guijuelo", gLocal: null, gVis: null },
{ jornada: 33, local: "CD Palencia Cristo Atlético", visitante: "Unionistas de Salamanca CF B", gLocal: null, gVis: null },
{ jornada: 33, local: "CD Villaralbo", visitante: "CD Colegios Diocesanos", gLocal: null, gVis: null },

// Jornada 34
{ jornada: 34, local: "CD Becerril", visitante: "Arandina CF", gLocal: null, gVis: null },
{ jornada: 34, local: "Palencia CF", visitante: "Atlético Bembibre", gLocal: null, gVis: null },
{ jornada: 34, local: "SD Almazán", visitante: "UD Santa Marta de Tormes", gLocal: null, gVis: null },
{ jornada: 34, local: "CD Mojados", visitante: "CD La Virgen del Camino", gLocal: null, gVis: null },
{ jornada: 34, local: "Júpiter Leonés", visitante: "Atlético Mansillés", gLocal: null, gVis: null },
{ jornada: 34, local: "CD Guijuelo", visitante: "Atlético Tordesillas", gLocal: null, gVis: null },
{ jornada: 34, local: "Unionistas de Salamanca CF B", visitante: "CD Numancia de Soria B", gLocal: null, gVis: null },
{ jornada: 34, local: "CD Colegios Diocesanos", visitante: "CD Palencia Cristo Atlético", gLocal: null, gVis: null },
{ jornada: 34, local: "CD Mirandés B", visitante: "CD Villaralbo", gLocal: null, gVis: null },




];

let jornadasDisponibles = [];
let jornadaActual = 26;
let posicionesBaseJornada = {};
let simulacionFinalizada = false;

function crearTablaBase() {
  const tabla = {};
  for (let i = 0; i < equipos.length; i++) {
    const e = equipos[i];
    tabla[e] = {
      equipo: e,
      PJ: 0,
      PG: 0,
      PE: 0,
      PP: 0,
      GF: 0,
      GC: 0,
      PTS: 0,
      directos: {}
    };
  }
  return tabla;
}

function asegurarDirecto(tabla, eq1, eq2) {
  if (!tabla[eq1].directos[eq2]) {
    tabla[eq1].directos[eq2] = {
      partidos: 0,
      puntos: 0,
      gf: 0,
      gc: 0
    };
  }
}

function partidoJugado(p) {
  return Number.isInteger(p.gLocal) && Number.isInteger(p.gVis);
}

function jornadaCompleta(numeroJornada) {
  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada === numeroJornada && !partidoJugado(p)) {
      return false;
    }
  }
  return true;
}

function aplicarPartido(tabla, local, visitante, gl, gv) {
  const home = tabla[local];
  const away = tabla[visitante];

  home.PJ += 1;
  away.PJ += 1;

  home.GF += gl;
  home.GC += gv;
  away.GF += gv;
  away.GC += gl;

  asegurarDirecto(tabla, local, visitante);
  asegurarDirecto(tabla, visitante, local);

  tabla[local].directos[visitante].partidos += 1;
  tabla[visitante].directos[local].partidos += 1;

  tabla[local].directos[visitante].gf += gl;
  tabla[local].directos[visitante].gc += gv;
  tabla[visitante].directos[local].gf += gv;
  tabla[visitante].directos[local].gc += gl;

  if (gl > gv) {
    home.PG += 1;
    away.PP += 1;
    home.PTS += 3;
    tabla[local].directos[visitante].puntos += 3;
  } else if (gl < gv) {
    away.PG += 1;
    home.PP += 1;
    away.PTS += 3;
    tabla[visitante].directos[local].puntos += 3;
  } else {
    home.PE += 1;
    away.PE += 1;
    home.PTS += 1;
    away.PTS += 1;
    tabla[local].directos[visitante].puntos += 1;
    tabla[visitante].directos[local].puntos += 1;
  }
}

function compararPorGeneral(a, b) {
  const dgA = a.GF - a.GC;
  const dgB = b.GF - b.GC;

  if (dgB !== dgA) return dgB - dgA;
  if (b.GF !== a.GF) return b.GF - a.GF;

  return a.equipo.localeCompare(b.equipo, "es");
}

function compararDosEquipos(a, b) {
  if (b.PTS !== a.PTS) {
    return b.PTS - a.PTS;
  }

  const da = a.directos[b.equipo];
  const db = b.directos[a.equipo];

  // Solo vale el enfrentamiento directo si están jugados LOS DOS partidos
  if (da && db && da.partidos === 2 && db.partidos === 2) {
    if (db.puntos !== da.puntos) {
      return db.puntos - da.puntos;
    }

    const diffA = da.gf - da.gc;
    const diffB = db.gf - db.gc;
    if (diffB !== diffA) {
      return diffB - diffA;
    }

    if (db.gf !== da.gf) {
      return db.gf - da.gf;
    }
  }

  return compararPorGeneral(a, b);
}

function estanTodosLosPartidosMiniLiga(grupo) {
  const n = grupo.length;
  const partidosEsperadosPorEquipo = (n - 1) * 2;

  for (let i = 0; i < grupo.length; i++) {
    let jugados = 0;
    const eq = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;
      const rival = grupo[j];

      if (eq.directos[rival.equipo]) {
        jugados += eq.directos[rival.equipo].partidos;
      }
    }

    if (jugados !== partidosEsperadosPorEquipo) {
      return false;
    }
  }

  return true;
}

function crearMiniClasificacion(grupo) {
  const mini = {};

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];
    mini[e.equipo] = {
      equipo: e.equipo,
      PTS: 0,
      GF: 0,
      GC: 0
    };
  }

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;

      const rival = grupo[j];
      const dir = e.directos[rival.equipo];

      if (dir) {
        mini[e.equipo].PTS += dir.puntos;
        mini[e.equipo].GF += dir.gf;
        mini[e.equipo].GC += dir.gc;
      }
    }
  }

  return mini;
}

function ordenarGrupoEmpatado(grupo) {
  if (grupo.length === 1) return grupo;

  if (grupo.length === 2) {
    return grupo.slice().sort(compararDosEquipos);
  }

  // 3 o más empatados: miniclasificación SOLO si están todos los partidos
  if (estanTodosLosPartidosMiniLiga(grupo)) {
    const mini = crearMiniClasificacion(grupo);

    return grupo.slice().sort((a, b) => {
      const ma = mini[a.equipo];
      const mb = mini[b.equipo];

      if (mb.PTS !== ma.PTS) {
        return mb.PTS - ma.PTS;
      }

      const dgMiniA = ma.GF - ma.GC;
      const dgMiniB = mb.GF - mb.GC;
      if (dgMiniB !== dgMiniA) {
        return dgMiniB - dgMiniA;
      }

      if (mb.GF !== ma.GF) {
        return mb.GF - ma.GF;
      }

      return compararPorGeneral(a, b);
    });
  }

  // Si no está completa la miniliga, ir a DG general
  return grupo.slice().sort(compararPorGeneral);
}

function ordenarClasificacionConEmpates(clasificacionBase) {
  const grupos = [];
  let grupoActual = [];

  for (let i = 0; i < clasificacionBase.length; i++) {
    const equipo = clasificacionBase[i];

    if (grupoActual.length === 0) {
      grupoActual.push(equipo);
      continue;
    }

    if (equipo.PTS === grupoActual[0].PTS) {
      grupoActual.push(equipo);
    } else {
      grupos.push(grupoActual);
      grupoActual = [equipo];
    }
  }

  if (grupoActual.length > 0) {
    grupos.push(grupoActual);
  }

  let resultado = [];
  for (let i = 0; i < grupos.length; i++) {
    resultado = resultado.concat(ordenarGrupoEmpatado(grupos[i]));
  }

  return resultado;
}

function obtenerPosicionesClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  const clasificacion = ordenarClasificacionConEmpates(clasificacionBase);
  const posiciones = {};

  for (let i = 0; i < clasificacion.length; i++) {
    posiciones[clasificacion[i].equipo] = i + 1;
  }

  return posiciones;
}

function reiniciarReferenciaJornada() {
  posicionesBaseJornada = obtenerPosicionesClasificacionActual();
}

function construirListaJornadas() {
  jornadasDisponibles = [];
  for (let i = 0; i < partidos.length; i++) {
    if (!jornadasDisponibles.includes(partidos[i].jornada)) {
      jornadasDisponibles.push(partidos[i].jornada);
    }
  }
  jornadasDisponibles.sort(function (a, b) {
    return a - b;
  });
}

function obtenerPrimeraJornadaPendiente() {
  construirListaJornadas();

  for (let j = 0; j < jornadasDisponibles.length; j++) {
    const numeroJornada = jornadasDisponibles[j];

    for (let i = 0; i < partidos.length; i++) {
      const p = partidos[i];
      if (p.jornada === numeroJornada && !partidoJugado(p)) {
        return numeroJornada;
      }
    }
  }

  // Si todas están completas, ir a la última
  return jornadasDisponibles[jornadasDisponibles.length - 1];
}

function mostrarPartidos() {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  construirListaJornadas();

  if (!jornadasDisponibles.includes(jornadaActual)) {
    jornadaActual = jornadasDisponibles[0];
  }

  contenedor.innerHTML = "";

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Jornada " + jornadaActual;
  }

  const bloque = document.createElement("div");
  bloque.className = "bloque-jornada";

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada !== jornadaActual) continue;

    const fila = document.createElement("div");
    fila.className = "fila-partido";

    const spanLocal = document.createElement("span");
spanLocal.className = "equipo-local";
spanLocal.innerHTML =
  `<img class="escudo" src="${obtenerEscudo(p.local)}" alt="${p.local}">
   <span>${p.local}${p.aplazado ? " *" : ""}</span>`;

    const inputLocal = document.createElement("input");
    inputLocal.type = "number";
    inputLocal.min = "0";
    inputLocal.id = "gl" + i;
    inputLocal.value = partidoJugado(p) ? p.gLocal : "";

    const guion = document.createElement("span");
    guion.className = "guion";
    guion.textContent = "-";

    const inputVis = document.createElement("input");
    inputVis.type = "number";
    inputVis.min = "0";
    inputVis.id = "gv" + i;
    inputVis.value = partidoJugado(p) ? p.gVis : "";

    const spanVis = document.createElement("span");
spanVis.className = "equipo-visitante";
spanVis.innerHTML =
  `<img class="escudo" src="${obtenerEscudo(p.visitante)}" alt="${p.visitante}">
   <span>${p.visitante}${p.aplazado ? " *" : ""}</span>`;

    fila.appendChild(spanLocal);
    fila.appendChild(inputLocal);
    fila.appendChild(guion);
    fila.appendChild(inputVis);
    fila.appendChild(spanVis);

    bloque.appendChild(fila);

if (p.aplazado) {
  const nota = document.createElement("div");
  nota.className = "nota-aplazado";
  nota.textContent = "* Partido aplazado";
  bloque.appendChild(nota);
}
  }

  contenedor.appendChild(bloque);

  const inputs = contenedor.querySelectorAll('input[type="number"]');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    leerResultados();
    calcularClasificacion();
    actualizarBotonesJornada();
  });
}

  actualizarBotonesJornada();
}

function leerResultados() {
  for (let i = 0; i < partidos.length; i++) {
    const gl = document.getElementById("gl" + i);
    const gv = document.getElementById("gv" + i);

    if (!gl || !gv) continue;

    const valorLocal = gl.value.trim();
    const valorVis = gv.value.trim();

    partidos[i].gLocal = valorLocal === "" ? null : parseInt(valorLocal, 10);
    partidos[i].gVis = valorVis === "" ? null : parseInt(valorVis, 10);
  }

  actualizarBotonesJornada();
}

function obtenerClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  return ordenarClasificacionConEmpates(clasificacionBase);
}

function renderizarResumenFinal(clasificacion) {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  const campeon = clasificacion[0];
  const playoff = clasificacion.slice(1, 5);
  const arrastre = clasificacion.slice(13, 15);
  const descenso = clasificacion.slice(-3);

  function renderEquipoResumen(equipo) {
    return `
      <span class="equipo-resumen">
        <img class="escudo" src="${obtenerEscudo(equipo.equipo)}" alt="${equipo.equipo}">
        <span>${equipo.equipo}</span>
      </span>
    `;
  }

  contenedor.innerHTML = `
    <div class="resumen-final">
      <h3>Resumen final de la liga</h3>

      <div class="linea-resumen">
        <span class="punto-resumen punto-verde"></span>
        <div>
          <strong>Asciende a 2ª RFEF:</strong>
          ${renderEquipoResumen(campeon)}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-naranja"></span>
        <div>
          <strong>Play-off:</strong>
          ${playoff.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-morado"></span>
        <div>
          <strong>Posibles arrastres:</strong>
          ${arrastre.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-rojo"></span>
        <div>
          <strong>Descienden a Regional:</strong>
          ${descenso.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="mensaje-final">
        Descarga y envía a Juandi tu pronóstico y a final de temporada comprobará tu acierto
      </div>

      <button class="btn-descargar" onclick="descargarClasificacionFinal()">
        Descargar clasificación
      </button>
    </div>
  `;
}

function animarCambiosTabla(tbody, posicionesAntes) {
  const filas = tbody.querySelectorAll("tr");

  filas.forEach((fila) => {
    const equipo = fila.dataset.equipo;
    const topAntes = posicionesAntes[equipo];

    if (topAntes === undefined) return;

    const topDespues = fila.getBoundingClientRect().top;
    const deltaY = topAntes - topDespues;

    if (deltaY !== 0) {
      fila.classList.add("fila-animando");
      fila.style.transition = "none";
      fila.style.transform = `translateY(${deltaY}px)`;

      requestAnimationFrame(() => {
        fila.style.transition = "transform 500ms ease";
        fila.style.transform = "translateY(0)";
      });

      fila.addEventListener(
        "transitionend",
        () => {
          fila.classList.remove("fila-animando");
          fila.style.transition = "";
          fila.style.transform = "";
        },
        { once: true }
      );
    }
  });
}

function calcularClasificacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();

  const tbody = document.querySelector("#tabla-clasificacion tbody");

  const posicionesAntes = {};
  const filasActuales = tbody.querySelectorAll("tr");
  filasActuales.forEach((fila) => {
    posicionesAntes[fila.dataset.equipo] = fila.getBoundingClientRect().top;
  });

  tbody.innerHTML = "";

  for (let i = 0; i < clasificacion.length; i++) {
    const e = clasificacion[i];
    const tr = document.createElement("tr");
    tr.dataset.equipo = e.equipo;

    if (i === 0) {
  tr.classList.add("pos-ascenso");
} else if (i >= 1 && i <= 4) {
  tr.classList.add("pos-playoff");
} else if (i === 12) {
  tr.classList.add("pos-playout");
} else if (i === 13 || i === 14) {
  tr.classList.add("pos-arrastre");
} else if (i >= 15) {
  tr.classList.add("pos-descenso");
}

    let flecha = "";
    const posicionBase = posicionesBaseJornada[e.equipo];
    const posicionActual = i + 1;

    if (posicionBase !== undefined) {
      if (posicionActual < posicionBase) {
        flecha = '<span class="flecha-sube">▲</span>';
      } else if (posicionActual > posicionBase) {
        flecha = '<span class="flecha-baja">▼</span>';
      }
    }

    tr.innerHTML =
      `<td>${posicionActual} ${flecha}</td>
       <td>
         <div class="equipo-con-escudo">
           <img class="escudo" src="${obtenerEscudo(e.equipo)}" alt="${e.equipo}">
           <span>${e.equipo}</span>
         </div>
       </td>
       <td class="col-puntos">${e.PTS}</td>
       <td>${e.PJ}</td>
       <td>${e.PG}</td>
       <td>${e.PE}</td>
       <td>${e.PP}</td>
       <td>${e.GF}</td>
       <td>${e.GC}</td>
       <td>${e.GF - e.GC}</td>`;

    tbody.appendChild(tr);
  }

  requestAnimationFrame(() => {
    animarCambiosTabla(tbody, posicionesAntes);
  });

  const jugados = partidos.filter(partidoJugado).length;
  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Clasificación actualizada. Partidos contabilizados: " + jugados;
  }
}

function actualizarBotonesJornada() {
  construirListaJornadas();

  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");

  if (!btnAnterior || !btnSiguiente) return;

  if (simulacionFinalizada) {
    btnAnterior.disabled = false;
    btnAnterior.style.display = "";
    btnSiguiente.style.display = "none";
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);
  const ultimaJornada = jornadasDisponibles[jornadasDisponibles.length - 1];
  const estamosEnUltima = jornadaActual === ultimaJornada;
  const jornadaActualCompleta = jornadaCompleta(jornadaActual);

  btnAnterior.style.display = "";
  btnSiguiente.style.display = "";

  btnAnterior.disabled = indice <= 0;

  if (estamosEnUltima) {
    btnSiguiente.textContent = "Finalizar";
    btnSiguiente.disabled = !jornadaActualCompleta;
  } else {
    btnSiguiente.textContent = "→";
    btnSiguiente.disabled = indice === -1 || indice >= jornadasDisponibles.length - 1;
  }
}

function irAJornadaAnterior() {
  construirListaJornadas();

  const btnSiguiente = document.getElementById("btn-siguiente");
  const botonCalcular = document.getElementById("calcular");

  // Si estamos en la pantalla final, volver a la última jornada
  if (simulacionFinalizada) {
    simulacionFinalizada = false;

    jornadaActual = jornadasDisponibles[jornadasDisponibles.length - 1];

    if (btnSiguiente) {
      btnSiguiente.style.display = "";
      btnSiguiente.textContent = "→";
    }

    if (botonCalcular) {
      botonCalcular.style.display = "";
    }

    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);

  if (indice > 0) {
    jornadaActual = jornadasDisponibles[indice - 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function finalizarSimulacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();
  simulacionFinalizada = true;

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.style.display = "none";
  }

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Resumen final";
  }

  const botonCalcular = document.getElementById("calcular");
  if (botonCalcular) {
    botonCalcular.style.display = "none";
  }

  renderizarResumenFinal(clasificacion);
  calcularClasificacion();

  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Simulación finalizada.";
  }

  actualizarBotonesJornada();
}

function descargarClasificacionFinal() {
  const tabla = document.getElementById("tabla-clasificacion");
  if (!tabla) return;

  html2canvas(tabla, {
    backgroundColor: "#ffffff",
    scale: 2
  }).then((canvas) => {
    const enlace = document.createElement("a");
    enlace.download = "clasificacion-final.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
  });
}

function irAJornadaSiguiente() {
  construirListaJornadas();

  if (simulacionFinalizada) return;

  const indice = jornadasDisponibles.indexOf(jornadaActual);
  const esUltimaJornada = indice === jornadasDisponibles.length - 1;
  const ultimaJornadaCompleta = jornadaCompleta(jornadaActual);

  if (esUltimaJornada && ultimaJornadaCompleta) {
    finalizarSimulacion();
    return;
  }

  if (indice !== -1 && indice < jornadasDisponibles.length - 1) {
    jornadaActual = jornadasDisponibles[indice + 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function obtenerEscudo(equipo) {
  return escudos[equipo] || "";
}

window.onload = function () {
  jornadaActual = obtenerPrimeraJornadaPendiente();
  reiniciarReferenciaJornada();
  mostrarPartidos();
  calcularClasificacion();

  const boton = document.getElementById("calcular");
  if (boton) {
    boton.addEventListener("click", calcularClasificacion);
  }

  const btnAnterior = document.getElementById("btn-anterior");
  if (btnAnterior) {
    btnAnterior.addEventListener("click", irAJornadaAnterior);
  }

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.addEventListener("click", irAJornadaSiguiente);
  }
};