import { Container } from './components/Container/Container';
import { FilterBox } from './components/Filter/FilterBox';
import Offers from './components/Offers/Offers';
import { FiltersProvider } from './context/FiltersContext';

function App() {
   return (
      <FiltersProvider>
         <Container>
            <header className="flex flex-col gap-10 py-5 px-4 md:py-10">
               <h1 className="text-sb-28 font-bold text-gray-darkest">👾 JO-BOARD</h1>
               <FilterBox />
            </header>
            <Offers />
         </Container>
      </FiltersProvider>
   );
}

export default App;
