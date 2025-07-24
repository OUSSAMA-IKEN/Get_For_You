import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// Update: Product showcase cards using images from public/Images
const products = [
  {
    name: "Portable Fabric Shaver",
    description:
      "Easily remove lint and fuzz from your clothes. Compact and powerful.",
    img: "/Images/spr-product-conair-portable-fabri-shaver-cls1-hwortock-005-ab3e248a10244878a158f911721c6350.webp"
  },
  {
    name: "Classic Style",
    description: "Timeless design for everyday comfort and elegance.",
    img: "/Images/12.jpeg"
  },
  {
    name: "Modern Look",
    description: "Upgrade your wardrobe with this trendy piece.",
    img: "/Images/22.jpg"
  },
  {
    name: "Premium Quality",
    description: "Crafted with care for long-lasting wear.",
    img: "/Images/55.jpg"
  },
  {
    name: "Lightweight Wear",
    description: "Perfect for summer days and casual outings.",
    img: "/Images/8.webp"
  },
  {
    name: "Exclusive Collection",
    description: "Stand out with our limited edition collection.",
    img: "/Images/img-0159-jpeg-648a310b60cf5.avif"
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
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        Our <span className="text-primary">Product</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Meet the Smart Lint Remover — premium quality for flawless fabric care
      </p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
