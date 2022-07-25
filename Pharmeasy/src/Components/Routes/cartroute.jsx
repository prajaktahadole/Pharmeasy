import { Route, Switch } from "react-router-dom"
import Cart from '../../Pages/Cart/Cart'
import Checkout from "../../Pages/Cart/Payment/checkout";
import Summary from "../../Pages/Cart/Payment/summary";

const CartRoutes = () => {
    return (
        <Switch>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/:cart/:checkout">
                <Checkout />
            </Route>

           
            
            <Route exact path="/cart/summary">
                <Summary />
            </Route>
            <Route>
                <div>Not Found</div>
            </Route>
        </Switch>
    );
};

export default CartRoutes;