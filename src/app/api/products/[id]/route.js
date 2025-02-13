import getProducts from "@/lib/products";

export async function GET(request, { params }) {
    const {id} = await params
    
    let products = getProducts();
    let producto = products.find(product => product.id == id)

    return Response.json(producto)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    const {id} = await params

    let products = getProducts();
    // Obtenemos posición    
    const pos = products.findIndex(product => product.id == id)

    // Modificamos producto
    const newProduct = await request.json()
    products.splice(pos, 1, { id: Number(id), ...newProduct })

    return Response.json(products)
}

export async function DELETE(request, { params }) {
    const {id} = await params
    
    let products = getProducts();
    // Obtenemos posición    
    const pos = products.findIndex(product => product.id == Number(id))

    // Eliminamos producto
    if (pos != -1)  // Si es encontrado
        products.splice(pos, 1)

    return Response.json(products)
}

