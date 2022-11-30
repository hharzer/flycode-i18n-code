/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title={t("layouts.dashboard.statisticsCards.bookings.title")}
                count={281}
                percentage={{
                  color: "success",
                  amount: t("layouts.dashboard.statisticsCards.bookings.percentage.amount"),
                  label: t("layouts.dashboard.statisticsCards.bookings.percentage.label"),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title={t("layouts.dashboard.statisticsCards.users.title")}
                count="2,300"
                percentage={{
                  color: "success",
                  amount: t("layouts.dashboard.statisticsCards.users.percentage.amount"),
                  label: t("layouts.dashboard.statisticsCards.users.percentage.label"),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title={t("layouts.dashboard.statisticsCards.revenue.title")}
                count="34k"
                percentage={{
                  color: "success",
                  amount: t("layouts.dashboard.statisticsCards.revenue.percentage.amount"),
                  label: t("layouts.dashboard.statisticsCards.revenue.percentage.label"),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title={t("layouts.dashboard.statisticsCards.followers.title")}
                count="+91"
                percentage={{
                  color: "success",
                  amount: t("layouts.dashboard.statisticsCards.followers.percentage.amount"),
                  label: t("layouts.dashboard.statisticsCards.followers.percentage.label"),
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title={t("layouts.dashboard.reportCharts.views.title")}
                  description={t("layouts.dashboard.reportCharts.views.description")}
                  date={t("layouts.dashboard.reportCharts.views.date")}
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title={t("layouts.dashboard.reportCharts.sales.title")}
                  description={
                    <>
                      (<strong>{t("layouts.dashboard.plusPercentage")}</strong>){" "}
                      {t("layouts.dashboard.increaseTodaySales")}
                    </>
                  }
                  date={t("layouts.dashboard.reportCharts.sales.date")}
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title={t("layouts.dashboard.reportCharts.tasks.title")}
                  description={t("layouts.dashboard.reportCharts.tasks.description")}
                  date={t("layouts.dashboard.reportCharts.tasks.date")}
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
