import React from 'react';
import { createPortal } from 'react-dom';
import XMarkIcon from '../../icons/XMarkIcon';

interface ModalProps {
   open: boolean;
   onClose: () => void;
}

const Modal = ({ open, onClose }: ModalProps) => {
   if (!open) return null;

   return createPortal(
      <>
         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-20" />
         <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 max-w-[1094px] w-full h-[800px] px-[67px] pt-16 pb-11 rounded-md bg-white border border-solid border-gray-light z-20">
            <button className="absolute top-5 right-5 " onClick={onClose}>
               <XMarkIcon />
            </button>
            <div className="flex gap-6">
               <div>
                  <img src="./src/assets/Rectangle 3.png" alt="" />
               </div>
               <div className="flex flex-col gap-4">
                  <h2 className="text-sb-28 text-black">
                     Java Developer | Greenfield, Microservices
                  </h2>
                  <p className="text-md-14 text-gray-dark">JAVASCRIPT・NEST・TYPESCRIPT・REACT</p>
               </div>
            </div>
            <div className="flex gap-[18px] w-full overflow-y-auto">
               <div className="basis-2/3 bg-gray-lightest p-7 overflow-y-auto">
                  <h3 className="text-sb-20 text-gray-dark">
                     Transportation System Support IT Specialist (Core IT Team)
                  </h3>
                  <br />
                  <p className="text-md-14 text-gray-dark">
                     Miejsce pracy: Robakowo (pow. poznański)Nasi specjaliści wspierają pracę
                     zespołów operacyjnych tworząc narzędzia i aplikacje dla całej organizacji z
                     poziomu centrali Grupy Raben. Odpowiadają za utrzymanie ciągłości pracy i
                     rozwój systemów magazynowych, transportowych i finansowych. Dodatkowo inicjują
                     i zapewniają stabilność pracy wszystkich naszych rozwiązań teleinformatycznych.
                     Pracujemy w międzynarodowym środowisku w 15 krajach, a języka angielskiego
                     używamy na co dzień. Podczas realizacji projektów stawiamy na jakość
                     realizowanych zadań, proaktywne podejście do pojawiających się wyzwań oraz
                     współpracę.Posiadasz dobrą znajomość baz danych? Cechuje Cię wysoka kultura
                     osobista w kontaktach z użytkownikami? Chciałbyś być częścią zespołu
                     odpowiedzialnego za utrzymanie ciągłości pracy transportowych Grupy Raben?
                     Jeżeli na wszystkie z powyższych pytań odpowiedziałeś/łaś twierdząco weź udział
                     w rekrutacji i dołącz do naszego zespołu ekspertów IT! Razem będziemy inicjować
                     i wdrażać projekty oraz świętować wspólne sukcesy. Obiecujemy swobodę w
                     działaniu oraz zapewniamy, że ani przez chwilę nie będziesz się z Nami
                     nudził/ła. Jeśli, tak jak my, uważasz że praca zespołowa nie jest tylko hasłem,
                     serdecznie zapraszamy.To oferujemy: Stabilne zatrudnienie (umowa o pracę na
                     czas nieokreślony po okresie próbnym) w centralnym departamencie IT Grupy Raben
                     zlokalizowanym w Robakowie k/Poznania Zadania ukierunkowane na tworzenie
                     rozwiązań dedykowanych dla Klienta wewnętrznego Codzienny kontakt z j.
                     angielskim (praca w międzynarodowym środowisku) Możliwość realizacji zadań w
                     trybie hybrydowym (50% stacjonarnie w Robakowie k. Poznania, 50% telepraca)
                     oraz elastyczne godziny rozpoczęcia pracy Wynagrodzenie podstawowe (negocjowane
                     okresowo) oraz bonus kwartalny uzależniony od poziomu realizacji zleconych
                     zadań Rozwój w wybranym kierunku specjalizacji w ramach Grupy Raben dzięki
                     m.in. ścieżkom rozwoju, szkoleniom oraz awansom i promocji między działowej
                     Dostęp do platformy edukacyjnej UDEMY z możliwością otrzymania certyfikatów
                     potwierdzających ukończenie kursów Dofinansowanie do nauki języka angielskiego
                     i/lub niemieckiego (nauka za pośrednictwem platformy eTutor) Pakiet benefitów
                     pozapłacowych (prywatna opieka medyczna, dofinansowanie do karty sportowej,
                     ubezpieczenie grupowe, ubezpieczenie na życie dla pracowników i ich rodzin,
                     promocje związane z turystyką i sportem na platformie MyBenefit, zniżki na
                     zakup paliwa na wybranych stacjach benzynowych) Wysoką kulturę organizacyjną:
                     możliwość uczestnictwa w akcjach charytatywnych, cykliczne imprezy i eventy
                     firmowe, okresowe konkursy dla pracowników i wiele innych. Twój zakres
                     obowiązków: Zapewnienie stabilności i ciągłości pracy systemów transportowych
                     we wszystkich krajach Grupy Raben Diagnostyka oraz zdalne wsparcie użytkowników
                     Grupy Raben w zakresie rozwiązywania problemów IT (aplikacje transportowe oraz
                     systemy wymiany danych z klientami zewnętrznymi) Udział w pracach projektowych
                     i współpraca z dostawcami oprogramowania Analiza efektywności procesów oraz
                     systematyczne wprowadzanie usprawnień do systemu Nasze wymagania: min. 3 lata
                     doświadczenie w obszarze rozwoju systemów informatycznych Znajomość języka
                     angielskiego na poziomie komunikatywnym (praca w międzynarodowym środowisku)
                     Znajomość PL/SQL na poziomie podstawowym Znajomość Linux lub AIX na poziomie
                     podstawowym Dobra organizacja pracy i umiejętność realizacji kilku zadań w
                     jednym czasie, nastawienie na współpracę oraz zespołową realizację zadań. Mamy
                     DRIVE do rozwoju!I dlatego jako Raben Management Services wypracowujemy
                     optymalne i nowoczesne rozwiązania wspierające wszystkie spółki Grupy Raben.
                     Jesteśmy po to, aby rozwijać i doskonalić nasz biznes.Tworzymy zgrany zespół
                     złożony z najlepszych ekspertów wielu specjalizacji. Są wśród nas mistrzowie
                     logistyki, pasjonaci transportu, cyfrowi magicy w dziale IT, specjaliści do
                     spraw finansów, eksperci w zakresie audytu wewnętrznego, łowcy talentów w
                     dziale HR i wirtuozi sprzedaży.A czego u nas nie ma? Nudy! Każdy dzień to dla
                     nas nowa przygoda i możliwości.Dla Ciebie też? Fantastycznie! W takim razie
                     czekamy właśnie na Ciebie!
                  </p>
               </div>
               <div className="flex flex-col gap-4 basis-1/3">
                  <div className="flex items-center justify-center px-7 py-4 bg-gray-lightest">
                     <a
                        href="#"
                        className="grow rounded-full bg-accent hover:bg-accent-strong  text-white text-md-14 py-2 text-center transition-colors duration-300 cursor-pointer">
                        Visit offer ➔
                     </a>
                  </div>
                  <div className="flex flex-col justify-center grow p-7 bg-gray-lightest">
                     <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                        <p className="text-sb-12 text-gray-darkest">Added</p>
                        <p className="text-reg-14 text-gray-dark text-right">4 days ago</p>
                     </div>
                     <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                        <p className="text-sb-12 text-gray-darkest">Company</p>
                        <p className="text-reg-14 text-gray-dark text-right">GoPro</p>
                     </div>
                     <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                        <p className="text-sb-12 text-gray-darkest">Seniority</p>
                        <p className="text-reg-14 text-gray-dark text-right">Senior</p>
                     </div>
                     <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                        <p className="text-sb-12 text-gray-darkest">Location</p>
                        <p className="text-reg-14 text-gray-dark text-right">
                           Barcelona, <br /> Spain
                        </p>
                     </div>
                     <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                        <p className="text-sb-12 text-gray-darkest">Job type</p>
                        <p className="text-reg-14 text-gray-dark text-right">Fully-remote</p>
                     </div>
                     <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light last:border-none">
                        <p className="text-sb-12 text-gray-darkest">Contract</p>
                        <p className="text-reg-14 text-gray-dark text-right">Permanent</p>
                     </div>
                     <div className="flex items-center justify-between py-5 first:pt-0 last:pb-0 border-b border-gray-light  last:border-none">
                        <p className="text-sb-12 text-gray-darkest">Salary</p>
                        <p className="text-reg-14 text-gray-dark text-right">
                           10000 - 18000 PLN net
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>,
      document.getElementById('portal') as HTMLElement,
   );
};

export default Modal;
