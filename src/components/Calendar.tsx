import { Container, Grid } from "@material-ui/core";
import React from "react";
import { year, month, months } from "../utils/const";
import CalendarFC from "./CalendarFC";

function Calendar() {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <table>
              <caption>
                {months[month]} {year}{" "}
              </caption>
            {CalendarFC()}
          </table>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Calendar;
