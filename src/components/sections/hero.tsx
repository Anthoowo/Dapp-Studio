import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Launch Your Vision on the Decentralized Web
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
            We provide the expertise and infrastructure to bring your DApp from concept to reality. Secure, scalable, and ready for the future.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
