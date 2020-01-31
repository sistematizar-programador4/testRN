import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ProductForm from "./src/components/products/form.component";
import ProductList from "./src/components/products/list.component";

const AppStack = createStackNavigator({
  ProductForm: ProductForm,
  ProductList: ProductList
});

export default createAppContainer(AppStack);
