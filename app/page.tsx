import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between bg-slate-900">
      <div className="flex items-center justify-center mb-auto h-screen">
        <main className="content-center max-w-xl">
          <div className="text-center">
            <div className="flex justify-center">
              <span className="animate-bounce text-3xl md:text-4xl p-5">
                🧬
              </span>
              <span className="animate-[bounce_1.1s_ease-in-out_infinite] text-3xl md:text-4xl p-5">
                🤖
              </span>
              <span className="animate-[bounce_.8s_ease-in-out_infinite] text-3xl md:text-4xl p-5">
                👨‍💻
              </span>
              <span className="animate-[bounce_1.2s_ease-in-out_infinite] text-3xl md:text-4xl p-5">
                📱
              </span>
              <span className="animate-[bounce_.9s_ease-in-out_infinite] text-3xl md:text-4xl p-5">
                🚀
              </span>
            </div>
            <h1 className="text-center text-glow text-3xl md:text-5xl text-slate-50">
              TLDR
            </h1>
            <div className="text-center text-lg text-slate-50">
              Byte sized news for busy techies
            </div>
            <div className="text-slate-400 p-4 pt-12">
              <div>
                <span>
                  TLDR is the free daily newsletter with links and TLDRs of the
                  most interesting stories in startups 🚀, tech 📱, and
                  programming 💻!
                </span>
              </div>

              <form
                action="/api/email-entry"
                method="post"
                className="mt-3 px-2 md:px-0 md:flex md:flex-row justify-center text-center"
              >
                <div className="flex justify-center text-slate-50 pt-7">
                  <div className="mb-3 xl:w-96">
                    <div className="flex items-center">
                      <input
                        type="email"
                        className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-slate-50
                            bg-slate-900 bg-clip-padding
                            border border-solid border-slate-100
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-slate-700 focus:bg-slate-50 focus:border-white 
                          "
                        name="email"
                        autoComplete="email"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 ml-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Subscribe
                      </button>
                    </div>
                    <label
                      htmlFor="emailInput"
                      className="form-label inline-block mt-2"
                    >
                      {" "}
                      Join readers for{" "}
                      <Link className="underline" href="/">
                        one daily email
                      </Link>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <div className="mt-4 text-center w-100 text-slate-400">
        <div className="text-center">
          <Link className="mr-3" href="/">
            Privacy
          </Link>
          <Link className="" href="/">
            Advertise
          </Link>
        </div>
      </div>
    </div>
  );
}
