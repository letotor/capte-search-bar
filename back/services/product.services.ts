// A messages service that allows us to create new
// and return all existing messages
import Product from "../interfaces/product.interface"


class ProductsService {

    //init d un tableau de 2 produits
    private products: Product[] = [
        {
            id: 1,
            title: 'Product 1',
            description: 'This is a sample product',
            price: 19.99,
            discountPercentage: 0,
            rating: 4,
            stock: 10,
            brand: 'Brand 1',
            category: 'Category 1',
            thumbnail: 'product1-thumbnail.jpg',
            images: ['product1-1.jpg', 'product1-2.jpg']
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'This is another sample product',
            price: 29.99,
            discountPercentage: 10,
            rating: 5,
            stock: 5,
            brand: 'Brand 2',
            category: 'Category 2',
            thumbnail: 'product2-thumbnail.jpg',
            images: ['product2-1.jpg', 'product2-2.jpg']
        }
    ];


    //
    async find() {
        // Just return all our messages
        return this.products;
    }


    async create(data: Pick<Product, 'title' | 'description' | 'price' | 'brand' | 'category'>) {
        // Logic to create a new product using the data passed
        const product: Product = {
            id: this.products.length + 1,
            title: data.title,
            description: data.description,
            price: data.price,
            discountPercentage: 0,
            rating: 0,
            stock: 0,
            brand: data.brand,
            category: data.category,
            thumbnail: '',
            images: []
        }
        this.products.push(product);
        return product;
    }

}

export default ProductsService



