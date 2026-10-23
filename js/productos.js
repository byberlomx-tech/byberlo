/* CATÁLOGO BYBERLO — agrega SOLO productos reales verificados.
Ejemplo de ESTRUCTURA (no es un producto ni aparece en la tienda):
{
 id: "sku-unico", nombre: "Nombre real", tipo: "maquillaje", categoria: "labios",
 marca: "Marca real", precio: 199.00, descripcion: "Descripción real",
 detalles: "Información real", presentacion: "Presentación real",
 imagenes: ["img/productos/foto1.jpg", "img/productos/foto2.jpg"],
 disponible: true
}
Tipos: maquillaje | skincare.
Categorías maquillaje: rostro | ojos | labios.
Categorías skincare: mixta | grasa | seca | sensible.
El precio es un número en pesos mexicanos, sin $ ni comas.
*/
window.BYBERLO_PRODUCTOS = [
{
  id: "delineador-001",
  nombre: "Delineador de Labios Ultrafino",
  tipo: "maquillaje", 
  categoria: "labios", 
  marca: "Italia Deluxe", 
  precio: 25,
  descripcion: "1053 Rich Red Delineador de labios UltraFine para una aplicación precisa Fórmula cremosa y altamente pigmentada Acabado suave y aterciopelado que no reseca Ayuda a definir, dar forma y realzar los labios",
  detalles:"Poliisobuteno hidrogenado, cetearil meticona, ozoquerita, manteca de semilla de Theobroma cacao (cacao), mica, cera microcristalina, trimelitato de tridecilo, triglicérido caprílico/cáprico, cera de Copernicia cerifera, propilparabeno, fragancia, acetato de tocoferilo. Puede contener (+/-): CI77891, CI77491, CI77492, CI77499.",
  presentacion: "1,5 g (0,05 oz)",
  imagenes:["img/productos/1053_RICHRED.webp"],
  disponible:true
},

{
id: "labiales-001",
  nombre: "Mousse Matte Lipstick - Top Five Sets",
  tipo: "maquillaje", 
  categoria: "labios", 
  marca: "Italia Deluxe", 
  precio: 230,
  descripcion: "Los sets Top Five Lipstick están seleccionados para brindarte todos los tonos que necesitas para cualquier ocasión de maquillaje, desde neutros para el día a día hasta labios impactantes. Con una mezcla de subtonos cálidos y fríos, estos sets están diseñados para complementar y embellecer todos los tonos de piel.",
  detalles:"Triglicérido caprílico/cáprico, ciclopentasiloxano, isohexadecano, ciclotetrasiloxano, sílice, cera sintética, cera microcristalina, ceresina, ácido polihidroxiesteárico, cera de Copernicia cerifera (carnauba), metilparabeno, propilparabeno, fragancia, acetato de tocoferilo. Puede contener (+/-): óxidos de hierro (CI 77491, CI 77492, CI 77499), dióxido de titanio (CI 77891), rojo 6 (CI 15850:2), rojo 7 (CI 15850:1), rojo 28 (CI 45410), azul 1 (CI 42090).",
  presentacion: "Baddie Babes: 27 SANGRIA, 03 MARILYN, 11 PINK CHARM, 25 MAROON, 21 BLACK CHERRY",
  imagenes:["img/productos/BaddieBabes_set.webp"],
  disponible:true
},

{
  id: "lipglossnyx-001",
  nombre: "Fat Oil Lip Drip",
  tipo: "maquillaje", 
  categoria: "labios", 
  marca: "NYX", 
  precio: 200,
  descripcion: "Fat Oil Chillz ofrece un acabado glossy con una textura cómoda y nada pegajosa. Este aceite labial está cargado de ingredientes hidratantes como aceite de escualano, frambuesa y zarzamora para mantener tus labios frescos y radiantes. Su aplicador fat abraza tus labios para una cobertura total en cada aplicación, lo que significa que estás a solo una pasada de unos labios llenos de beneficios. ¿Y lo mejor? Este lip oil es vegano y libre de crueldad animal.",
  detalles:"Fórmula hidratante, infusionada con aceite de zarzamora, frambuesa y escualano. Apicacón cómoda y modulable para adaptarse a tu estilo. Fórmula tintada no pegajosa. Hasta 12 horas de hidratación para unos labios suaves y nutridos. Acabado brillante y de alto impacto. Aplicador FAT diseñado para una aplicación precisa y total.",
  presentacion: "0.16-fl.oz / 4.8 ml",
  imagenes:[
    "img/productos/LipGloss NYX_status update.webp",
    "img/productos/LipGloss NYX_status update2.webp",
    "img/productos/LipGloss NYX_status update3.webp"],
  disponible:true 
},

{
  id: "blush_001",
  nombre: "Soft Pinch Luminous Powder Blush",
  tipo: "maquillaje", 
  categoria: "rostro", 
  marca: "Rare Beauty", 
  precio: 650,
  descripcion: "Un rubor radiante que ilumina todos los tonos de piel con un color ligero, uniforme y sedoso para que luzcas radiante todo el día. Un híbrido fácil de usar de dos superventas galardonados: Soft Pinch Liquid Blush y Positive Light Silky Touch Highlighter. Inesperadamente suave e increíblemente ligero, este rubor aireado se aplica sin problemas para un rubor perfecto que parece irradiar desde el interior. Su base altamente pigmentada está repleta de perlas brillantes para una dimensión de aspecto natural. Su fórmula a prueba de transferencia, de manchas y resistente al agua te mantiene sonrojada todo el día. Pulido a mano, por lo que cada polvo es tan único como tú.",
  detalles:"Fluorflogopita sintética, dimeticona, polímero cruzado de dimeticona/vinil dimeticona, estearato de octildodecilo estearoílo, almidón de tapioca, nitruro de boro, octildodecanol, malato de diisoestearilo, sílice, 1,2-hexanodiol, caprililglicol, óxido de estaño, polimetilsilsesquioxano, dióxido de titanio (CI 77891), óxidos de hierro (CI 77491), rojo 6 (CI 15850), laca roja 7 (CI 15850).",
  presentacion: "Joy – Melocotón | Peso 0,098 oz. | 2,8 g",
  imagenes:[
    "img/productos/Blush-RareBeauty-Joy.webp",
    "img/productos/Blush-RareBeauty-Joy2.webp"
  ],
  disponible:true 
},

{
  id: "protector solar-001",
  nombre: "Hyalu-Cica Water-Fit Sun Serum UV",
  tipo: "skincare", 
  categoria: "seca", 
  marca: "Skin1004", 
  precio: 250,
  descripcion: "Un protector solar ligero con textura de sérum que hidrata y calma la piel para un acabado fresco y sin residuos blancos. Su fórmula mejorada contiene pantenol y extractos de arroz, avena y soja para mantener la hidratación y el confort.",
  detalles:"Ligero, protección UV, hidratante. Extracto de Centella asiática, ácido hialurónico, extracto de Oryza sativa (arroz), extracto de harina de Avena sativa (avena), extracto de semilla de Glycine max (soja).",
  presentacion: "50 ml",
  imagenes:[
    "img/productos/ProtectorSolar-Skin1004-HyaluCica.jpg",
    "img/productos/ProtectorSolar-Skin1004-HyaluCica2.avif"
  ],
  disponible:true 
}

];
