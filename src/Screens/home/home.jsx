import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required...!"),
  applicationfor: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required...!"),
  resume: Yup.string()
    .required("Required...!"),
  about: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required...!"),
  ExperienceLevel: Yup.string()
    .required("Required...!"),
    contact:Yup.string()
    .matches(/[6-9]{1}[0-9 ]{4}[0-9 ]{5}/, {
      message: "Invalid Indian number",
      // excludeEmptyString: false,
    })
    .required('Required.......'),
  email: Yup.string().email("Invalid email").required("Required...!"),
});

const Home = () => {
  return (
    <div className="h-auto w-full flex justify-center items-center flex-wrap overflow-hidden">
      <div className="px-20 py-10 m-5 border-2 rounded-md h-auto w-[60%] shadow-2xl">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <Formik
          initialValues={{
            fullname: "",
            applicationfor: "",
            email: "",
            resume: "",
            about: "",
            ExperienceLevel: "",
            contact:''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-6 border-t border-gray-100">
                <dl>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Full name:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <input
                        className="border-b-2 border-gray-400 outline-none w-full"
                        type="text"
                        name="fullname"
                        id="fullname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                      />
                      <span className="text-red-500">
                        {errors.fullname && touched.fullname && errors.fullname}
                      </span>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Application for:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <input
                        className="border-b-2 border-gray-400 outline-none w-full"
                        type="text"
                        name="applicationfor"
                        id="applicationfor"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.applicationfor}
                      />
                      <span className="text-red-500">
                        {errors.applicationfor &&
                          touched.applicationfor &&
                          errors.applicationfor}
                      </span>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Email address:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <input
                        className="border-b-2 border-gray-400 outline-none w-full"
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <span className="text-red-500">
                        {errors.email && touched.email && errors.email}
                      </span>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Contact No:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <input
                        className="border-b-2 border-gray-400 outline-none w-full"
                        type="tel"
                        name="contact"
                        id="contact"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contact}
                        maxLength={10}
                      />
                      <span className="text-red-500">
                        {errors.contact && touched.contact && errors.contact}
                      </span>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      About:
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <textarea
                        className="border-2 border-gray-400 outline-none w-full rounded-md p-2"
                        rows={5}
                        type="text"
                        name="about"
                        id="about"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.about}
                      />
                      <span className="text-red-500">
                        {errors.about && touched.about && errors.about}
                      </span>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Attachments:
                    </dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul
                        role="list"
                        className="divide-y divide-gray-100 rounded-md border border-gray-200"
                      >
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <input
                                type="file"
                                name="resume"
                                id="resume"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.resume}
                                accept="docx/pdf"
                              />
                            </div>
                          </div>

                          {/* <div className="ml-4 flex-shrink-0">
                            <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Download
                            </a>
                          </div> */}
                        </li>
                      </ul>
                      <span className="text-red-500">
                        {errors.resume && touched.resume && errors.resume}
                      </span>
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Experience Level:
                    </dt>
                    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div className="flex-1 flex justify-around">
                        <div className="flex-1 flex gap-3">
                          <input
                            type="radio"
                            name="ExperienceLevel"
                            id="ExperienceLevel"
                            value='Fresher'
                            checked={values.ExperienceLevel === "Fresher"}
                            onChange={() => setFieldValue("ExperienceLevel", "Fresher")}
                          />
                          <label htmlFor="Fresher">Fresher</label>
                        </div>
                        <div className="flex-1 flex gap-3">
                          <input
                            type="radio"
                            name="ExperienceLevel"
                            id="ExperienceLevel"
                            value="Experienced" 
                            checked={values.ExperienceLevel === "Experienced"}
                            onChange={() => setFieldValue("ExperienceLevel", "Experienced")} 
                            
                          />
                          <label htmlFor="Experienced">Experienced</label>
                        </div>
                      </div>
                      <span className="text-red-500">
                        {errors.ExperienceLevel &&
                          touched.ExperienceLevel &&
                          errors.ExperienceLevel}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="w-28 h-10 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Home;
