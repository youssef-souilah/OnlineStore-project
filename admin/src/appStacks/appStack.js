import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Single from "../pages/single/Single";
import NewProduct from "../pages/new/NewProduct";
import NewUser from "../pages/new/NewUser";
import NewCategory from "../pages/new/NewCategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  userInputs } from "../Conf/userInputs";
import {  productInputs } from "../Conf/ProductInputs";
import {  categoryInputes } from "../Conf/categoryInputs";
import {userColumns,userRows,userActions} from  "../displayData/userTable";
import {productColumns,productRows,productActions} from  "../displayData/productTable";
import {orderColumns,orderRows,orderActions} from  "../displayData/orderTable";
import {categoryColumns} from  "../displayData/categoryTable";
import UpdateProduct from "../pages/update/UpdateProduct";
import UpdateCategory from "../pages/update/UpdateCategory";

const AppStack=()=>{
    return(
        <BrowserRouter>
            <Routes >
                <Route path="/">
                    <Route index element={<Home />} />
                        <Route path="users">
                        <Route index element={<List  pageType={"user"}  columns={userColumns} />} />
                        <Route path=":userId" element={<Single />} />
                        <Route
                            path="new"
                            element={<NewUser pageType={"user"} inputs={userInputs} title="Add New User" />}
                        />
                    </Route>
                    <Route path="products">
                        <Route index element={<List  pageType={"product"}  columns={productColumns}  />} />
                        <Route
                            path="new"
                            element={<NewProduct pageType={"product"} inputs={productInputs} title="Add New Product" />}
                        />
                        <Route
                            path="update/:productId"
                            element={<UpdateProduct pageType={"product"} inputs={productInputs} title="Update Product" />}
                        />
                    </Route>
                    <Route path="orders">
                        <Route index element={<List   pageType={"order"} columns={orderColumns}/>} />
                    </Route>
                    <Route path="categories">
                        <Route index element={<List title="Categories" pageType={"category"}  columns={categoryColumns   } />} />
                        <Route
                            path="new"
                            element={<NewCategory pageType={"category"} inputs={categoryInputes} title="Add New Category" />}
                        />
                        <Route
                            path="update/:categoryId"
                            element={<UpdateCategory pageType={"category"} inputs={categoryInputes} title="Update Category" />}
                        />
                    </Route>
                    <Route path="stats" />
                </Route>
                <Route path="*" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppStack