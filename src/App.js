import logo from './logo.svg';
import './App.css';
import ShowProduct from './ShowProduct';

function App() {


  const products=[
    {
      name:"pencil",
      category:"Stationery",
      price:1.5
    },{
      name:"pen",
      category:"Stationery",
      price:6
    },{
      name:"ball",
      category:"toys",
      price:10
    },{
      name:"car",
      category:"toys",
      price:30
    },,{
      name:"ball2",
      category:"toys",
      price:10
    },{
      name:"car2",
      category:"toys",
      price:30
    },
  ]
  return (
    <div className="App">
      <ShowProduct id="showProducts" products={products} category="toys"/>
    </div>
  );
}

export default App;
