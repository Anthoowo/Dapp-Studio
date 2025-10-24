import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, LayoutDashboard, Rocket } from "lucide-react"

const services = [
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: "Smart Contract Audits",
    description: "Ensure the security and reliability of your smart contracts with our in-depth audits and code analysis."
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: "Web3 Dashboards",
    description: "Create intuitive and powerful dashboards for your users to interact with your DApp and view on-chain data."
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Token Launchpads",
    description: "Plan and execute a successful token launch with our comprehensive launchpad services, from tokenomics to marketing."
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete suite of services to ensure your project's success from start to finish.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
