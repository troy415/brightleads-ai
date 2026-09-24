import {
  CtaBand,
  FaqList,
  PageHero,
} from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import type { GuideDoc } from "@/lib/content/guides";
import { pageGraph } from "@/lib/json-ld";

export function GuideView({ doc }: { doc: GuideDoc }) {
  const crumbs: [string, string][] = [
    ["Home", ""],
    ["Guides", "/guides"],
    [doc.h1.replace(/\.$/, ""), doc.path],
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: doc.path,
          title: doc.title,
          description: doc.description,
          type: "WebPage",
          answer: doc.answer,
          crumbs,
          faqs: doc.faqs,
          article: { published: doc.published, headline: doc.h1 },
        })}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Guide"
        h1={doc.h1}
        lead={doc.lead}
        answer={doc.answer}
      />
      <section className="band">
        <div className="wrap section">
          <div className="article">
            <article className="prose">
              {doc.parts.map((part) => (
                <section key={part.id}>
                  <h2 id={part.id}>{part.heading}</h2>
                  {part.paragraphs?.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                  {part.list ? (
                    part.ordered ? (
                      <ol>
                        {part.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul>
                        {part.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  ) : null}
                </section>
              ))}
            </article>
            <nav className="toc" aria-label="On this page">
              <b>On this page</b>
              {doc.parts.map((part) => (
                <a key={part.id} href={`#${part.id}`}>
                  {part.heading}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>
      <FaqList
        faqs={doc.faqs}
        eyebrow="Questions operators ask"
        title="Frequently asked questions"
      />
      <CtaBand />
    </>
  );
}
