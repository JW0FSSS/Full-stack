import { CategoryModel, ProductModel } from "schemas/relations";

export async function Inserts() {
    
    const nameCategories=[
        "Computer Mouse",
        "Game Headphones",
        "Gamepads",
        "VR Glases",
        "Keyboards",
        "Computers",
        "Games",
]
const products = [
    {
        CategoryId:1,
        name: "headphones",
        price: 20,
        description: "headphones confortable",
        quantity: 2,
        image: "https://res.cloudinary.com/djkmyxefd/image/upload/v1710166395/fotos/2088_kxhbag.webp"
    },
    {CategoryId:2,
        name: "Keyboard",
        price: 30,
        description: "Modern Keyboard",
        quantity: 5,
        image: "https://res.cloudinary.com/djkmyxefd/image/upload/v1710166735/fotos/slim-thai-and-english-keyboard-isolated-on-white-background-png_1_qkrtyl.webp"
    },
    {CategoryId:3,
        name: "Mouse",
        price: 10,
        description: "Modern Mouse",
        quantity: 2,
        image: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/m100/gallery/m100-charcoal-gallery-1.png"
    },
    {CategoryId:4,
        name: "Gamepad",
        price: 50,
        description: "Modern Gamepad",
        quantity: 5,
        image: "https://res.cloudinary.com/djkmyxefd/image/upload/v1710167290/fotos/1d40fbcf23c4c3aa5d2a526869ba25a3_bj8u7f.webp"
    },
    {CategoryId:5,
        name: "VR Glass",
        price: 100,
        description: "VR Glass",
        quantity: 2,
        image: "https://res.cloudinary.com/djkmyxefd/image/upload/v1710166931/fotos/gear_h678ii.webp"
    },
    {CategoryId:6,
        name: "Computer",
        price: 1000,
        description: "Modern Computer",
        quantity: 1,
        image: "https://res.cloudinary.com/djkmyxefd/image/upload/v1710166843/fotos/case-gaming_tnphrb.webp"
    },
    {CategoryId:7,
        name: "Final Fntasy",
        price: 20,
        description: "Game",
        quantity: 1,
        image: "https://res.cloudinary.com/djkmyxefd/image/upload/v1710167438/fotos/DFFNT_Firion_Render_1_osh3bm.webp"
    },
    {CategoryId:2,
        name: "G205-MS",
        price: 40,
        description: "Mouse incredible",
        quantity: 10,
        image: "https://res.cloudinary.com/djkmyxefd/image/upload/v1710167524/fotos/teclado-y-mouse-sin-fondo-1_x85hb8.webp"
    }
];


    await Promise.all(nameCategories.map((name)=>{
          CategoryModel.create({
            name
        })
    }))

    await Promise.all(products.map((product,i)=>{
          ProductModel.create({
            name:product.name,
            description:product.description,
            price:product.price,
            quantity:product.quantity,
            image:product.image,
            CategoryId:product.CategoryId
        })
    }))

}