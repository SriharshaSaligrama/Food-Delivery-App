const foodItems=[
{name: 'masala dosa', img: 'https://www.tasteatlas.com/Images/Dishes/02d1f86ec5cd4f0db503f0653dc0c7e2.jpg', price: 40, itemPrice: 40, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'set dosa', img: 'https://4.bp.blogspot.com/-48j7NMv1LDE/T3az8T_8YGI/AAAAAAAAErg/IerqvGvNy-s/s1600/Vegetable+Saagu.jpg', price: 40, itemPrice: 40, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'idly(2 pc)', img: 'https://www.itslife.in/wp-content/gallery/receipe-breakfast/idli.jpg', price: 25, itemPrice: 25, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'vada', img: 'https://thumbs.dreamstime.com/b/delicious-medu-vada-served-coconut-chutney-sambar-white-plate-88694673.jpg', price: 15, itemPrice: 15, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'poori', img: 'https://image.shutterstock.com/image-photo/poori-puri-260nw-1156980655.jpg', price: 40, itemPrice: 40, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'pulav', img: 'https://geekrobocook.com/wp-content/uploads/2021/01/39_Vegetable-Pulav.jpg', price: 50, itemPrice: 50, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'khara bath', img: 'https://www.yummyoyummy.com/wp-content/uploads/2017/12/DSC_0466.jpg', price: 25, itemPrice: 25, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'kesari bath', img: 'https://www.spiceindiaonline.com/wp-content/uploads/2008/10/Pineapple-Kesari-14.jpg', price: 25,itemPrice: 25, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'south indian meals', img: 'https://media.istockphoto.com/photos/south-indian-food-picture-id481149282', price: 70,itemPrice: 70, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'north indian meals', img: 'https://as1.ftcdn.net/v2/jpg/01/65/57/96/1000_F_165579606_2wcIKIgxwnBjCHEh2z9sdsjkMzbYKC0C.jpg', price: 70, itemPrice: 70, Indian: true, American: false, Chinese: false, isVeg: true, quantity:0},
{name: 'chicken biryani', img: 'https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg', price: 90, itemPrice: 90, Indian: true, American: false, Chinese: false, isVeg: false, quantity:0},
{name: 'mutton biryani', img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg', price: 90, itemPrice: 90,  Indian: true, American: false, Chinese: false, isVeg: false, quantity:0},
{name: 'egg biryani', img: 'https://vismaifood.com/storage/app/uploads/public/f14/664/f87/thumb__1200_0_0_0_auto.jpg', price: 80,itemPrice: 80, Indian: true, American: false, Chinese: false, isVeg: false, quantity:0},
{name: 'chicken kebab', img: 'https://img-global.cpcdn.com/recipes/8f1106c6bd0e5ae1/1200x630cq70/photo.jpg', price: 80, itemPrice: 80, Indian: true, American: false, Chinese: false, isVeg: false, quantity:0},
{name: 'veg burger', img: 'https://philipsbakery.in/uploads/product/1561562468product.jpg', price: 80, itemPrice: 80, Indian: false, American: true, Chinese: false, isVeg: true, quantity:0},
{name: 'paneer sandwich', img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/paneer-sandwich-recipe.jpg', price: 90, itemPrice: 90, Indian: false, American: true, Chinese: false, isVeg: true, quantity:0},
{name: 'cheese sandwich', img: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/The-Best-Ever-Grilled-Cheese-Sandwich_EXPS_THSO18_222725_D03_06_4b.jpg', price: 80, itemPrice: 80, Indian: false, American: true, Chinese: false, isVeg: true, quantity:0},
{name: 'veg hotdog', img: 'https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/08/Veg-hot-dog.jpg?fit=1425%2C800&ssl=1', price: 90, itemPrice: 90, Indian: false, American: true, Chinese: false, isVeg: true, quantity:0},
{name: 'oreo milkshake', img: 'https://bellyfull.net/wp-content/uploads/2020/07/Oreo-Milkshake-blog-3-500x500.jpg', price: 50,itemPrice: 50, Indian: false, American: true, Chinese: false, isVeg: true, quantity:0},
{name: 'chocolate ice cream', img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/11/chocolate-ice-cream-recipe-2-500x375.jpg', price: 40, itemPrice: 40, Indian: false, American: true, Chinese: false, isVeg: true, quantity:0},
{name: 'black current ice cream', img: 'https://5.imimg.com/data5/AU/CD/YR/SELLER-26783608/black-currant-iceceam-1000x1000.jpg', price: 50, itemPrice: 50, Indian: false, American: true, Chinese: false, isVeg: true, quantity:0},
{name: 'chicken hotdog', img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/8/2/FN_Maneet-Chauhan-Chicken-Hot-Dog_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371616493515.jpeg', price: 110, itemPrice: 110, Indian: false, American: true, Chinese: false, isVeg: false, quantity:0},
{name: 'chicken burger', img: 'https://gofry.com.fj/wp-content/uploads/2019/04/Chicken_Burger-scaled-e1624614963511.jpg', price: 90, itemPrice: 90, Indian: false, American: true, Chinese: false, isVeg: false, quantity:0},
{name: 'chicken sandwich', img: 'https://www.yummyoyummy.com/wp-content/uploads/2013/11/Spicy-chicken-sandwich.jpg', price: 90,itemPrice: 90, Indian: false, American: true, Chinese: false, isVeg: false, quantity:0},
{name: 'gobi manchurian', img: 'https://theyummydelights.com/wp-content/uploads/2020/02/gobi-manchurian-8.jpg', price: 60,itemPrice: 60, Indian: false, American: false, Chinese: true, isVeg: true, quantity:0},
{name: 'veg hakka noodles', img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg', price: 60, itemPrice: 60, Indian: false, American: false, Chinese: true, isVeg: true, quantity:0},
{name: 'veg schezwan noodles', img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/schezwan-noodles-recipe-2-1.jpg', price: 70, itemPrice: 70, Indian: false, American: false, Chinese: true, isVeg: true, quantity:0},
{name: 'veg momos', img: 'https://resize.indiatvnews.com/en/resize/oldbucket/715_-/lifestylelifestyle/IndiaTv94add1_momos-main-pic.jpg', price: 90, itemPrice: 90, Indian: false, American: false, Chinese: true, isVeg: true, quantity:0},
{name: 'veg sweet and corn soup', img: 'https://www.sailusfood.com/wp-content/uploads/2012/02/sweet-corn-soup.jpg', price: 60,itemPrice: 60, Indian: false, American: false, Chinese: true, isVeg: true, quantity:0},
{name: 'veg hot and sour soup', img: 'https://www.awesomecuisine.com/wp-content/uploads/2007/10/vegetable-hot-and-sour-soup.jpg', price: 60, itemPrice: 60, Indian: false, American: false, Chinese: true, isVeg: true, quantity:0},
{name: 'chicken sweet and corn soup', img: 'https://i0.wp.com/theindianclaypot.com/wp-content/uploads/2017/10/SWEET-CORN-SOUP.jpg?resize=770%2C514', price: 80, itemPrice: 80, Indian: false, American: false, Chinese: true, isVeg: false, quantity:0},
{name: 'chicken hot and sour soup', img: 'https://lh3.googleusercontent.com/YTVpIgeFR16HH18fuWAcCtvznNgP_QM7D8fnbEIzhtA0ckW9hLO-rsrRCfbWlOckBJaBNjdL81dtqvzFIBGJnu4WBolpBmtu_A', price: 80, itemPrice: 80, Indian: false, American: false, Chinese: true, isVeg: false, quantity:0},
{name: 'chicken momos', img: 'https://i.ytimg.com/vi/UsIoJ9TzISU/maxresdefault.jpg', price: 110, itemPrice: 110, Indian: false, American: false, Chinese: true, isVeg: false, quantity:0},
{name: 'chicken hakka noodles', img: 'https://cf0316.s3.amazonaws.com/cookificom/menu/12420/slide/cc979c.jpg', price: 90, itemPrice: 90, Indian: false, American: false, Chinese: true, isVeg: false, quantity:0},
{name: 'chicken schezwan noodles', img: 'https://i0.wp.com/www.tastesofmalabar.com/wp-content/uploads/2016/11/995975_164617437058185_1355551832_n.jpg?resize=845%2C435&ssl=1', price: 100, itemPrice: 100, Indian: false, American: false, Chinese: true, isVeg: false, quantity:0},
{name: 'chicken manchurian', img: 'https://indianpakwan.com/wp-content/uploads/2021/01/Chicken-manchurian-1200x676.jpg', price: 80, itemPrice: 80, Indian: false, American: false, Chinese: true, isVeg: false, quantity:0},
]

export const foodReducer= (state=foodItems, action)=>{
    switch(action.type) {
        default: {return state}
    }
}