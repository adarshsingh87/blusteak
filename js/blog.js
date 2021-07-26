
// blog card data

const blogIMG = [
  '../assets/blogs/How to Get Foreign B2B Clients For Your Business.jpeg',
  '../assets/blogs/01 (4) (1).jpg',
  '../assets/blogs/instaThumbnail.jpeg',
]
const blogTitle = [
  '<div>5 Unique Ways to Get Foreign B2B Clients for Indian Business</div>',
  '<div>Should You Sell on Your Own Website or Amazon / Flipkart in India?</div>',
  '<div>Proven Method to Organically Increase Reach and Profile Visits on Instagram</div>',
]
const blogLink = [
  './5-Unique-Ways-to-Get-Foreign-B2B-Clients-from-India.html',
  './Should-You-Sell-on-Your-Own-Website-or-Amazon-Flipkart-in-India.html',
  './Proven-Method-to-Organically-Increase-Reach-and-Profile-Visits-on-Instagram.html',
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

setInterval(() => document.querySelector('.btn').click(), 60000)
