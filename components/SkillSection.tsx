import React from 'react'

function SkillSection() {
  return (
    <section className="w-full" id="skills">
      <h2 className="text-xl font-bold mb-8 flex items-center gap-4 text-accent">
        <span className="text-2xl">{'>'}</span> Skills
        <span className="h-px bg-border flex-grow"></span>
      </h2>

      <div className="border border-border bg-[#1a1a1a] ">
        <div className="bg-[#161616] border-b border-border px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="text-xs text-yellow-300">
              {'{}'}
              <span className="text-xs text-text-muted ml-2">skills.json</span>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-x-auto text-sm">
          <div className="code-block font-mono text-gray-300">

            {/* { */}
            <div className="code-line">
              <span className="text-yellow-300">{"{"}</span>
            </div>

            {/* "frontend": [ */}
            <div className="code-line">
              <span className="ml-4">
                <span className="text-[#9CDCFE]">"frontend"</span>: <span className="text-pink-400">[</span>
              </span>
            </div>

            <div className="code-line">
              <span className="ml-8">
                <span className="text-[#CE9178]">"JavaScript"</span>,{" "}
                <span className="text-[#CE9178]">"TypeScript"</span>,{" "}
                <span className="text-[#CE9178]">"React.js"</span>,{" "}
                <span className="text-[#CE9178]">"Next.js"</span>,{" "}
              </span>
            </div>

            <div className="code-line">
              <span className="ml-8">
                <span className="text-[#CE9178]">"HTML"</span>,{" "}
                <span className="text-[#CE9178]">"CSS"</span>,{" "}
                <span className="text-[#CE9178]">"Tailwind CSS"</span>{" "}
                <span className="text-[#CE9178]">"React Native"</span>{" "}
              </span>
            </div>

            {/* ] */}
            <div className="code-line">
              <span className="ml-4 text-pink-400">]</span>,
            </div>

            {/* "backend": [ */}
            <div className="code-line">
              <span className="ml-4">
                <span className="text-[#9CDCFE]">"backend & databases"</span>:{" "}
                <span className="text-pink-400">[</span>
              </span>
            </div>

            <div className="code-line">
              <span className="ml-8">
                <span className="text-[#CE9178]">"Node.js"</span>,{" "}
                <span className="text-[#CE9178]">".NET"</span>,{" "}
                <span className="text-[#CE9178]">"Express.js"</span>,{" "}
                <span className="text-[#CE9178]">"PostgreSQL"</span>,
              </span>
            </div>

            <div className="code-line">
              <span className="ml-8">
                <span className="text-[#CE9178]">"C#"</span>,{" "}
                <span className="text-[#CE9178]">"ASP.NET Core"</span>,{" "}
                <span className="text-[#CE9178]">"Entity Framework"</span>,{" "}
                <span className="text-[#CE9178]">"SQL Server"</span>,{" "}
                <span className="text-[#CE9178]">"MongoDB"</span>
              </span>
            </div>

            {/* ] */}
            <div className="code-line">
              <span className="ml-4 text-pink-400">]</span>,
            </div>

            {/* "cloud": [ */}
            <div className="code-line">
              <span className="ml-4">
                <span className="text-[#9CDCFE]">"cloud & services"</span>:{" "}
                <span className="text-pink-400">[</span>
              </span>
            </div>

            <div className="code-line">
              <span className="ml-8">
                <span className="text-[#CE9178]">"Google Cloud Platform"</span>,{" "}
                <span className="text-[#CE9178]">"Firebase"</span>,{" "}
                <span className="text-[#CE9178]">"Supabase"</span>,{" "}
                <span className="text-[#CE9178]">"Azure"</span>
              </span>
            </div>

            {/* ] */}
            <div className="code-line">
              <span className="ml-4 text-pink-400">]</span>,
            </div>

            {/* "tools": [ */}
            <div className="code-line">
              <span className="ml-4">
                <span className="text-[#9CDCFE]">"developent tools"</span>:{" "}
                <span className="text-pink-400">[</span>
              </span>
            </div>

            <div className="code-line">
              <span className="ml-8">
                <span className="text-[#CE9178]">"Git"</span>,{" "}
                <span className="text-[#CE9178]">"GitHub"</span>,{" "}
                <span className="text-[#CE9178]">"Playwright"</span>,{" "}
                <span className="text-[#CE9178]">"Postman"</span>,
              </span>
            </div>

            <div className="code-line">
              <span className="ml-8">
                <span className="text-[#CE9178]">"Unit Testing"</span>,{" "}
                <span className="text-[#CE9178]">"Jira"</span>,{" "}
                <span className="text-[#CE9178]">"Figma"</span>,{" "}
                <span className="text-[#CE9178]">"Linux CLI"</span>
              </span>
            </div>

            {/* ] */}
            <div className="code-line">
              <span className="ml-4 text-pink-400">]</span>
            </div>

            {/* } */}
            <div className="code-line">
              <span className="text-yellow-300">{"}"}</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
