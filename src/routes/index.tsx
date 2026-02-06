import { BrowserRouter, Routes, Route } from 'react-router';

// =====================
// Public
// =====================
import Index from '@/app';
import NotFoundPage from '@/app/NotFoundPage';
import About from '@/app/company/about';

// =====================
// Services
// =====================
import Services from '@/app/services';
import VisionExams from '@/app/services/exams';
import Glasses from '@/app/services/glasses';
import ContactLenses from '@/app/services/contact-lenses';
import Adjustments from '@/app/services/adjustments';
import EyeHealth from '@/app/services/eye-health';
import SpecialLenses from '@/app/services/special-lenses';
import Contacts from '@/app/company/contacts';
import BookAppointment from '@/app/BookAppointment';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===================== */}
        {/* Public */}
        {/* ===================== */}
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contactos" element={<Contacts />} />

        {/* ===================== */}
        {/* Serviços */}
        {/* ===================== */}
        <Route path="/servicos" element={<Services />} />
        <Route
          path="/servicos/exames-de-visao"
          element={<VisionExams />}
        />
        <Route
          path="/servicos/oculos"
          element={<Glasses />}
        />
        <Route
          path="/servicos/lentes-de-contato"
          element={<ContactLenses />}
        />
        <Route
          path="/servicos/ajuste-e-manutencao"
          element={<Adjustments />}
        />
        <Route
          path="/servicos/saude-ocular"
          element={<EyeHealth />}
        />
        <Route
          path="/servicos/lentes-especiais"
          element={<SpecialLenses />}
        />
        <Route
          path="/marcar-consulta"
          element={<BookAppointment />}
        />

        {/* ===================== */}
        {/* Fallback */}
        {/* ===================== */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
