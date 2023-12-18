import { Container } from './components/Container/Container';
import FilterContainer from './components/FiltersContainer/FilterContainer';
import Modal from './components/Modal/Modal';
import Offers from './components/Offers/Offers';
import { FiltersProvider } from './context/FiltersContext';

function App() {
   return (
      <FiltersProvider>
         <Container>
            <FilterContainer />
            <Offers />
         </Container>
         <Modal />
      </FiltersProvider>
   );
}

export default App;
