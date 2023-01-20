import Product from '../interfaces/product.interface';

const products: Product[] = [

    {
        id: 1,
        title: 'Product 1',
        description: 'This is a high-quality product',
        price: 49.99,
        discountPercentage: 20,
        rating: 4.5,
        stock: 15,
        brand: 'Brand A',
        category: 'Electronics',
        thumbnail: 'product1-thumbnail.jpg',
        images: ['product1-1.jpg', 'product1-2.jpg', 'product1-3.jpg']
    },
    {
        id: 2,
        title: 'Product 2',
        description: 'This is a durable product',
        price: 39.99,
        discountPercentage: 15,
        rating: 4.2,
        stock: 10,
        brand: 'Brand B',
        category: 'Furniture',
        thumbnail: 'product2-thumbnail.jpg',
        images: ['product2-1.jpg', 'product2-2.jpg']
    },
    {
        id: 3,
        title: 'Product 3',
        description: 'This is a stylish product',
        price: 29.99,
        discountPercentage: 10,
        rating: 4.0,
        stock: 5,
        brand: 'Brand C',
        category: 'Clothing',
        thumbnail: 'product3-thumbnail.jpg',
        images: ['product3-1.jpg', 'product3-2.jpg', 'product3-3.jpg']
    },
    {
        id: 4,
        title: 'Product 4',
        description: 'This is a versatile product',
        price: 59.99,
        discountPercentage: 25,
        rating: 4.8,
        stock: 20,
        brand: 'Brand D',
        category: 'Sports',
        thumbnail: 'product4-thumbnail.jpg',
        images: ['product4-1.jpg', 'product4-2.jpg', 'product4-3.jpg']
    }, 
    {
          id: 5,
          title: 'Product 5',
          description: 'This is a premium product',
          price: 99.99,
          discountPercentage: 30,
          rating: 4.9,
          stock: 15,
          brand: 'Brand E',
          category: 'Beauty',
          thumbnail: 'product5-thumbnail.jpg',
          images: ['product5-1.jpg', 'product5-2.jpg', 'product5-3.jpg']
      },
      {
          id: 6,
          title: 'Product 6',
          description: 'This is a budget-friendly product',
          price: 19.99,
          discountPercentage: 5,
          rating: 3.5,
          stock: 10,
          brand: 'Brand F',
          category: 'Home',
          thumbnail: 'product6-thumbnail.jpg',
          images: ['product6-1.jpg', 'product6-2.jpg']
      },
      {
          id: 7,
          title: 'Product 7',
          description: 'This is a unique product',
          price: 29.99,
          discountPercentage: 0,
          rating: 4.0,
          stock: 5,
          brand: 'Brand G',
          category: 'Art',
          thumbnail: 'product7-thumbnail.jpg',
          images: ['product7-1.jpg', 'product7-2.jpg', 'product7-3.jpg']
      },
      {
          id: 8,
          title: 'Product 8',
          description: 'This is a classic product',
          price: 49.99,
          discountPercentage: 15,
          rating: 4.2,
          stock: 20,
          brand: 'Brand H',
          category: 'Books',
          thumbnail: 'product8-thumbnail.jpg',
          images: ['product8-1.jpg', 'product8-2']
      }
];

export default products;
