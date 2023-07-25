<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import ScrollToTop from "../base-components/ScrollToTop";
  import SideMenu from "../layouts/SideMenu/SideMenu.svelte";
  import SimpleMenu from "../layouts/SimpleMenu/SimpleMenu.svelte";
  import TopMenu from "../layouts/TopMenu/TopMenu.svelte";
  import Accordion from "../routes/Accordion.svelte";
  import AddProduct from "../routes/AddProduct.svelte";
  import Alert from "../routes/Alert.svelte";
  import BlogLayout1 from "../routes/BlogLayout1.svelte";
  import BlogLayout2 from "../routes/BlogLayout2.svelte";
  import BlogLayout3 from "../routes/BlogLayout3.svelte";
  import Button from "../routes/Button.svelte";
  import Calendar from "../routes/Calendar.svelte";
  import Categories from "../routes/Categories.svelte";
  import ChangePassword from "../routes/ChangePassword.svelte";
  import Chart from "../routes/Chart.svelte";
  import Chat from "../routes/Chat.svelte";
  import CrudDataList from "../routes/CrudDataList.svelte";
  import CrudForm from "../routes/CrudForm.svelte";
  import DashboardOverview1 from "../routes/DashboardOverview1.svelte";
  import DashboardOverview2 from "../routes/DashboardOverview2.svelte";
  import DashboardOverview3 from "../routes/DashboardOverview3.svelte";
  import DashboardOverview4 from "../routes/DashboardOverview4.svelte";
  import Datepicker from "../routes/Datepicker.svelte";
  import Dropdown from "../routes/Dropdown.svelte";
  import ErrorPage from "../routes/ErrorPage.svelte";
  import FaqLayout1 from "../routes/FaqLayout1.svelte";
  import FaqLayout2 from "../routes/FaqLayout2.svelte";
  import FaqLayout3 from "../routes/FaqLayout3.svelte";
  import FileManager from "../routes/FileManager.svelte";
  import FileUpload from "../routes/FileUpload.svelte";
  import Icon from "../routes/Icon.svelte";
  import ImageZoom from "../routes/ImageZoom.svelte";
  import Inbox from "../routes/Inbox.svelte";
  import InvoiceLayout1 from "../routes/InvoiceLayout1.svelte";
  import InvoiceLayout2 from "../routes/InvoiceLayout2.svelte";
  import LoadingIcon from "../routes/LoadingIcon.svelte";
  import Login from "../routes/Login.svelte";
  import Modal from "../routes/Modal.svelte";
  import Notification from "../routes/Notification.svelte";
  import PointOfSale from "../routes/PointOfSale.svelte";
  import Post from "../routes/Post.svelte";
  import PricingLayout1 from "../routes/PricingLayout1.svelte";
  import PricingLayout2 from "../routes/PricingLayout2.svelte";
  import ProductGrid from "../routes/ProductGrid.svelte";
  import ProductList from "../routes/ProductList.svelte";
  import ProfileOverview1 from "../routes/ProfileOverview1.svelte";
  import ProfileOverview2 from "../routes/ProfileOverview2.svelte";
  import ProfileOverview3 from "../routes/ProfileOverview3.svelte";
  import ProgressBar from "../routes/ProgressBar.svelte";
  import Register from "../routes/Register.svelte";
  import RegularForm from "../routes/RegularForm.svelte";
  import RegularTable from "../routes/RegularTable.svelte";
  import Reviews from "../routes/Reviews.svelte";
  import SellerDetail from "../routes/SellerDetail.svelte";
  import SellerList from "../routes/SellerList.svelte";
  import Slideover from "../routes/Slideover.svelte";
  import Slider from "../routes/Slider.svelte";
  import Tab from "../routes/Tab.svelte";
  import Tabulator from "../routes/Tabulator.svelte";
  import TomSelect from "../routes/TomSelect.svelte";
  import Tooltip from "../routes/Tooltip.svelte";
  import TransactionDetail from "../routes/TransactionDetail.svelte";
  import TransactionList from "../routes/TransactionList.svelte";
  import Typography from "../routes/Typography.svelte";
  import UpdateProfile from "../routes/UpdateProfile.svelte";
  import UsersLayout1 from "../routes/UsersLayout1.svelte";
  import UsersLayout2 from "../routes/UsersLayout2.svelte";
  import UsersLayout3 from "../routes/UsersLayout3.svelte";
  import Validation from "../routes/Validation.svelte";
  import WizardLayout1 from "../routes/WizardLayout1.svelte";
  import WizardLayout2 from "../routes/WizardLayout2.svelte";
  import WizardLayout3 from "../routes/WizardLayout3.svelte";
  import WysiwygEditor from "../routes/WysiwygEditor.svelte";
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
