import Container from "./components/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-800">
            Ravi Kumar Thakur
          </h1>
          <p className="text-lg text-gray-600">
            Full-Stack Developer · Python · TypeScript · SQL · Django · FastAPI
            · ReactJS · Next.js · TailwindCSS · Generative AI
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/Thakur127"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              Resume
            </a>
          </div>
        </header>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="flex flex-col space-y-8">
            <Project
              title="learn.dev"
              description="Platform to provide curated development challenges to upcoming developers."
              link="https://learn-dev.pages.dev"
            />

            <Project
              title="Notes"
              description="Summarizes YouTube videos and makes them interactable using GenAI, RAG, Embeddings."
              link="https://make-notes-with-ai.vercel.app"
            />

            <Project
              title="Gen"
              description="Platform to sell and purchase courses. Integrated Stripe for payments."
              link="https://gen-alearningplatform.vercel.app"
            />

            <Project
              title="Tern (CLI)"
              description="Simple lightweight DB schema migration tool written in Rust."
              link="https://github.com/Thakur127/tern"
            />

            <Project
              title="ScrollPedia"
              description="Mobile app to explore Wikipedia like Instagram reels."
              link="https://github.com/Thakur127/Scroll-Pedia"
            />

            <Project
              title="Backdoor"
              description="Simple HTTP reverse proxy in Rust with in-memory caching and load balancing."
              link="https://github.com/Thakur127/rust-shit/tree/main/backdoor"
            />

            <Project
              title="Space Invaders"
              description="Simple game written in Python (Pygame) as a college project."
              link="https://github.com/Thakur127/space-invaders"
            />
          </div>
        </section>

        {/* About */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>B.Sc. Mathematics, Class of 2024</li>
            <li>Qualified GATE CS&IT 2024</li>
            <li>Self-taught developer, learned everything from the internet</li>
            <li>
              Believes in building fast, shipping fast, and learning on the go
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">Open to opportunities.</p>
          <a
            href="mailto:ravithakur.dev7@gmail.com"
            className="text-gray-700 mt-2"
          >
            Email: ravithakur.dev7@gmail.com
          </a>
        </section>
      </div>
    </Container>
  );
}

function Project({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-semibold hover:underline"
      >
        {title}
      </a>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
