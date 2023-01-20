/**
 * Ce code crée une application Feathers qui utilise un service  "produits" pour créer et récupérer des produits. Il enregistre également un écouteur pour les événements "created" sur ce service, qui imprime un message lorsqu'un nouveau produit est créé. Enfin, il appelle une fonction "main" qui crée un nouveaux produits et affiche tous les produits existants dans la console.
 */
import { feathers } from '@feathersjs/feathers'
import { koa, rest, bodyParser, errorHandler, serveStatic } from '@feathersjs/koa'
import socketio from '@feathersjs/socketio'

// Cette interface définit les données du message
import Message from './interfaces/message.interfaces'
import Product from './interfaces/product.interface'
import productsDataFaker from './data/product.data';
import MessageService from './services/message.services'
import ProductsService from './services/product.services'

// Cela indique à TypeScript quels services nous enregistrons
type ServiceTypes = {
    messages: MessageService
    products: ProductsService
}

const app = koa<ServiceTypes>(feathers())
// Utilise le dossier actuel pour l'hébergement de fichiers statiques
app.use(serveStatic('.'))
// Enregistrer le gestionnaire d'erreur
app.use(errorHandler())
 //Analyse le corps des requetes JSON
app.use(bodyParser())

// Enregistre le gestionnaire de service REST
app.configure(rest())
// Configure les API en temps réel de Socket.io
app.configure(socketio())
// Enregistre notre service de messages

// Enregistre le service de message sur l'application Feathers
app.use('messages', new MessageService())
app.use('products', new ProductsService());

// Ajoutez toute nouvelle connexion en temps réel au canal "everybody"
app.on('connection', (connection) => app.channel('everybody').join(connection))
// Publie tous les événements sur le canal "everybody"
app.publish((_data) => app.channel('everybody'))

// Démarrer le serveur
app.listen(3030).then(() => console.log('Feathers server lisning on lodcalhost:3030'))

app.service('messages').create({
    text: 'Hello world from the server'
})
// Récupère le service de produits
    const productsService = app.service('products');
// Crée de nouveaux produits en utilisant les données de productsDataFaker pour tester
   productsDataFaker.map(product => productsService.create(product))

productsService.create({
    ...productsDataFaker[8]
});











//const app = feathers<ServiceTypes>()

   // // Connect chaque fois qu'un nouveau message a été créé
// app.service('messages').on('created', (message: Message) => {
//    // console.log('Un nouveau message a été créé', message)
// })
// app.service('products').on('created', (product: Product) => {
//     console.log('Un nouveau produit a été créé', product);
// });

//app.service('products')

//  
//////////////////////
// Une fonction qui crée des messages et qui affiche ensuite tous les messages existants sur le service
// const main = async () => {
//     // Créez un nouveau message sur notre service de message
//     await app.service('messages').create({
//         text: 'Bonjour Feathers'
//     })

//     // idem pour produits
//     const productsService = app.service('products');
//     // creer nouveau product
//     const newProduct = await productsService.create({
//         title: 'New Product',
//         description: 'This is a new product',
//         price: 49.99,
//         brand: 'Brand 3',
//         category: 'Category 3',
//     });

//     // Find all messages
//     const messages = await app.service('messages').find();
//     console.log('All messages:', messages);

//     // Find all  products
//     const products = await app.service('products').find();
//     console.log('All products:', products);
// }

// main()
