export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    inStock: boolean;
    overAllRating: number;
    ratings: ProductRating[];
        
    constructor(id: number, name: string, price: number, description: string, ratings: ProductRating[] = [], inStock: boolean = true) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
        this.ratings = ratings;
        this.overAllRating = ratings.length == 0 ? 0 : 
            +(((ratings.map(i => i.rate).reduce((total, rate) => total += rate)) / (ratings.length * 5)) * 5).toFixed(1);
    }    
}
export class ProductRating {
    title: string;
    rate: number;

    constructor(title: string, rate: number) {
        this.title = title;
        this.rate = rate;
    }
}
export class ProductData {

    private products: Product[] = [];

    constructor() {
        this.products = [
            new Product(1, 'Ut pellentesque risus', 1200, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(2, 'Vamus nibh enim', 2400, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 1),
                new ProductRating('User friendly', 2),
                new ProductRating('Look & Feel', 1),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 5),
            ]),
            new Product(3, 'Curabitur bibendum', 1900, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(4, 'Nunc fermentum', 3200, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 2),
                new ProductRating('User friendly', 1),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 1),
                new ProductRating('Other Features', 3),
            ], false),
            new Product(5, 'Bibendum est augue', 4520, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 0),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(6, 'Etiam ut lectus eu tellus congue', 3650, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 2),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(8, 'Consectetur adipiscing elit', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(9, 'Maecenas aliquam elit eu magna tincidunt porttitor', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(10, 'Porttitor convallis aliquam', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 4),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(11, 'Cras laoreet orci felis, vel tempus tellus tristique', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(12, 'Duis hendrerit, erat eget dictum', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(13, 'Nunc ultricies libero eu gravida', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 3),
                new ProductRating('Look & Feel', 1),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(14, 'Pellentesque luctus vestibulum', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 5),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 1),
            ]),
            new Product(15, 'Aenean sed orci ligula', 120, '<p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ex, placerat et ex laoreet, varius sollicitudin metus. Vivamus ac molestie mauris, dapibus lacinia orci. Phasellus orci leo, accumsan quis eleifend sed, ultricies varius augue. Cras ullamcorper, ante nec congue pellentesque, urna urna tempus quam, nec laoreet erat dolor ut est. Morbi imperdiet, leo sed tristique vehicula, tortor elit auctor urna, nec aliquet enim ligula non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit magna, iaculis sit amet nisl in, molestie hendrerit arcu. Praesent eleifend ante tortor, id iaculis mauris aliquam nec. Ut in posuere velit, nec viverra eros. Fusce ultrices facilisis risus. Proin enim erat, convallis in fringilla sed, laoreet id augue. Integer ut ullamcorper ipsum.</p><p>Phasellus porttitor convallis aliquam. Sed tempor rhoncus augue, vitae hendrerit tortor posuere vel. Praesent aliquet semper nulla a tristique. Nulla tincidunt ante non ipsum porta, ac ullamcorper elit fermentum. Sed vel molestie diam, a ullamcorper magna. Suspendisse rutrum viverra odio, in venenatis ex porta sit amet. Duis molestie turpis laoreet nibh ultrices bibendum. Curabitur ante lectus, scelerisque vitae fermentum eu, commodo eu nibh. Ut efficitur viverra nibh a venenatis. Nunc in eros a risus pulvinar ultricies id in ipsum.</p>', [
                new ProductRating('Style & Design', 3),
                new ProductRating('User friendly', 4),
                new ProductRating('Look & Feel', 4),
                new ProductRating('Value for Money', 2),
                new ProductRating('Other Features', 5),
            ]),
          ];
    }

    getProducts() : Product[] {
        return this.products;
    }
    getProduct(id:number) : Product {
        return this.products.find(i => i.id === id);
    }
    searchProducts(search:string) : Product[] {
        return this.products.filter(i => i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
}