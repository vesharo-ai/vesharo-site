import React from "react";
import WorkFlow1Card from "./WorkFlow1Card";
import { workflowCards } from "@/seeds/WorkFlows";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";

function WorkFlow1() {
  return (
    <>
      <section className="tz-workflow1">
        <div className="container">
          <div className="tz-section-top tz-section-top--centered">
            <SectionSubtitle subtitle="Workflow" />
            <SectionTitle title="HOW WE WORK" />
          </div>
          <div className="tz-workflow1-steps">
            {workflowCards &&
              workflowCards.map((item, index) => (
                <WorkFlow1Card key={index} {...item} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkFlow1;
