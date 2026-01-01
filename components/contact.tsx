"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin } from "lucide-react";
import MapFrance from "./map/map-france";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert(
      "Votre demande a bien été envoyée. Nous vous recontacterons rapidement."
    );
  };

  return (
    <section id="contact" className="relative bg-slate-950 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-slate-400">
            Une question, un besoin de devis ? Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                    Téléphone
                  </p>
                  <p className="text-white font-medium">06 98 29 98 63</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-white font-medium">contact@froidpro.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                    Zone d&apos;intervention
                  </p>
                  <p className="text-white font-medium">Rayon de 80 km</p>
                </div>
              </div>
            </div>

            {/* Mini map placeholder */}
            <MapFrance />

            <div className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
              <p className="text-sm text-slate-300">
                <span className="text-cyan-400 font-medium">Urgence 24/7</span>{" "}
                — En cas de panne critique, notre équipe peut intervenir en
                dehors des horaires habituels.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300 text-sm">
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Votre nom"
                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-slate-300 text-sm">
                    Téléphone ou email
                  </Label>
                  <Input
                    id="contact"
                    required
                    placeholder="Comment vous joindre"
                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="text-slate-300 text-sm">
                  Type de demande
                </Label>
                <select
                  id="type"
                  className="w-full h-10 px-3 rounded-md bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="devis">Demande de devis</option>
                  <option value="maintenance">Contrat de maintenance</option>
                  <option value="depannage">Dépannage</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300 text-sm">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre besoin..."
                  className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  required
                  className="mt-0.5 border-slate-700 data-[state=checked]:bg-cyan-500"
                />
                <Label
                  htmlFor="consent"
                  className="text-slate-400 text-sm leading-relaxed"
                >
                  J&apos;accepte que mes données soient utilisées pour me
                  recontacter dans le cadre de ma demande.
                </Label>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-slate-900 hover:bg-slate-100 font-medium px-8"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  asChild
                >
                  <a href="tel:0698299863">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
