import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: "Componentes de PC",
    client: {
        name: "nombre 1",
        lastName: "apellido 1",
        address: {
            country: "USA",
            city: "Los Angeles",
            street: "One Street",
            number: 15,
        }
    },
    company: {
        name: "New Age",
        fiscalNumber: 323124,
    },
    items: [
        {
            id: 1,
            product: "Cpu intel i9",
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: "Corsair teclado mecanico",
            price: 399,
            quantity: 2
        }, 
        {
            id: 3,
            product: "Monitor Asus",
            price: 899,
            quantity: 3
        }
    ]
}