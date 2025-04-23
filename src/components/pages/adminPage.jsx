import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../admin/menuAdmin";
import Dashboard from "../admin/Dashboard";
import SubmissionsTable from "../admin/Submissions";
import Services from "../admin/Services";
import AddService from "../admin/AddService";
import EvaluatorsTable from "../admin/users";
import AddEvaluator from "../admin/AddEvaluator";
import CategoriesPage from "../admin/categories";
import AddSubmission from "../admin/AddSubmission";
import AddCategory from "../admin/AddCategoryPage";
import Guides from "../admin/Guides";
import CitiesTable from "../admin/Cities";
import AddCity from "../admin/AddCity";
import Places from "../admin/Places";
import AddPlace from "../admin/AddPlace"; // Corrected the duplication

function AdminPage() {
  const [activePage, setActivePage] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/admin/submissions")) {
      setActivePage("submission");
    } else if (location.pathname.startsWith("/admin/services")) {
      setActivePage("services");
    } else if (location.pathname.startsWith("/admin/evaluators")) {
      setActivePage("evaluators");
    } else if (location.pathname.startsWith("/admin/categories")) {
      setActivePage("categories");
    } else if (location.pathname.startsWith("/admin/cities")) {
      setActivePage("cities");
    } else if (location.pathname.startsWith("/admin/places")) {
      setActivePage("places");
    } else if (location.pathname.startsWith("/admin/clients")) {
      setActivePage("clients");
    } else {
      setActivePage("dashboard");
    }
  }, [location.pathname]);

  const isAddSubmission = location.pathname === "/admin/submissions/ajouter";
  const isAddService = location.pathname === "/admin/services/ajouter";
  const isAddEvaluator = location.pathname === "/admin/evaluators/ajouter";
  const isAddCategory = location.pathname === "/admin/categories/ajouter";
  const isAddCities = location.pathname === "/admin/cities/ajouter";
  const isAddPlace = location.pathname === "/admin/places/ajouter";

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="ml-64 mt-18 p-6 w-full bg-[#f4f1ec] min-h-screen">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "submission" && (
          <>
            {isAddSubmission ? <AddSubmission /> : <SubmissionsTable />}
          </>
        )}
        {activePage === "services" && (
          <>
            {isAddService ? <AddService /> : <Services />}
          </>
        )}
        {activePage === "evaluators" && (
          <>
            {isAddEvaluator ? <AddEvaluator /> : <EvaluatorsTable />}
          </>
        )}
        {activePage === "categories" && (
          <>
            {isAddCategory ? <AddCategory /> : <CategoriesPage />}
          </>
        )}
        {activePage === "cities" && (
          <>
            {isAddCities ? <AddCity /> : <CitiesTable />}
          </>
        )}
        {activePage === "places" && (
          <>
            {isAddPlace ? <AddPlace /> : <Places />}
          </>
        )}
        {activePage === "clients" && <Guides />}
      </main>
    </div>
  );
}

export default AdminPage;
