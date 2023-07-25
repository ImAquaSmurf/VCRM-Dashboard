<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import ScrollToTop from "../base-components/ScrollToTop";
  import SideMenu from "../layouts/SideMenu/SideMenu.svelte";
  import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.svelte";
  import TopMenu from "../layouts/TopMenu/TopMenu.svelte";
  import DashboardOverview1 from "../pages/DashboardOverview1.svelte";
  import DashboardOverview2 from "../pages/DashboardOverview2.svelte";
  import DashboardOverview3 from "../pages/DashboardOverview3.svelte";
  import DashboardOverview4 from "../pages/DashboardOverview4.svelte";
  import Categories from "../pages/Categories.svelte";
  import AddProduct from "../pages/AddProduct.svelte";
  import ProductList from "../pages/ProductList.svelte";
  import ProductGrid from "../pages/ProductGrid.svelte";
  import TransactionList from "../pages/TransactionList.svelte";
  import TransactionDetail from "../pages/TransactionDetail.svelte";
  import SellerList from "../pages/SellerList.svelte";
  import SellerDetail from "../pages/SellerDetail.svelte";
  import Reviews from "../pages/Reviews.svelte";
  import Inbox from "../pages/Inbox.svelte";
  import FileManager from "../pages/FileManager.svelte";
  import PointOfSale from "../pages/PointOfSale.svelte";
  import Chat from "../pages/Chat.svelte";
  import Post from "../pages/Post.svelte";
  import Calendar from "../pages/Calendar.svelte";
  import CrudDataList from "../pages/CrudDataList.svelte";
  import CrudForm from "../pages/CrudForm.svelte";
  import UsersLayout1 from "../pages/UsersLayout1.svelte";
  import UsersLayout2 from "../pages/UsersLayout2.svelte";
  import UsersLayout3 from "../pages/UsersLayout3.svelte";
  import ProfileOverview1 from "../pages/ProfileOverview1.svelte";
  import ProfileOverview2 from "../pages/ProfileOverview2.svelte";
  import ProfileOverview3 from "../pages/ProfileOverview3.svelte";
  import WizardLayout1 from "../pages/WizardLayout1.svelte";
  import WizardLayout2 from "../pages/WizardLayout2.svelte";
  import WizardLayout3 from "../pages/WizardLayout3.svelte";
  import BlogLayout1 from "../pages/BlogLayout1.svelte";
  import BlogLayout2 from "../pages/BlogLayout2.svelte";
  import BlogLayout3 from "../pages/BlogLayout3.svelte";
  import PricingLayout1 from "../pages/PricingLayout1.svelte";
  import PricingLayout2 from "../pages/PricingLayout2.svelte";
  import InvoiceLayout1 from "../pages/InvoiceLayout1.svelte";
  import InvoiceLayout2 from "../pages/InvoiceLayout2.svelte";
  import FaqLayout1 from "../pages/FaqLayout1.svelte";
  import FaqLayout2 from "../pages/FaqLayout2.svelte";
  import FaqLayout3 from "../pages/FaqLayout3.svelte";
  import Login from "../pages/Login.svelte";
  import Register from "../pages/Register.svelte";
  import ErrorPage from "../pages/ErrorPage.svelte";
  import UpdateProfile from "../pages/UpdateProfile.svelte";
  import ChangePassword from "../pages/ChangePassword.svelte";
  import RegularTable from "../pages/RegularTable.svelte";
  import Tabulator from "../pages/Tabulator.svelte";
  import Modal from "../pages/Modal.svelte";
  import Slideover from "../pages/Slideover.svelte";
  import Notification from "../pages/Notification.svelte";
  import Tab from "../pages/Tab.svelte";
  import Accordion from "../pages/Accordion.svelte";
  import Button from "../pages/Button.svelte";
  import Alert from "../pages/Alert.svelte";
  import ProgressBar from "../pages/ProgressBar.svelte";
  import Tooltip from "../pages/Tooltip.svelte";
  import Dropdown from "../pages/Dropdown.svelte";
  import Typography from "../pages/Typography.svelte";
  import Icon from "../pages/Icon.svelte";
  import LoadingIcon from "../pages/LoadingIcon.svelte";
  import RegularForm from "../pages/RegularForm.svelte";
  import Datepicker from "../pages/Datepicker.svelte";
  import TomSelect from "../pages/TomSelect.svelte";
  import FileUpload from "../pages/FileUpload.svelte";
  import WysiwygEditor from "../pages/WysiwygEditor.svelte";
  import Validation from "../pages/Validation.svelte";
  import Chart from "../pages/Chart.svelte";
  import Slider from "../pages/Slider.svelte";
  import ImageZoom from "../pages/ImageZoom.svelte";
</script>

<Router primary={false}>
  <ScrollToTop />
  <Route path="/*">
    <SideMenu>
      <Route path="/">
        <DashboardOverview1 />
      </Route>
      <Route path="dashboard-overview-2">
        <DashboardOverview2 />
      </Route>
      <Route path="dashboard-overview-3">
        <DashboardOverview3 />
      </Route>
      <Route path="dashboard-overview-4">
        <DashboardOverview4 />
      </Route>
      <Route path="categories">
        <Categories />
      </Route>
      <Route path="add-product">
        <AddProduct />
      </Route>
      <Route path="product-list">
        <ProductList />
      </Route>
      <Route path="product-grid">
        <ProductGrid />
      </Route>
      <Route path="transaction-list">
        <TransactionList />
      </Route>
      <Route path="transaction-detail">
        <TransactionDetail />
      </Route>
      <Route path="seller-list">
        <SellerList />
      </Route>
      <Route path="seller-detail">
        <SellerDetail />
      </Route>
      <Route path="reviews">
        <Reviews />
      </Route>
      <Route path="inbox">
        <Inbox />
      </Route>
      <Route path="file-manager">
        <FileManager />
      </Route>
      <Route path="point-of-sale">
        <PointOfSale />
      </Route>
      <Route path="chat">
        <Chat />
      </Route>
      <Route path="post">
        <Post />
      </Route>
      <Route path="calendar">
        <Calendar />
      </Route>
      <Route path="crud-data-list">
        <CrudDataList />
      </Route>
      <Route path="crud-form">
        <CrudForm />
      </Route>
      <Route path="users-layout-1">
        <UsersLayout1 />
      </Route>
      <Route path="users-layout-2">
        <UsersLayout2 />
      </Route>
      <Route path="users-layout-3">
        <UsersLayout3 />
      </Route>
      <Route path="profile-overview-1">
        <ProfileOverview1 />
      </Route>
      <Route path="profile-overview-2">
        <ProfileOverview2 />
      </Route>
      <Route path="profile-overview-3">
        <ProfileOverview3 />
      </Route>
      <Route path="wizard-layout-1">
        <WizardLayout1 />
      </Route>
      <Route path="wizard-layout-2">
        <WizardLayout2 />
      </Route>
      <Route path="wizard-layout-3">
        <WizardLayout3 />
      </Route>
      <Route path="blog-layout-1">
        <BlogLayout1 />
      </Route>
      <Route path="blog-layout-2">
        <BlogLayout2 />
      </Route>
      <Route path="blog-layout-3">
        <BlogLayout3 />
      </Route>
      <Route path="pricing-layout-1">
        <PricingLayout1 />
      </Route>
      <Route path="pricing-layout-2">
        <PricingLayout2 />
      </Route>
      <Route path="invoice-layout-1">
        <InvoiceLayout1 />
      </Route>
      <Route path="invoice-layout-2">
        <InvoiceLayout2 />
      </Route>
      <Route path="faq-layout-1">
        <FaqLayout1 />
      </Route>
      <Route path="faq-layout-2">
        <FaqLayout2 />
      </Route>
      <Route path="faq-layout-3">
        <FaqLayout3 />
      </Route>
      <Route path="update-profile">
        <UpdateProfile />
      </Route>
      <Route path="change-password">
        <ChangePassword />
      </Route>
      <Route path="regular-table">
        <RegularTable />
      </Route>
      <Route path="tabulator">
        <Tabulator />
      </Route>
      <Route path="modal">
        <Modal />
      </Route>
      <Route path="slideover">
        <Slideover />
      </Route>
      <Route path="notification">
        <Notification />
      </Route>
      <Route path="tab">
        <Tab />
      </Route>
      <Route path="accordion">
        <Accordion />
      </Route>
      <Route path="button">
        <Button />
      </Route>
      <Route path="alert">
        <Alert />
      </Route>
      <Route path="progress-bar">
        <ProgressBar />
      </Route>
      <Route path="tooltip">
        <Tooltip />
      </Route>
      <Route path="dropdown">
        <Dropdown />
      </Route>
      <Route path="typography">
        <Typography />
      </Route>
      <Route path="icon">
        <Icon />
      </Route>
      <Route path="loading-icon">
        <LoadingIcon />
      </Route>
      <Route path="regular-form">
        <RegularForm />
      </Route>
      <Route path="datepicker">
        <Datepicker />
      </Route>
      <Route path="tom-select">
        <TomSelect />
      </Route>
      <Route path="file-upload">
        <FileUpload />
      </Route>
      <Route path="wysiwyg-editor">
        <WysiwygEditor />
      </Route>
      <Route path="validation">
        <Validation />
      </Route>
      <Route path="chart">
        <Chart />
      </Route>
      <Route path="slider">
        <Slider />
      </Route>
      <Route path="image-zoom">
        <ImageZoom />
      </Route>
    </SideMenu>
  </Route>
  <Route path="/simple-menu/*">
    <SimpleMenu>
      <Route path="dashboard-overview-1">
        <DashboardOverview1 />
      </Route>
      <Route path="dashboard-overview-2">
        <DashboardOverview2 />
      </Route>
      <Route path="dashboard-overview-3">
        <DashboardOverview3 />
      </Route>
      <Route path="dashboard-overview-4">
        <DashboardOverview4 />
      </Route>
      <Route path="categories">
        <Categories />
      </Route>
      <Route path="add-product">
        <AddProduct />
      </Route>
      <Route path="product-list">
        <ProductList />
      </Route>
      <Route path="product-grid">
        <ProductGrid />
      </Route>
      <Route path="transaction-list">
        <TransactionList />
      </Route>
      <Route path="transaction-detail">
        <TransactionDetail />
      </Route>
      <Route path="seller-list">
        <SellerList />
      </Route>
      <Route path="seller-detail">
        <SellerDetail />
      </Route>
      <Route path="reviews">
        <Reviews />
      </Route>
      <Route path="inbox">
        <Inbox />
      </Route>
      <Route path="file-manager">
        <FileManager />
      </Route>
      <Route path="point-of-sale">
        <PointOfSale />
      </Route>
      <Route path="chat">
        <Chat />
      </Route>
      <Route path="post">
        <Post />
      </Route>
      <Route path="calendar">
        <Calendar />
      </Route>
      <Route path="crud-data-list">
        <CrudDataList />
      </Route>
      <Route path="crud-form">
        <CrudForm />
      </Route>
      <Route path="users-layout-1">
        <UsersLayout1 />
      </Route>
      <Route path="users-layout-2">
        <UsersLayout2 />
      </Route>
      <Route path="users-layout-3">
        <UsersLayout3 />
      </Route>
      <Route path="profile-overview-1">
        <ProfileOverview1 />
      </Route>
      <Route path="profile-overview-2">
        <ProfileOverview2 />
      </Route>
      <Route path="profile-overview-3">
        <ProfileOverview3 />
      </Route>
      <Route path="wizard-layout-1">
        <WizardLayout1 />
      </Route>
      <Route path="wizard-layout-2">
        <WizardLayout2 />
      </Route>
      <Route path="wizard-layout-3">
        <WizardLayout3 />
      </Route>
      <Route path="blog-layout-1">
        <BlogLayout1 />
      </Route>
      <Route path="blog-layout-2">
        <BlogLayout2 />
      </Route>
      <Route path="blog-layout-3">
        <BlogLayout3 />
      </Route>
      <Route path="pricing-layout-1">
        <PricingLayout1 />
      </Route>
      <Route path="pricing-layout-2">
        <PricingLayout2 />
      </Route>
      <Route path="invoice-layout-1">
        <InvoiceLayout1 />
      </Route>
      <Route path="invoice-layout-2">
        <InvoiceLayout2 />
      </Route>
      <Route path="faq-layout-1">
        <FaqLayout1 />
      </Route>
      <Route path="faq-layout-2">
        <FaqLayout2 />
      </Route>
      <Route path="faq-layout-3">
        <FaqLayout3 />
      </Route>
      <Route path="update-profile">
        <UpdateProfile />
      </Route>
      <Route path="change-password">
        <ChangePassword />
      </Route>
      <Route path="regular-table">
        <RegularTable />
      </Route>
      <Route path="tabulator">
        <Tabulator />
      </Route>
      <Route path="modal">
        <Modal />
      </Route>
      <Route path="slideover">
        <Slideover />
      </Route>
      <Route path="notification">
        <Notification />
      </Route>
      <Route path="tab">
        <Tab />
      </Route>
      <Route path="accordion">
        <Accordion />
      </Route>
      <Route path="button">
        <Button />
      </Route>
      <Route path="alert">
        <Alert />
      </Route>
      <Route path="progress-bar">
        <ProgressBar />
      </Route>
      <Route path="tooltip">
        <Tooltip />
      </Route>
      <Route path="dropdown">
        <Dropdown />
      </Route>
      <Route path="typography">
        <Typography />
      </Route>
      <Route path="icon">
        <Icon />
      </Route>
      <Route path="loading-icon">
        <LoadingIcon />
      </Route>
      <Route path="regular-form">
        <RegularForm />
      </Route>
      <Route path="datepicker">
        <Datepicker />
      </Route>
      <Route path="tom-select">
        <TomSelect />
      </Route>
      <Route path="file-upload">
        <FileUpload />
      </Route>
      <Route path="wysiwyg-editor">
        <WysiwygEditor />
      </Route>
      <Route path="validation">
        <Validation />
      </Route>
      <Route path="chart">
        <Chart />
      </Route>
      <Route path="slider">
        <Slider />
      </Route>
      <Route path="image-zoom">
        <ImageZoom />
      </Route>
    </SimpleMenu>
  </Route>
  <Route path="/top-menu/*">
    <TopMenu>
      <Route path="dashboard-overview-1">
        <DashboardOverview1 />
      </Route>
      <Route path="dashboard-overview-2">
        <DashboardOverview2 />
      </Route>
      <Route path="dashboard-overview-3">
        <DashboardOverview3 />
      </Route>
      <Route path="dashboard-overview-4">
        <DashboardOverview4 />
      </Route>
      <Route path="categories">
        <Categories />
      </Route>
      <Route path="add-product">
        <AddProduct />
      </Route>
      <Route path="product-list">
        <ProductList />
      </Route>
      <Route path="product-grid">
        <ProductGrid />
      </Route>
      <Route path="transaction-list">
        <TransactionList />
      </Route>
      <Route path="transaction-detail">
        <TransactionDetail />
      </Route>
      <Route path="seller-list">
        <SellerList />
      </Route>
      <Route path="seller-detail">
        <SellerDetail />
      </Route>
      <Route path="reviews">
        <Reviews />
      </Route>
      <Route path="inbox">
        <Inbox />
      </Route>
      <Route path="file-manager">
        <FileManager />
      </Route>
      <Route path="point-of-sale">
        <PointOfSale />
      </Route>
      <Route path="chat">
        <Chat />
      </Route>
      <Route path="post">
        <Post />
      </Route>
      <Route path="calendar">
        <Calendar />
      </Route>
      <Route path="crud-data-list">
        <CrudDataList />
      </Route>
      <Route path="crud-form">
        <CrudForm />
      </Route>
      <Route path="users-layout-1">
        <UsersLayout1 />
      </Route>
      <Route path="users-layout-2">
        <UsersLayout2 />
      </Route>
      <Route path="users-layout-3">
        <UsersLayout3 />
      </Route>
      <Route path="profile-overview-1">
        <ProfileOverview1 />
      </Route>
      <Route path="profile-overview-2">
        <ProfileOverview2 />
      </Route>
      <Route path="profile-overview-3">
        <ProfileOverview3 />
      </Route>
      <Route path="wizard-layout-1">
        <WizardLayout1 />
      </Route>
      <Route path="wizard-layout-2">
        <WizardLayout2 />
      </Route>
      <Route path="wizard-layout-3">
        <WizardLayout3 />
      </Route>
      <Route path="blog-layout-1">
        <BlogLayout1 />
      </Route>
      <Route path="blog-layout-2">
        <BlogLayout2 />
      </Route>
      <Route path="blog-layout-3">
        <BlogLayout3 />
      </Route>
      <Route path="pricing-layout-1">
        <PricingLayout1 />
      </Route>
      <Route path="pricing-layout-2">
        <PricingLayout2 />
      </Route>
      <Route path="invoice-layout-1">
        <InvoiceLayout1 />
      </Route>
      <Route path="invoice-layout-2">
        <InvoiceLayout2 />
      </Route>
      <Route path="faq-layout-1">
        <FaqLayout1 />
      </Route>
      <Route path="faq-layout-2">
        <FaqLayout2 />
      </Route>
      <Route path="faq-layout-3">
        <FaqLayout3 />
      </Route>
      <Route path="update-profile">
        <UpdateProfile />
      </Route>
      <Route path="change-password">
        <ChangePassword />
      </Route>
      <Route path="regular-table">
        <RegularTable />
      </Route>
      <Route path="tabulator">
        <Tabulator />
      </Route>
      <Route path="modal">
        <Modal />
      </Route>
      <Route path="slideover">
        <Slideover />
      </Route>
      <Route path="notification">
        <Notification />
      </Route>
      <Route path="tab">
        <Tab />
      </Route>
      <Route path="accordion">
        <Accordion />
      </Route>
      <Route path="button">
        <Button />
      </Route>
      <Route path="alert">
        <Alert />
      </Route>
      <Route path="progress-bar">
        <ProgressBar />
      </Route>
      <Route path="tooltip">
        <Tooltip />
      </Route>
      <Route path="dropdown">
        <Dropdown />
      </Route>
      <Route path="typography">
        <Typography />
      </Route>
      <Route path="icon">
        <Icon />
      </Route>
      <Route path="loading-icon">
        <LoadingIcon />
      </Route>
      <Route path="regular-form">
        <RegularForm />
      </Route>
      <Route path="datepicker">
        <Datepicker />
      </Route>
      <Route path="tom-select">
        <TomSelect />
      </Route>
      <Route path="file-upload">
        <FileUpload />
      </Route>
      <Route path="wysiwyg-editor">
        <WysiwygEditor />
      </Route>
      <Route path="validation">
        <Validation />
      </Route>
      <Route path="chart">
        <Chart />
      </Route>
      <Route path="slider">
        <Slider />
      </Route>
      <Route path="image-zoom">
        <ImageZoom />
      </Route>
    </TopMenu>
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
  <Route path="/error-page">
    <ErrorPage />
  </Route>
</Router>
