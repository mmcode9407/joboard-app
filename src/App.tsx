import { Container } from './components/Container/Container';
import Offers from './components/Offers/Offers';

function App() {
   return (
      <Container>
         <header className="py-5 px-4 md:py-10">
            <h1 className="text-sb-28 font-bold text-gray-darkest">👾 JO-BOARD</h1>
         </header>
         <Offers />
      </Container>
   );
}

export default App;
