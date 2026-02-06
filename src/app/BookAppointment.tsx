import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const stores = [
  'Eye Plus – Mãe Jacinto',
  'Eye Plus – Vila de Viana',
];

const professionals = [
  'Dr. Ana Costa – Optometrista Chefe',
  'Dr. João Martins – Especialista em Lentes de Contato',
  'Dra. Marta Silva – Consultora de Óculos de Grau e Solares',
  'Dr. Luís Pereira – Exames e Diagnósticos',
];

const services = [
  'Exame de Visão Completo',
  'Óculos de Grau e Solares',
  'Lentes de Contato',
  'Ajuste e Manutenção de Óculos',
  'Consultoria em Saúde Ocular',
  'Exames para Lentes Especiais',
];

const BookAppointment = () => {
  const [selectedStore, setSelectedStore] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      store: selectedStore,
      professional: selectedProfessional,
      service: selectedService,
      date: selectedDate ? format(selectedDate, 'dd/MM/yyyy') : null,
      notes,
    });
    alert('Consulta marcada com sucesso! (Simulação)');
    // Aqui você pode integrar com backend/API real
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Marcar Consulta</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              Preencha os dados abaixo para agendar sua consulta na Eye Plus Óptico.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
          >
            {/* Nome */}
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Loja */}
            <div>
              <Label htmlFor="store">Loja</Label>
              <Select
                value={selectedStore}
                onValueChange={setSelectedStore}
              >
                <SelectTrigger id="store">
                  <SelectValue placeholder="Selecione uma loja" />
                </SelectTrigger>
                <SelectContent>
                  {stores.map((store) => (
                    <SelectItem key={store} value={store}>
                      {store}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Profissional */}
            <div>
              <Label htmlFor="professional">Profissional</Label>
              <Select
                value={selectedProfessional}
                onValueChange={setSelectedProfessional}
              >
                <SelectTrigger id="professional">
                  <SelectValue placeholder="Selecione um profissional" />
                </SelectTrigger>
                <SelectContent>
                  {professionals.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Serviço */}
            <div>
              <Label htmlFor="service">Serviço</Label>
              <Select
                value={selectedService}
                onValueChange={setSelectedService}
              >
                <SelectTrigger id="service">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Data */}
            <div>
              <Label>Data da Consulta</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : 'Selecione uma data'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Notas adicionais */}
            <div>
              <Label htmlFor="notes">Notas Adicionais</Label>
              <Textarea
                id="notes"
                placeholder="Informações adicionais (opcional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Botão */}
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
              Confirmar Consulta
            </Button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BookAppointment;
