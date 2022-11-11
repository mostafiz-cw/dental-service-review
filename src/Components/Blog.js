import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog About Four Question.
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              Difference between SQL and NoSQL?
              </summary>
              <div className="px-4 pb-4">
                <p>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is JWT, and how does it work?
              </summary>
              <div className="px-4 pb-4">
                <p>
                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).

Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does NodeJS handle multiple requests at the same time?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is node? How does node work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Node allows developers to write JavaScript code that runs
                  directly in a computer process itself instead of in a browser.
                  Node can, therefore, be used to write server-side applications
                  with access to the operating system, file system, and
                  everything else required to build fully-functional
                  applications. It is a used as backend service where javascript
                  works on the server-side of the application. This way
                  javascript is used on both frontend and backend. Node. js runs
                  on chrome v8 engine which converts javascript code into
                  machine code, it is highly scalable, lightweight, fast, and
                  data-intensive
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
