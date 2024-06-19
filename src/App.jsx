// import { Button } from "@mui/material"
// import { TextField } from "@mui/material"
// import { Select } from "./components/Select";
// import { Home } from "./pages/Home";
import ProductList from "./pages/ProductList";

const App = () => {
  // const mockedOptions = [
  //   {label: 'Mocked option 1', value: 'mocked-option-1'},
  //   {label: 'Mocked option 2', value: 'mocked-option-2'},
  //   {label: 'Mocked option 3', value: 'mocked-option-3'},
  //   {label: 'Mocked option 4', value: 'mocked-option-4'},
  //   {label: 'Mocked option 5', value: 'mocked-option-5'},
  //   {label: 'Mocked option 6', value: 'mocked-option-6'},
  //   {label: 'Mocked option 7', value: 'mocked-option-7'},
  //   {label: 'Mocked option 8', value: 'mocked-option-8'},
  //   {label: 'Mocked option 9', value: 'mocked-option-9'},
  //   {label: 'Mocked option 10', value: 'mocked-option-10'},
  // ];
  return (
    <div className="full-height flex-center">
      {/* <Button fullWidth style={{ backgroundColor: 'green', color: 'white'}}>Styled Button</Button> */}
      {/* <TextField label="Username" /> */}
      {/* <Select options={mockedOptions} value={'mocked-option-1'}/> */}
      {/* <Home/> */}
      <ProductList />
    </div>
  )
}

export default App
