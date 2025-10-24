import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, ShieldCheck, Server } from "lucide-react"

const features = [
  {
    icon: <Network className="h-8 w-8 text-primary" />,
    title: "Decentralized",
    description: "Built on robust blockchain technology to ensure your application is censorship-resistant and always available."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure Audits",
    description: "Our comprehensive security audits identify vulnerabilities before they can be exploited, protecting you and your users."
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Scalable Infrastructure",
    description: "Leverage our high-performance infrastructure designed to handle millions of users from day one."
  }
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">Why Build With Us?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We provide the foundational pillars for a successful decentralized application.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="font-headline pt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
