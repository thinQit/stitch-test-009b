"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export function ContactForm({
  headline = "Confirm Reservation",
  subheadline = "A cancellation fee of €50 applies within 24 hours.",
  contactInfo = [
    { icon: "📍", label: "Address", value: "Via delle Ombre 27, Roma" },
    { icon: "📞", label: "Reservations", value: "+39 06 1234 5678" },
    { icon: "🕰️", label: "Hours", value: "Nightly from 19:00 to Late" },
  ],
}: ContactFormProps) {
  return (
    <section id="reservation" className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl italic tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border-0 bg-card/90">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="uppercase tracking-widest text-[#d4af37]">Guest Count</Label>
                    <Input id="guests" placeholder="2 Guests" className="bg-background/60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date" className="uppercase tracking-widest text-[#d4af37]">Arrival Date</Label>
                    <Input id="date" type="date" className="bg-background/60" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="time" className="uppercase tracking-widest text-[#d4af37]">Preferred Time</Label>
                    <Input id="time" placeholder="21:45" className="bg-background/60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="occasion" className="uppercase tracking-widest text-[#d4af37]">Occasion</Label>
                    <Input id="occasion" placeholder="Anniversary, Birthday..." className="bg-background/60" />
                  </div>
                </div>
                <Button type="submit" className="w-full uppercase tracking-[0.2rem]">
                  Confirm Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-8">
            {contactInfo.map(function (info, i) {
              return (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
