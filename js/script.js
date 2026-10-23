/* BYBERLO — HTML5 + CSS3 + Bootstrap 5 + JavaScript vanilla */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const WHATSAPP = '525562288432'; // Contacto del Documento Maestro.
  const KEY = 'byberlo-carrito-v1';
  const raw = Array.isArray(window.BYBERLO_PRODUCTOS) ? window.BYBERLO_PRODUCTOS : [];
  const validTypes = { maquillaje: ['rostro','ojos','labios'], skincare: ['mixta','grasa','seca','sensible'] };
  const productos = raw.filter(p => p && typeof p.id === 'string' && p.id.trim() && typeof p.nombre === 'string' && p.nombre.trim() && validTypes[p.tipo]?.includes(p.categoria) && Number.isFinite(p.precio) && p.precio >= 0 && typeof p.marca === 'string' && typeof p.descripcion === 'string' && typeof p.presentacion === 'string' && Array.isArray(p.imagenes) && typeof p.disponible === 'boolean');
  const porId = new Map(productos.map(p => [p.id,p]));
  const moneda = n => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(n);
  const getCart = () => { try { const v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v.filter(i=>i&&typeof i.id==='string'&&Number.isInteger(i.cantidad)&&i.cantidad>0&&i.cantidad<=99):[]; }catch{return [];} };
  let cart = getCart().filter(i=>porId.get(i.id)?.disponible);
  const save = () => {try{localStorage.setItem(KEY,JSON.stringify(cart));}catch{/* navegador restringido */} renderCart();};
  const make = (tag,cls,txt) => {const el=document.createElement(tag);if(cls)el.className=cls;if(txt!==undefined)el.textContent=txt;return el;};
  const photo = (src,alt,cls) => {if(!src)return make('div',cls+' placeholder-photo','IMAGEN PENDIENTE');const img=make('img',cls);img.src=src;img.alt=alt;img.loading='lazy';img.addEventListener('error',()=>img.replaceWith(make('div',cls+' placeholder-photo','IMAGEN NO DISPONIBLE')));return img;};
  function renderCart(){
    const count=cart.reduce((s,i)=>s+i.cantidad,0);
    document.querySelectorAll('[data-cart-count]').forEach(n=>n.textContent=count);
    const items=document.getElementById('cart-items');if(!items)return;
    items.replaceChildren();let subtotal=0;
    if(!cart.length)items.append(make('p','cart-empty','Tu bolsa está vacía. Explora los catálogos para agregar productos.'));
    cart.forEach(item=>{const p=porId.get(item.id);if(!p)return;subtotal+=p.precio*item.cantidad;
      const row=make('article','cart-item');row.append(make('h3','',p.nombre),make('p','',`${moneda(p.precio)} × ${item.cantidad}`));
      const controls=make('div','cart-item__actions');
      for(const [label,delta] of [['−',-1],['+',1]]){const b=make('button','cart-quantity',label);b.type='button';b.setAttribute('aria-label',`${delta<0?'Restar':'Sumar'} unidad de ${p.nombre}`);b.disabled=delta>0&&item.cantidad>=99;b.addEventListener('click',()=>changeQty(p.id,delta));controls.append(b);}
      const remove=make('button','cart-remove','Quitar');remove.type='button';remove.addEventListener('click',()=>{cart=cart.filter(x=>x.id!==p.id);save();});controls.append(remove);row.append(controls);items.append(row);
    });
    document.getElementById('cart-subtotal').textContent=moneda(subtotal);
    document.getElementById('cart-checkout').disabled=!cart.length;
    document.getElementById('cart-clear').disabled=!cart.length;
  }
  function changeQty(id,delta){const i=cart.find(x=>x.id===id);if(!i)return;i.cantidad=Math.max(0,Math.min(99,i.cantidad+delta));cart=cart.filter(x=>x.cantidad>0);save();}
  function addCart(id){const p=porId.get(id);if(!p||!p.disponible)return;const i=cart.find(x=>x.id===id);if(i){if(i.cantidad>=99)return;i.cantidad++;}else cart.push({id,cantidad:1});save();const panel=document.getElementById('carritoPanel');if(panel&&window.bootstrap)bootstrap.Offcanvas.getOrCreateInstance(panel).show();}
  document.getElementById('cart-clear')?.addEventListener('click',()=>{cart=[];save();});
  document.getElementById('cart-checkout')?.addEventListener('click',()=>{
    if(!cart.length)return;
    const lines=['Hola, Byberlo. Quisiera consultar disponibilidad y solicitar este pedido:',''];
    cart.forEach(i=>{const p=porId.get(i.id);if(p)lines.push(`• ${p.nombre} (${p.marca}) — ${i.cantidad} × ${moneda(p.precio)} = ${moneda(i.cantidad*p.precio)}`);});
    lines.push('',`Subtotal de productos: ${moneda(cart.reduce((s,i)=>s+(porId.get(i.id)?.precio||0)*i.cantidad,0))}`,'Quedo pendiente de confirmar disponibilidad, envío, pago y total final.');
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`,'_blank','noopener,noreferrer');
  });
  renderCart();
  const catalogo=document.querySelector('[data-catalogo]');
  if(catalogo){
    const grid=catalogo.querySelector('[data-product-grid]');const tipo=grid?.dataset.productGrid;
    const filtros=[...catalogo.querySelectorAll('[data-filtro]')];const estado=catalogo.querySelector('[data-estado]');
    const categoriaTexto={rostro:'Rostro',ojos:'Ojos',labios:'Labios',mixta:'Piel mixta',grasa:'Piel grasa',seca:'Piel seca',sensible:'Piel sensible'};
    for(const p of productos.filter(p=>p.tipo===tipo)){
      const col=make('div','col');col.dataset.categoria=p.categoria;const card=make('article','catalog-card');
      const link=make('a','catalog-card__image-link');link.href=`producto.html?id=${encodeURIComponent(p.id)}`;link.append(photo(p.imagenes[0],`Fotografía de ${p.nombre}`,'catalog-product-photo'));card.append(link);
      const body=make('div','catalog-card__body');body.append(make('span','catalog-card__category',categoriaTexto[p.categoria]),make('h3','',p.nombre),make('p','',p.descripcion),make('strong','catalog-card__pending',moneda(p.precio)));
      const detail=make('a','catalog-card__link','Ver detalles ↗');detail.href=link.href;body.append(detail);
      if(p.disponible){const buy=make('button','catalog-card__buy','Agregar a la bolsa');buy.type='button';buy.addEventListener('click',()=>addCart(p.id));body.append(buy);}else body.append(make('p','catalog-unavailable','Disponibilidad por confirmar'));
      card.append(body);col.append(card);grid.append(col);
    }
    function filter(cat){let count=0;grid.querySelectorAll('[data-categoria]').forEach(el=>{el.hidden=cat!=='todos'&&el.dataset.categoria!==cat;if(!el.hidden)count++;});
      filtros.forEach(b=>{const active=b.dataset.filtro===cat;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
      estado.textContent=count?`Mostrando ${count} producto${count===1?'':'s'}.`:'No hay productos registrados en esta categoría todavía.';
    }
    filtros.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filtro)));filter('todos');
  }
  const galeria=document.querySelector('.product-gallery');
  if(galeria){
    const params=new URLSearchParams(location.search);const p=porId.get(params.get('id'));
    const cat={rostro:['Rostro','maquillaje.html'],ojos:['Ojos','maquillaje.html'],labios:['Labios','maquillaje.html'],mixta:['Piel mixta','skincare.html'],grasa:['Piel grasa','skincare.html'],seca:['Piel seca','skincare.html'],sensible:['Piel sensible','skincare.html']};
    const fallback=cat[params.get('categoria')]||['Catálogo Byberlo','maquillaje.html'];const selected=p?(cat[p.categoria]||fallback):fallback;
    document.getElementById('product-category').textContent=selected[0].toUpperCase();document.getElementById('product-back').href=selected[1];
    const imgs=p?.imagenes?.length?p.imagenes:['','',''];let active=0;
    const main=document.getElementById('product-image'),img=document.getElementById('product-photo'),label=document.getElementById('gallery-label'),count=document.getElementById('gallery-count');
    const thumbs=[...galeria.querySelectorAll('[data-image]')];
    function show(index){active=(index+imgs.length)%imgs.length;main.dataset.slide=String(active%3);img.hidden=!imgs[active];if(imgs[active]){img.src=imgs[active];img.alt=`${p.nombre}, fotografía ${active+1}`;}label.hidden=Boolean(imgs[active]);label.textContent=p?'FOTOGRAFÍA PENDIENTE':'PRODUCTO POR REGISTRAR';count.textContent=`${active+1} / ${imgs.length}`;
      thumbs.forEach((b,i)=>{b.hidden=i>=imgs.length;b.classList.toggle('is-active',i===active);b.setAttribute('aria-pressed',String(i===active));});}
    document.getElementById('gallery-prev').addEventListener('click',()=>show(active-1));document.getElementById('gallery-next').addEventListener('click',()=>show(active+1));thumbs.forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.image))));
    if(p){document.getElementById('product-name').textContent=p.nombre;document.getElementById('product-price').textContent=moneda(p.precio);document.getElementById('product-description').textContent=p.descripcion;document.getElementById('product-long-description').textContent=p.detalles||p.descripcion;
      document.getElementById('product-brand').textContent=p.marca;document.getElementById('product-size').textContent=p.presentacion;document.getElementById('product-stock').textContent=p.disponible?'Consultar al realizar pedido':'Sin confirmar';
      document.getElementById('product-notice').textContent='Los precios corresponden a los datos del catálogo. Disponibilidad, envío y pago se confirman antes de concretar el pedido.';
      const b=document.getElementById('product-add');b.disabled=!p.disponible;b.textContent=p.disponible?'Agregar a la bolsa':'Disponibilidad por confirmar';if(p.disponible)b.addEventListener('click',()=>addCart(p.id));document.getElementById('product-add-help').textContent=p.disponible?'Podrás revisar el pedido en tu bolsa.':'Contacta a Byberlo para consultar disponibilidad.';
    }
    show(0);
  }
});
