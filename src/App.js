import { Route, Routes } from "react-router-dom";
import "./App.css";
// Dashboard
import Dashboard from "./components/Main/Dashboard/Dashboard.jsx";
// Sale
import SalesForm from "./components/Main/Sales/DiscountSale/SalesForm.jsx";
import SalesTable from "./components/Main/Sales/DiscountSale/SalesTable.jsx";
import SaleMenuTab from "./components/Main/Sales/SaleMenuTab.jsx";
import DiscountSales from "./components/Main/Sales/DiscountSale/DiscountSales.jsx";
import Analysis from "./components/Main/Sales/Analysis/Analysis.jsx";
import Marketing from "./components/Main/Sales/Marketing/Marketing.jsx";
import TodoForm from "./components/Main/Sales/Marketing/TodoForm.jsx";
import MarketingTodoEdit from "./components/Main/Sales/Marketing/MarketingTodoEdit.jsx";
import SaleProductEditForm from "./components/Main/Sales/DiscountSale/SaleProductEditForm.jsx";
// Inventory
import Inventory from "./components/Main/Inventory/Inventory.jsx";
import InventoryAnalysis from "./components/Main/Inventory/Analysis/InventoryAnalysis.jsx";
import InventoryCategory from "./components/Main/Inventory/Category/InventoryCategory.jsx";
import InventoryReturns from "./components/Main/Inventory/Returns/InventoryReturns.jsx";
import ReturnEditForm from "./components/Main/Inventory/Returns/ReturnEditForm.jsx";
import ReturnAddForm from "./components/Main/Inventory/Returns/ReturnAddForm.jsx";
import InventoryStockAdd from "./components/Main/Inventory/Instock/InventoryStockAdd.jsx";
import Supplier from "./components/Main/Inventory/Supplier/Supplier.jsx";
import SupplierEditForm from "./components/Main/Inventory/Supplier/SupplierEditForm.jsx";
import SupplierAddForm from "./components/Main/Inventory/Supplier/SupplierAddForm.jsx";
import Instock from "./components/Main/Inventory/Instock/Instock.jsx";
import InventoryEditStock from "./components/Main/Inventory/Instock/InventoryEditStock.jsx";
// Shop Owner
import ShopOwner from "./components/Data/ShopOwner/ShopOwner.jsx";
import ShopOwnerAddForm from "./components/Data/ShopOwner/ShopOwnerAddForm.jsx";
import ShopOwnerEditForm from "./components/Data/ShopOwner/ShopOwnerEditForm.jsx";
// User
import User from "./components/Data/UserData/User.jsx";
import UserAddForm from "./components/Data/UserData/UserAddForm";
import UserEditForm from "./components/Data/UserData/UserEditForm.jsx";
// Category
import Category from "./components/Data/Category/Category.jsx";
import CategoryAddForm from "./components/Data/Category/CategoryAddForm.jsx";
import CategoryEditForm from "./components/Data/Category/CategoryEditForm.jsx";
// Product
import Product from "./components/Data/Products/Product.jsx";
import ProductAddForm from "./components/Data/Products/ProductAddForm.jsx";
import ProductEditForm from "./components/Data/Products/ProductEditForm.jsx";
// Order
import Orders from "./components/Data/Orders/Orders.jsx";
import OrderAddForm from "./components/Data/Orders/OrderAddForm.jsx";
import OrderView from "./components/Data/Orders/OrderView.jsx";
// Currency
import Currency from "./components/Data/Currency/Currency.jsx";
import CurrencyAddForm from "./components/Data/Currency/CurrencyAddForm.jsx";
import CurrencyEditForm from "./components/Data/Currency/CurrencyEditForm.jsx";
// Regions
import Regions from "./components/Data/Region/Regions.jsx";
import RegionAddForm from "./components/Data/Region/RegionAddForm.jsx";
import RegionEditForm from "./components/Data/Region/RegionEditForm.jsx";
// Coupon
import Coupon from "./components/Data/Coupon/Coupon.jsx";
import CouponAddForm from "./components/Data/Coupon/CouponAddForm.jsx";
import CouponEditForm from "./components/Data/Coupon/CouponEditForm.jsx";
import CouponProduct from "./components/Data/CouponProducts/CouponProduct.jsx";
import CouponProductAddForm from "./components/Data/CouponProducts/CouponProductAddForm.jsx";
import CouponProductEditForm from "./components/Data/CouponProducts/CouponProductEditForm.jsx";
// Profile
import Profile from "./components/Profile/Profile.jsx";
import ProfileInformation from "./components/Profile/ProfileInformation.jsx";
import ProfileEditForm from "./components/Profile/ProfileEditForm.jsx";
// Home
import AdminHome from "./components/AdminHome.jsx";
// Login
import Login from "./components/Login/Login.jsx";
// Register
import Register from "./components/Register/Register.jsx";
// Chat
import Chat from "./components/Application/Chat/Chat.jsx";
// Mail
import MailBox from "./components/Application/Mail Box/MailBox.jsx";
import MailTable from "./components/Application/Mail Box/MailTable.jsx";
import MailForm from "./components/Application/Mail Box/MailForm.jsx";
// Error
import Error from "./components/Error/Error.jsx";
// ForgetPassword
import ForgetPassword from "./components/ForgetPassword/ForgetPassword.jsx";
// FAQ
import FAQ from "./components/Application/FAQ/FAQ.jsx";
// Shop Owner Home
import ShopOwnerHome from "./components/ShopOwnerHome.jsx";
// Shop Owner Dashboard
import ShopOwnerDashboard from "./components/Main/Dashboard/ShopOwnerDashboard.jsx";
// Shop Owner Category
import ShopOwnerCategory from "./components/Data/Category/ShopOwnerCategory.jsx";
import ShopOwnerCategoryAddForm from "./components/Data/Category/ShopOwnerCategoryAddForm.jsx";
import ShopOwnerCategoryEditForm from "./components/Data/Category/ShopOwnerCategoryEditForm.jsx";
//Shop Owner Product
import ShopOwnerProduct from "./components/Data/Products/ShopOwnerProducts.jsx";
import ShopOwnerProductAddForm from "./components/Data/Products/ShopOwnerProductAddForm.jsx";
import ShopOwnerProductEditForm from "./components/Data/Products/ShopOwnerProductEditForm.jsx";
import ShopOwnerProfile from "./components/Profile/ShopOwnerProfile.jsx";
import ShopOwnerProfileInformation from "./components/Profile/ShopOwnerProfileInfomation.jsx";
import ShopOwnerProfileEditForm from "./components/Profile/ShopOwnerProfileEditForm.jsx";
import ShopOwnerFAQ from "./components/Application/FAQ/ShopOwnerFAQ.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/admin/" element={<AdminHome />}>
          {/* Dashboard */}
          <Route path="dashboard/" element={<Dashboard />} />
          {/* Sales */}
          <Route path="sales/" element={<SaleMenuTab />}>
            <Route path="discountsale/" element={<DiscountSales />}>
              <Route
                path="1111"
                element={
                  <SalesTable
                    title="11.11 Sale"
                    row={[
                      {
                        id: 1,
                        title: "Snow",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 35,
                        discount: "30%",
                      },
                      {
                        id: 2,
                        title: "Lannister",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 42,
                        discount: "30%",
                      },
                      {
                        id: 3,
                        title: "Lannister",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 45,
                        discount: "20%",
                      },
                      {
                        id: 4,
                        title: "Stark",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 16,
                        discount: "20%",
                      },
                      {
                        id: 5,
                        title: "Targaryen",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 20,
                        discount: "20%",
                      },
                      {
                        id: 6,
                        title: "Melisandre",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 150,
                        discount: "20%",
                      },
                      {
                        id: 7,
                        title: "Clifford",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 44,
                        discount: "20%",
                      },
                      {
                        id: 8,
                        title: "Frances",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 36,
                        discount: "20%",
                      },
                      {
                        id: 9,
                        title: "Roxie",
                        image:
                          "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg",
                        price: 65,
                        discount: "20%",
                      },
                    ]}
                  />
                }
              />
              <Route path="saleeditform" element={<SaleProductEditForm />} />
              <Route path="form" element={<SalesForm />} />
            </Route>
            <Route path="analysis/" element={<Analysis />}></Route>
            <Route path="marketing/todoform" element={<TodoForm />} />
            <Route
              path="marketing/todoeditform"
              element={<MarketingTodoEdit />}
            />

            <Route path="marketing/" element={<Marketing />}></Route>
          </Route>
          {/* Inventory */}
          <Route path="inventory/" element={<Inventory />}>
            <Route path="returns/returnaddform" element={<ReturnAddForm />} />
            <Route path="instock/addstock" element={<InventoryStockAdd />} />
            <Route path="instock/editstock" element={<InventoryEditStock />} />
            <Route path="analysis" element={<InventoryAnalysis />} />
            <Route path="category" element={<InventoryCategory />} />
            <Route path="suppliers" element={<Supplier />} />
            <Route path="instock" element={<Instock />} />
            <Route
              path="suppliers/suppliereditform"
              element={<SupplierEditForm />}
            />
            <Route
              path="suppliers/supplieraddform"
              element={<SupplierAddForm />}
            />
            <Route path="returns/returneditform" element={<ReturnEditForm />} />
            <Route path="returns/returnaddform" element={<ReturnAddForm />} />
            <Route path="returns" element={<InventoryReturns />} />
          </Route>
          {/* Shop Owner */}
          <Route path="shop_owners" element={<ShopOwner />} />
          <Route path="shop_owners/add" element={<ShopOwnerAddForm />} />
          <Route path="shop_owners/edit" element={<ShopOwnerEditForm />} />
          {/* User */}
          <Route path="users/" element={<User />} />
          <Route path="users/add" element={<UserAddForm />} />
          <Route path="users/edit" element={<UserEditForm />} />
          {/* Category */}
          <Route path="categories/" element={<Category />} />
          <Route path="categories/add" element={<CategoryAddForm />} />
          <Route path="categories/edit" element={<CategoryEditForm />} />
          {/* Product */}
          <Route path="products/" element={<Product />} />
          <Route path="products/add" element={<ProductAddForm />} />
          <Route path="products/edit" element={<ProductEditForm />} />
          {/* Order */}
          <Route path="orders" element={<Orders />} />
          <Route path="orders/add" element={<OrderAddForm />} />
          <Route path="orders/view" element={<OrderView />} />
          {/* Currency */}
          <Route path="currency" element={<Currency />} />
          <Route path="currency/add" element={<CurrencyAddForm />} />
          <Route path="currency/edit" element={<CurrencyEditForm />} />
          {/* Region */}
          <Route path="regions" element={<Regions />} />
          <Route path="regions/add" element={<RegionAddForm />} />
          <Route path="regions/edit" element={<RegionEditForm />} />
          {/* Coupon */}
          <Route path="coupons" element={<Coupon />} />
          <Route path="coupons/add" element={<CouponAddForm />} />
          <Route path="coupons/edit" element={<CouponEditForm />} />
          {/* CouponProducts */}
          <Route path="coupon_products" element={<CouponProduct />} />
          <Route
            path="coupon_products/add"
            element={<CouponProductAddForm />}
          />
          <Route
            path="coupon_products/edit"
            element={<CouponProductEditForm />}
          />
          {/* Profile */}
          <Route path="profile/" element={<Profile />}>
            <Route index element={<ProfileInformation />} />
            <Route path="edit" element={<ProfileEditForm />} />
          </Route>
          {/* Mail Box */}
          <Route path="mailbox/" element={<MailBox />}>
            <Route index element={<MailTable />} />
            <Route path="compose" element={<MailForm />} />
            <Route path="primary" element={<MailTable />} />
            <Route path="social" element={<MailTable />} />
            <Route path="promotions" element={<MailTable />} />
            <Route path="started" element={<MailTable />} />
            <Route path="sendmails" element={<MailTable />} />
            <Route path="drafts" element={<MailTable />} />
            <Route path="spams" element={<MailTable />} />
            <Route path="trash" element={<MailTable />} />
          </Route>
          {/* Chat */}
          <Route path="chat" element={<Chat />} />
          {/* FAQ */}
          <Route path="faq" element={<FAQ />} />
        </Route>
        <Route path="/shop_owner/" element={<ShopOwnerHome />}>
          {/* Dashboard */}
          <Route path="dashboard/" element={<ShopOwnerDashboard />} />
          {/* Category */}
          <Route path="categories/" element={<ShopOwnerCategory />} />
          <Route path="categories/add" element={<ShopOwnerCategoryAddForm />} />
          <Route
            path="categories/edit"
            element={<ShopOwnerCategoryEditForm />}
          />
          {/* Product */}
          <Route path="products/" element={<ShopOwnerProduct />} />
          <Route path="products/add" element={<ShopOwnerProductAddForm />} />
          <Route path="products/edit" element={<ShopOwnerProductEditForm />} />
          {/* Profile */}
          <Route path="profile/" element={<ShopOwnerProfile />}>
            <Route index element={<ShopOwnerProfileInformation />} />
            <Route path="edit" element={<ShopOwnerProfileEditForm />} />
          </Route>
          {/* FAQ */}
          <Route path="faq" element={<ShopOwnerFAQ />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
