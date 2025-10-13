import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

export default function App() {
  const phoneNumber = "085 087 0276";
  const internationalPhone = "+31085 087 0276";

  const handleCall = () => {
    window.location.href = `tel:${internationalPhone}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Phone className="w-10 h-10 text-blue-600" />
          </div>
          
          <div className="mb-2">
            <p className="text-sm text-muted-foreground">Advies Neutraal</p>
          </div>
          
          <h1 className="mb-4">Hulp nodig met uw energieleverancier?</h1>
          <p className="text-muted-foreground mb-6">
            Bel direct met onze klantenservice voor persoonlijk advies over uw energiecontract
          </p>

          {/* Benefits badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm">Gratis bellen</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm">Direct verbonden</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm">Geen wachtrij</span>
            </div>
          </div>

          {/* Primary CTA */}
          <Button 
            onClick={handleCall}
            size="lg"
            className="w-full h-16 text-xl mb-3 bg-blue-600 hover:bg-blue-700"
          >
            <Phone className="mr-3 h-6 w-6" />
            {phoneNumber}
          </Button>
          
          <p className="text-xs text-muted-foreground">
            Bereikbaar op werkdagen van 08:00 - 20:00 uur
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid gap-3 mb-8">
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm mb-1">Onafhankelijk Advies</h3>
                <p className="text-sm text-muted-foreground">
                  Wij vergelijken alle energieleveranciers voor u
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm mb-1">Snelle Hulp</h3>
                <p className="text-sm text-muted-foreground">
                  Direct contact met onze klantenservice experts
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm mb-1">Betrouwbaar</h3>
                <p className="text-sm text-muted-foreground">
                  Persoonlijk advies op maat voor uw situatie
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-lg p-6 border border-border mb-8">
          <h3 className="mb-4 text-center">Wij helpen u met:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Vragen over uw energiecontract</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Overstappen naar een goedkopere aanbieder</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Uitleg over uw energiefactuur</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Vergelijken van energietarieven</span>
            </li>
          </ul>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <Button 
            onClick={handleCall}
            variant="outline"
            size="lg"
            className="w-full h-14 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Phone className="mr-2 h-5 w-5" />
            Bel nu: {phoneNumber}
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 py-8 text-center">
        <p className="text-xs text-muted-foreground mb-2">
          © 2025 Advies Neutraal - Onafhankelijk Energieadvies
        </p>
        <p className="text-xs text-muted-foreground">
          Klantenservice bereikbaar op werkdagen
        </p>
      </footer>
    </div>
  );
}
