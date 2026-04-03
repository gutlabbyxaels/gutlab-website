these images are not updated yet. attached is the pulic folder with the list of images

Yes — the issue is the filenames in your code do not match the actual files in public.

From your screenshot, your real files are:

cocoa_mix.jpeg
coffee_spread.jpeg
healthy_spread.jpeg
logo.png
use_brownie 500 g.jpg
use_brownie 1100 g.jpg
use_cocoa.jpg
use_gift.jpg
use_pancake.jpg
use_pantry.jpg
use_snack.jpg
use_toast.jpg

But your code is likely looking for:

/brownie_500.jpg
/brownie_1100.jpg

That is why the brownie images are broken.

Fix

Replace the brownie image paths in your products array with these exact names:

{
  name: "Fudge Brownie (500g)",
  price: "SGD 50",
  image: "/use_brownie 500 g.jpg",
  tagline: "Rich, fudgy, small-batch brownie.",
  description:
    "A decadent brownie block that feels giftable, indulgent, and perfect for sharing.",
  story:
    "A smaller-format brownie for gifting, celebrations, or a premium treat at home.",
  tags: ["Giftable", "Small-batch", "Indulgent"],
  ways: ["Serve warm", "Share with family", "Gift to friends"],
  ingredients: [
    "Dark chocolate",
    "Butter",
    "Eggs",
    "Cocoa",
    "Flour",
    "Natural sweetener",
  ],
  order:
    "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%20500g%20Fudge%20Brownie.",
},
{
  name: "Fudge Brownie (1100g)",
  price: "SGD 110",
  image: "/use_brownie 1100 g.jpg",
  tagline: "Large indulgent brownie slab.",
  description:
    "A celebration-sized brownie for gatherings, family sharing, gifting, and serious chocolate cravings.",
  story:
    "Created for bigger moments — generous, rich, and made to feel special.",
  tags: ["Celebration size", "Premium gift", "Shareable"],
  ways: ["Serve at gatherings", "Gift for occasions", "Share at home"],
  ingredients: [
    "Dark chocolate",
    "Butter",
    "Eggs",
    "Cocoa",
    "Flour",
    "Natural sweetener",
  ],
  order:
    "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%201100g%20Fudge%20Brownie.",
},
Better option

Rename the files in your public folder to cleaner names:

brownie_500.jpg
brownie_1100.jpg

Then keep the code as:

image: "/brownie_500.jpg"
image: "/brownie_1100.jpg"

That is safer because spaces in filenames can sometimes be annoying.

Also confirm these are correct in your code

Your other product images should be:

image: "/healthy_spread.jpeg"
image: "/coffee_spread.jpeg"
image: "/cocoa_mix.jpeg"

And Daily Use should be:

image: "/use_toast.jpg"
image: "/use_snack.jpg"
image: "/use_pancake.jpg"
image: "/use_cocoa.jpg"
image: "/use_gift.jpg"
image: "/use_pantry.jpg"

If you want, I can now give you the full final App.jsx again, corrected to match these exact filenames.

also i this section the product  cocoa mix is cropped. correct it. 

Yes — only the hero right-side image block needs fixing for Cocoa Nut Mix.

The issue is the small hero images are using object-fit: cover, so the cocoa image gets cropped.

Change this CSS

Find:

.hero-big, .hero-small {
  width: 100%;
  object-fit: cover;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0 14px 26px rgba(0,0,0,0.08);
}

Replace it with:

.hero-big, .hero-small {
  width: 100%;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0 14px 26px rgba(0,0,0,0.08);
}

.hero-big {
  height: 430px;
  object-fit: contain;
  padding: 14px;
  background: linear-gradient(180deg, #f8efe3 0%, #f4efe8 100%);
}

.hero-small {
  height: 208px;
  object-fit: contain;
  padding: 12px;
  background: linear-gradient(180deg, #f8efe3 0%, #f4efe8 100%);
}
Why this works
contain shows the full pack
separate styling lets the large jar and smaller images fit better
padding prevents the image touching edges
background stays polished

If you want, after your next small change I’ll give you one final fully merged App.jsx.
