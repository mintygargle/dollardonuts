import { React, P, JobForm } from "./index";

const Apply = () => {
  return (
    <section>
      <h1 className="page-title page-title--medium">Application Form</h1>
      <div className="--center">
        <P color="dark gray" size="large">
          Succeed with Dollar Donuts
        </P>
      </div>

      <JobForm></JobForm>
    </section>
  );
};

export default Apply;
