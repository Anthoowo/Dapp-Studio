import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  { name: "Alex Johnson", title: "Lead Blockchain Developer", imageId: "team-member-1" },
  { name: "Maria Garcia", title: "Smart Contract Specialist", imageId: "team-member-2" },
  { name: "Sam Chen", title: "UX/UI Designer", imageId: "team-member-3" },
  { name: "Jessica Brown", title: "Project Manager", imageId: "team-member-4" },
]

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">Our Mission & Vision</h2>
            <p className="text-muted-foreground">
              Our mission is to empower innovators by simplifying the complexities of blockchain development. We envision a future where decentralized technology is accessible to everyone, fostering a more transparent and equitable digital world.
            </p>
            <p className="text-muted-foreground">
              We are a team of passionate engineers, designers, and strategists dedicated to building the next generation of the internet. We believe in the power of decentralization and are committed to helping you succeed in the Web3 ecosystem.
            </p>
          </div>
          <div className="space-y-8">
            <h3 className="font-headline text-2xl font-bold text-center lg:text-left">Meet the Team</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {team.map((member) => {
                const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
                return (
                  <Card key={member.name} className="overflow-hidden">
                    <CardContent className="flex flex-col items-center p-4 text-center">
                      <Avatar className="h-20 w-20">
                        {memberImage && (
                          <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />
                        )}
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="mt-2 font-semibold">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.title}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
