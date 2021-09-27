
// blog card data

const blogIMG = [
  '../assets/blogs/How to Price Products to Sell OnlineUnderstand with an Example.png',
  '../assets/blogs/Featured img - How to Advertise on Sharechat.png',
  '../assets/blogs/01 (4) (1).jpg',
]
const blogTitle = [
  '<div>How to Price Products to Sell Online- T-Shirt Pricing Strategy</div>',
  '<div>How to Run Ads on ShareChat</div>',
  '<div>Should You Sell on Your Own Website or Amazon / Flipkart in India?</div>',
]
const blogLink = [
  '../blog/How-to-Price-Products-to-Sell-Online.html',
  './How-to-Run-Ads-on-ShareChat.html',
  './Should-You-Sell-on-Your-Own-Website-or-Amazon-Flipkart-in-India.html',
]

document.getElementById('first-blog-card-img').src = blogIMG[0]
document.getElementById('first-blog-card-title').innerHTML = blogTitle[0]
document.getElementById('first-blog-card-title').href = blogLink[0]

document.getElementById('first-blog-card-img2').src = blogIMG[1]
document.getElementById('first-blog-card-title2').innerHTML = blogTitle[1]
document.getElementById('first-blog-card-title2').href = blogLink[1]

document.getElementById('first-blog-card-img3').src = blogIMG[2]
document.getElementById('first-blog-card-title3').innerHTML = blogTitle[2]
document.getElementById('first-blog-card-title3').href = blogLink[2]

// made by @adarshsingh87

setTimeout(() => document.querySelector('.btn').click(), 60000)
