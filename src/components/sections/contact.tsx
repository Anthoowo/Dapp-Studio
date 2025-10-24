import { ContactForm } from "@/components/contact-form"

export function Contact() {
  return (
    <section id="contact" className="bg-muted/30 py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have an idea or need help with a project? We'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
