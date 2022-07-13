const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

for (i=0; i<products.length; i++){
  if(products[i].image == undefined){
    products[i].image = "./img/products/no-img.svg"
  }
}






//repetição
let listaDeProdutos = document.getElementsByTagName('ul')
let fruits = document.getElementsByTagName('ul')[0]
let drinks = document.getElementsByTagName('ul')[1]
let hygiene = document.getElementsByTagName('ul')[2]


for (i=0; i<products.length; i++){
  //crianlo o elemento
  let product = document.createElement('li')

  product.className=('product')


  if(products[i].category == 'Frutas'){
    fruits.appendChild(product)
  }
  else if (products[i].category == 'Bebidas'){
    drinks.appendChild(product)
  }
  else if (products[i].category == 'Higiene'){
    hygiene.appendChild(product)
  }

  

  //criando o img
  let img = document.createElement('img')
  img.className='product-img'
  img.src=products[i].image
  product.appendChild(img)

  //criando main


  let main = document.createElement('main')
  main.className=('product-main')
  product.appendChild(main)

  //add elementos ao main

  let title = document.createElement('h1')
  title.className=('product-title')
  title.innerText=products[i].title
  main.appendChild(title)

  let category = document.createElement('h5')
  category.className='product-category'
  category.innerText=products[i].category
  main.appendChild(category)

  let preco = document.createElement('strong')
  preco.className='product-price'
  preco.innerText=`R$ ${products[i].price}`
  main.appendChild(preco)


  //definir seções

  
  

}











