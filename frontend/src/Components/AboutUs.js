import React from "react";
export default function AboutUs(){
    return(

        <div className="bg-lightblue py-20 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                    About us
                </h2>
                <dl className="w-full md:w-2/3">
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            Ongoing projects.
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            Running existing machine learning projects in Valohai is very simple! Integration only
                            requires adding a valohai.yaml configuration file. Moving projects in and out of Valohai is
                            easy – the integration is only the configuration file.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            How do we compare to other economic and social development organization?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            We don’t. Valohai isn’t a data science platform; it&#x27;s a Machine Learning Management
                            Platform that handles the whole ML pipeline from feature extraction, to training of your
                            model and to deploying it into production in a reproducible manner. Data science platforms
                            offer hosted notebooks and AutoML solutions.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            How you can contact us!
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            Phone number: +1 (555) 123-0980<br/>
                            Mail: village.hub@onghub.com<br/>
                            Address: 1223 W Pratt St, Baltimore, MD 21223, United States
                        </p>
                    </dd>
                </dl>
            </div>
        </div>

    )
}