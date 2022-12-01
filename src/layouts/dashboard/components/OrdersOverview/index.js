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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import { useTranslation } from "react-i18next";

function OrdersOverview() {
  const { t } = useTranslation();
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          {t("layouts.dashboard.ordersOverview.ordersOverview")}
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              {t("layouts.dashboard.ordersOverview.percentage")}
            </MDTypography>{" "}
            {t("layouts.dashboard.ordersOverview.thisMonth")}
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title={t("layouts.dashboard.ordersOverview.timelineItems.item1.title")}
          dateTime={t("layouts.dashboard.ordersOverview.timelineItems.item1.dateTime")}
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title={t("layouts.dashboard.ordersOverview.timelineItems.item2.title")}
          dateTime={t("layouts.dashboard.ordersOverview.timelineItems.item2.dateTime")}
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title={t("layouts.dashboard.ordersOverview.timelineItems.item3.title")}
          dateTime={t("layouts.dashboard.ordersOverview.timelineItems.item3.dateTime")}
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title={t("layouts.dashboard.ordersOverview.timelineItems.item4.title")}
          dateTime={t("layouts.dashboard.ordersOverview.timelineItems.item4.dateTime")}
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title={t("layouts.dashboard.ordersOverview.timelineItems.item5.title")}
          dateTime={t("layouts.dashboard.ordersOverview.timelineItems.item5.dateTime")}
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
