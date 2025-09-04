'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le lien mailto avec les données du formulaire
    const subject = encodeURIComponent(`Contact Portfolio - Message de ${formData.name}`);
    const body = encodeURIComponent(`Bonjour Franck,

Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Message envoyé depuis votre portfolio`);
    
    const mailtoLink = `mailto:franck.poletti@gmail.com?subject=${subject}&body=${body}`;
    
    // Afficher le message de confirmation
    setIsSubmitted(true);
    
    // Ouvrir la boîte mail après un petit délai
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);
    
    // Réinitialiser le formulaire et le message après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'franck.poletti@gmail.com',
      href: 'mailto:franck.poletti@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 6 12 97 31 66',
      href: 'tel:+3361297316',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Lyon, France',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Franck2b',
      color: 'text-gray-700 hover:text-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/franck-poletti-443a1b266',
      color: 'text-blue-600 hover:text-blue-700',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intéressé par mon profil ? N&apos;hésitez pas à me contacter pour discuter 
            de vos projets ou opportunités de collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Informations de contact</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 font-semibold">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 hover:border-blue-600 hover:shadow-lg transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Envoyez-moi un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nom complet
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                        placeholder="votre.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitted}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitted ? 'Message envoyé...' : 'Envoyer le message'}
                  </Button>
                </form>

                {/* Message de confirmation avec animation */}
                {isSubmitted && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="text-green-800 font-semibold">Message envoyé avec succès !</p>
                        <p className="text-green-600 text-sm">Votre application mail va s'ouvrir automatiquement.</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;