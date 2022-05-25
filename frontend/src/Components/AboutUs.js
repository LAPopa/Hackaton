import React from "react";

export default function AboutUs() {
    return (

        <div className="bg-lightblue py-20 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                    About us
                </h2>
                <dl className="w-full md:w-2/3">
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            VillageHub is about people.
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            And sometimes people need a hand. We offer the help they need to get them through and then
                            support them to become stable - so that in the future, our participants can help themselves.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            How we do it?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                            We offer (optional) housing for persons that are part of vulnerable communities, offer jobs
                            in the agricultural field (fruit and medicinal crop tending). Furthermore, we offer training
                            in the manufacturing process of various handcrafted products that make use of locally grown
                            crops. Expanding on the manufacture side, we are reviving some of the dying arts of carpet
                            weaving
                            and metal rolling to produce jewelry. All of which you can find in our shop !
                            <br/><a className="text-xl font-semibold" href="http://localhost:3000/shop">Shop here !</a>
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            Contact info
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>We are open to collaborating with other NGOs. Always looking for sponsors ! <br/>
                            Phone number: +1 (555) 123-0980<br/>
                            Mail: village.hub@onghub.com<br/>
                            Address: 1223 W Pratt St, Baltimore, MD 21223, Narnia
                        </p>
                    </dd>
                </dl>
            </div>
        </div>

    )
}