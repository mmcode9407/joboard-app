import { Container } from './components/Container/Container';
import FilterContainer from './components/FiltersContainer/FilterContainer';
import Offers from './components/Offers/Offers';
import { FiltersProvider } from './context/FiltersContext';

function App() {
   return (
      <FiltersProvider>
         <Container>
            <FilterContainer />
            <Offers />
         </Container>
      </FiltersProvider>
   );
}

export default App;
