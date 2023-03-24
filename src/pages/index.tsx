import Head from 'next/head'



export default function Home() {
  return (
    <>
     <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Task Manager - The perfect tool to manage your tasks and improve your productivity. Create, organize and complete your tasks easily." />
        <meta name="keywords" content="task manager, productivity, create tasks, complete tasks, organize tasks" />
        <meta name="author" content="kruzus" />
        <title>Task Manager - Manage Your Tasks</title>
      </Head>
      <main >
      <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Organize Your Tasks with Ease
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Manage your tasks and stay productive with our easy-to-use task manager application.
            </p>
          </div>
        </div>
      </div>
    </div>
      </main>
    </>
  )
}
