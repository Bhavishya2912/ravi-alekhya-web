import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wedding Invitation — Jogendra & Alekhya" },
      {
        name: "description",
        content:
          "With the blessings of the Almighty and our elders, we joyfully invite you to the wedding celebration of Jogendra & Alekhya.",
      },
      { property: "og:title", content: "Wedding Invitation — Jogendra & Alekhya" },
      {
        property: "og:description",
        content: "Join us in celebrating the wedding of Jogendra & Alekhya.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/invite.html"
      title="Wedding Invitation"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
      allow="autoplay; fullscreen"
    />
  );
}
