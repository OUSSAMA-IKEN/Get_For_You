import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import img1 from "@/assets/images/spr-product-conair-portable-fabri-shaver-cls1-hwortock-005-ab3e248a10244878a158f911721c6350.webp";
import img2 from "@/assets/images/12.jpeg";
import img3 from "@/assets/images/22.jpg";
import img4 from "@/assets/images/55.jpg";
import img5 from "@/assets/images/8.webp";
import img6 from "@/assets/images/img-0159-jpeg-648a310b60cf5.avif";

// Update: Product showcase cards using images from assets/images
const products = [
  {
    name: "Portable Fabric Shaver",
    description:
      "Easily remove lint and fuzz from your clothes. Compact and powerful.",
    img: img1
  },
  {
    name: "Classic Style",
    description: "Timeless design for everyday comfort and elegance.",
    img: img2
  },
  {
    name: "Modern Look",
    description: "Upgrade your wardrobe with this trendy piece.",
    img: img3
  },
  {
    name: "Premium Quality",
    description: "Crafted with care for long-lasting wear.",
    img: img4
  },
  {
    name: "Lightweight Wear",
    description: "Perfect for summer days and casual outings.",
    img: img5
  },
  {
    name: "Exclusive Collection",
    description: "Stand out with our limited edition collection.",
    img: img6
  }
];

const firstRow = products.slice(0, Math.ceil(products.length / 2));
const secondRow = products.slice(Math.ceil(products.length / 2));

const ProductCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-60 w-80 cursor-pointer overflow-hidden rounded-xl border flex items-center justify-center",
        "border-white-950/[.1] bg-violet-950/10 hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className="w-full h-full" alt="product" src={img} />
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Our <span className="text-primary">Product</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Meet the Smart Lint Remover — premium quality for flawless fabric care
      </p>
      <Marquee className="[--duration:20s]">
        {firstRow.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
